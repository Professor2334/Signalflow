const fs = require('fs');

try {
    const rawTokens = fs.readFileSync('./design-tokens.tokens.json', 'utf8');
    const tokens = JSON.parse(rawTokens);

    // Use -sys in the naming of the CSS variables for the system
    function toCssVarName(path) {
        // lowercase and replace spaces with hyphens
        const kebabPath = path.map(p => {
            let str = p.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
            return str.replace(/[^a-z0-9]+/g, '-');
        });
        return `--sys-${kebabPath.join('-')}`;
    }

    function resolveValue(val) {
        if (typeof val === 'string' && val.includes('{') && val.includes('}')) {
            return val.replace(/\{([^}]+)\}/g, (match, refName) => {
                const refPath = refName.split('.');
                const kebabPath = refPath.map(p => {
                    let str = p.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
                    return str.replace(/[^a-z0-9]+/g, '-');
                });
                return `var(--sys-${kebabPath.join('-')})`;
            });
        }
        return val;
    }

    const cssVars = [];

    function traverse(obj, currentPath) {
        if (obj !== null && typeof obj === 'object') {
            // Check if it's a token (has "value" and "type")
            if (obj.value !== undefined && obj.type !== undefined) {
                 // Handle composite tokens (value is object) or simple tokens (value is primitive)
                 if (typeof obj.value === 'object') {
                     for (const [key, val] of Object.entries(obj.value)) {
                         let resolvedVal = resolveValue(val);
                         if (obj.type === 'custom-fontStyle' || obj.type === 'typography') {
                             if (typeof resolvedVal === 'number' && resolvedVal !== 0 && (key.toLowerCase().includes('size') || key.toLowerCase().includes('height') || key.toLowerCase().includes('spacing') || key.toLowerCase().includes('indent'))) {
                                 resolvedVal = resolvedVal + 'px';
                             }
                         }
                         const propPath = [...currentPath, key];
                         cssVars.push(`  ${toCssVarName(propPath)}: ${resolvedVal};`);
                     }
                 } else {
                     let resolvedVal = resolveValue(obj.value);
                     if ((obj.type === 'dimension' || obj.type === 'sizing' || obj.type === 'spacing' || obj.type === 'borderRadius' || obj.type === 'borderWidth') && typeof resolvedVal === 'number' && resolvedVal !== 0) {
                         resolvedVal = resolvedVal + 'px';
                     }
                     cssVars.push(`  ${toCssVarName(currentPath)}: ${resolvedVal};`);
                 }
            } else {
                // It's a group, traverse deeper
                for (const key in obj) {
                    if (key !== 'extensions' && key !== 'description' && obj.hasOwnProperty(key)) {
                        traverse(obj[key], [...currentPath, key]);
                    }
                }
            }
        }
    }

    traverse(tokens, []);

    const cssOutput = `:root {\n${cssVars.join('\n')}\n}\n`;
    fs.writeFileSync('design-tokens.css', cssOutput);
    console.log('Successfully generated design-tokens.css with -sys variables.');
} catch (error) {
    console.error('Error generating CSS:', error);
}
