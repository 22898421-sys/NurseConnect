# Security notes

- This repository is a static public website.
- Do not commit patient records, booking data, API secrets, credentials or private keys.
- Do not implement clinical-data storage in browser `localStorage`.
- Keep clinician authentication in the secure EIRENIX Care application.
- The current Request Care page hands users to the existing supervisor-provided secure system.
- If an EIRENIX API is later connected, use a secure backend/serverless function and keep secrets out of frontend JavaScript.
