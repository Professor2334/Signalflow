#  database-schema.md

## Overview
This document defines the database schema for the **SignalFlow AI marketing landing page**.

This is a **lightweight schema**, designed only to support:
- User acquisition (free trial / waitlist)
- Conversion tracking
- Basic analytics insights
- Marketing optimization experiments

This is **not the full product database**.

---

##  Design Principles

- Minimal and scalable  
- Focused on conversion tracking  
- Privacy-first data collection  
- No unnecessary complexity  
- Easy integration with analytics tools  

---

##  Core Entities

The marketing page uses the following core entities:

1. Leads (Free trial / waitlist users)  
2. Events (User interactions)  
3. Sessions (User visits)  
4. Experiments (A/B testing)  
5. Testimonials (Social proof content)  

---

## 1.  Leads Table

Stores users who sign up for free trial or waitlist.

### Table: leads

| Field Name      | Type        | Description |
|----------------|------------|-------------|
| id             | UUID       | Unique identifier |
| email          | String     | User email address |
| source         | String     | Acquisition source (e.g. hero_cta, footer_cta) |
| created_at     | Timestamp  | Time of signup |
| consent        | Boolean    | User consent for data collection |
| status         | String     | lead, trial, converted |

### Notes
- Email must be validated before insertion  
- Consent is required for compliance  
- Source helps track best-performing CTA  

---

## 2.  Events Table

Tracks user actions across the landing page.

### Table: events

| Field Name      | Type        | Description |
|----------------|------------|-------------|
| id             | UUID       | Unique identifier |
| session_id     | UUID       | Linked session |
| event_type     | String     | click, scroll, view |
| event_target   | String     | element interacted with |
| metadata       | JSON       | Additional event data |
| created_at     | Timestamp  | Event time |

### Example Events
- hero_cta_click  
- pricing_view  
- feature_card_click  
- scroll_75_percent  

---

## 3.  Sessions Table

Tracks user visits and behavior context.

### Table: sessions

| Field Name      | Type        | Description |
|----------------|------------|-------------|
| id             | UUID       | Unique identifier |
| user_id        | UUID       | Nullable (if not signed up) |
| device         | String     | mobile, desktop |
| referrer       | String     | traffic source |
| location       | String     | country (approximate) |
| started_at     | Timestamp  | Session start time |
| ended_at       | Timestamp  | Session end time |

### Notes
- No invasive tracking  
- Location should be approximate (privacy-first)  

---

## 4.  Experiments Table (A/B Testing)

Supports conversion optimization experiments.

### Table: experiments

| Field Name      | Type        | Description |
|----------------|------------|-------------|
| id             | UUID       | Unique identifier |
| name           | String     | Experiment name |
| variant        | String     | A / B / C |
| description    | String     | What is being tested |
| created_at     | Timestamp  | Creation time |

---

### Table: experiment_assignments

| Field Name      | Type        | Description |
|----------------|------------|-------------|
| id             | UUID       | Unique identifier |
| session_id     | UUID       | Linked session |
| experiment_id  | UUID       | Linked experiment |
| variant        | String     | Assigned variant |

---

## 5.  Testimonials Table

Stores social proof content shown on landing page.

### Table: testimonials

| Field Name      | Type        | Description |
|----------------|------------|-------------|
| id             | UUID       | Unique identifier |
| name           | String     | Person name |
| role           | String     | Job title |
| company        | String     | Company name |
| content        | Text       | Testimonial text |
| avatar_url     | String     | Image URL |
| created_at     | Timestamp  | Entry time |

---

##  Relationships

- sessions → events (1 to many)  
- sessions → experiment_assignments (1 to many)  
- experiments → experiment_assignments (1 to many)  
- leads may optionally link to sessions  

---

##  Data Privacy & Safety

### Rules
- Do not store sensitive personal data  
- Require user consent before storing email  
- Avoid precise location tracking  
- Anonymize session data where possible  

---

##  Data Flow

User visits page  
→ session created  
→ events tracked  
→ user clicks CTA  
→ email submitted  
→ lead stored  

---

##  Validation Rules

### Email Validation
- Must be valid email format  
- Must not be empty  
- Must be unique (optional constraint)

### Event Validation
- event_type must be predefined  
- metadata must be structured JSON  

---

##  Implementation Notes

This schema can be implemented using:

- PostgreSQL (recommended)  
- Firebase / Supabase (for fast setup)  
- Or simple API storage (for MVP)  

---

