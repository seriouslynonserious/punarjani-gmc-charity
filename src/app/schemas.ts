export interface Field {key:string;label:string;type:string;required:boolean;options?:string[]}
export interface Schema {key:string;title:string;tab:string;description:string;fields:Field[];status:string}
export const SCHEMAS:Record<string,Schema> = {
  "blood-donor": {
    "key": "blood-donor",
    "title": "Register as a Blood Donor",
    "tab": "Blood_Donors",
    "description": "Be a connection that could make a difference.",
    "fields": [
      {
        "key": "Name",
        "label": "Full Name",
        "type": "text",
        "required": true
      },
      {
        "key": "Age",
        "label": "Age",
        "type": "number",
        "required": true
      },
      {
        "key": "Gender",
        "label": "Gender",
        "type": "select",
        "required": true,
        "options": [
          "Female",
          "Male",
          "Non-binary",
          "Prefer not to say"
        ]
      },
      {
        "key": "Blood Group",
        "label": "Blood Group",
        "type": "select",
        "required": true,
        "options": [
          "A+",
          "A-",
          "B+",
          "B-",
          "AB+",
          "AB-",
          "O+",
          "O-"
        ]
      },
      {
        "key": "Phone",
        "label": "Phone Number",
        "type": "tel",
        "required": true
      },
      {
        "key": "Email",
        "label": "Email",
        "type": "email",
        "required": false
      },
      {
        "key": "District",
        "label": "District",
        "type": "text",
        "required": true
      },
      {
        "key": "City",
        "label": "City",
        "type": "text",
        "required": true
      },
      {
        "key": "Last Donation Date",
        "label": "Last Blood Donation Date",
        "type": "date",
        "required": false
      },
      {
        "key": "Availability",
        "label": "Current Availability",
        "type": "select",
        "required": true,
        "options": [
          "Available",
          "Temporarily Unavailable",
          "Contact Before Request"
        ]
      },
      {
        "key": "Preferred Contact",
        "label": "Preferred Contact Method",
        "type": "select",
        "required": true,
        "options": [
          "Phone",
          "WhatsApp",
          "Email"
        ]
      }
    ],
    "status": "Active"
  },
  "blood-request": {
    "key": "blood-request",
    "title": "Request Blood",
    "tab": "Blood_Requests",
    "description": "Share the details so our student volunteers can coordinate support.",
    "fields": [
      {
        "key": "Patient Name",
        "label": "Patient Name",
        "type": "text",
        "required": true
      },
      {
        "key": "Blood Group",
        "label": "Required Blood Group",
        "type": "select",
        "required": true,
        "options": [
          "A+",
          "A-",
          "B+",
          "B-",
          "AB+",
          "AB-",
          "O+",
          "O-"
        ]
      },
      {
        "key": "Units",
        "label": "Number of Units",
        "type": "number",
        "required": true
      },
      {
        "key": "Hospital",
        "label": "Hospital Name",
        "type": "text",
        "required": true
      },
      {
        "key": "Location",
        "label": "Hospital Location",
        "type": "text",
        "required": true
      },
      {
        "key": "District",
        "label": "District",
        "type": "text",
        "required": true
      },
      {
        "key": "City",
        "label": "City",
        "type": "text",
        "required": true
      },
      {
        "key": "Contact Person",
        "label": "Contact Person",
        "type": "text",
        "required": true
      },
      {
        "key": "Phone",
        "label": "Phone Number",
        "type": "tel",
        "required": true
      },
      {
        "key": "Required Date",
        "label": "Required Date",
        "type": "date",
        "required": true
      },
      {
        "key": "Urgency",
        "label": "Urgency",
        "type": "select",
        "required": true,
        "options": [
          "Normal",
          "Urgent",
          "Emergency"
        ]
      },
      {
        "key": "Additional Message",
        "label": "Additional Message",
        "type": "textarea",
        "required": false
      }
    ],
    "status": "Pending"
  },
  "hair-donor": {
    "key": "hair-donor",
    "title": "Donate Hair",
    "tab": "Hair_Donors",
    "description": "A part of you can help someone feel like themselves again.",
    "fields": [
      {
        "key": "Name",
        "label": "Full Name",
        "type": "text",
        "required": true
      },
      {
        "key": "Age",
        "label": "Age",
        "type": "number",
        "required": true
      },
      {
        "key": "Phone",
        "label": "Phone Number",
        "type": "tel",
        "required": true
      },
      {
        "key": "Email",
        "label": "Email",
        "type": "email",
        "required": false
      },
      {
        "key": "City",
        "label": "City",
        "type": "text",
        "required": true
      },
      {
        "key": "District",
        "label": "District",
        "type": "text",
        "required": true
      },
      {
        "key": "Hair Length",
        "label": "Hair Length (cm)",
        "type": "number",
        "required": true
      },
      {
        "key": "Donation Date",
        "label": "Expected Donation Date",
        "type": "date",
        "required": true
      },
      {
        "key": "Hair Status",
        "label": "Already Cut Hair?",
        "type": "select",
        "required": true,
        "options": [
          "Yes",
          "No"
        ]
      },
      {
        "key": "Notes",
        "label": "Additional Notes",
        "type": "textarea",
        "required": false
      }
    ],
    "status": "Pending"
  },
  "wig-request": {
    "key": "wig-request",
    "title": "Request a Wig",
    "tab": "Wig_Requests",
    "description": "Tell us how to reach you and what support you are looking for.",
    "fields": [
      {
        "key": "Patient Name",
        "label": "Patient Name",
        "type": "text",
        "required": true
      },
      {
        "key": "Age",
        "label": "Age",
        "type": "number",
        "required": true
      },
      {
        "key": "Contact Person",
        "label": "Contact Person",
        "type": "text",
        "required": true
      },
      {
        "key": "Phone",
        "label": "Phone Number",
        "type": "tel",
        "required": true
      },
      {
        "key": "Hospital",
        "label": "Hospital Name",
        "type": "text",
        "required": true
      },
      {
        "key": "City",
        "label": "City",
        "type": "text",
        "required": true
      },
      {
        "key": "District",
        "label": "District",
        "type": "text",
        "required": true
      },
      {
        "key": "Treatment Information",
        "label": "Treatment Information",
        "type": "textarea",
        "required": false
      },
      {
        "key": "Wig Details",
        "label": "Preferred Wig Details",
        "type": "textarea",
        "required": false
      },
      {
        "key": "Notes",
        "label": "Additional Notes",
        "type": "textarea",
        "required": false
      }
    ],
    "status": "Pending"
  },
  "medicine-request": {
    "key": "medicine-request",
    "title": "Request Medicine Assistance",
    "tab": "Medicine_Requests",
    "description": "Our volunteers will review your request and get in touch.",
    "fields": [
      {
        "key": "Patient Name",
        "label": "Patient Name",
        "type": "text",
        "required": true
      },
      {
        "key": "Age",
        "label": "Age",
        "type": "number",
        "required": true
      },
      {
        "key": "Phone",
        "label": "Phone Number",
        "type": "tel",
        "required": true
      },
      {
        "key": "Email",
        "label": "Email",
        "type": "email",
        "required": false
      },
      {
        "key": "City",
        "label": "City",
        "type": "text",
        "required": true
      },
      {
        "key": "District",
        "label": "District",
        "type": "text",
        "required": true
      },
      {
        "key": "Hospital",
        "label": "Hospital",
        "type": "text",
        "required": true
      },
      {
        "key": "Doctor",
        "label": "Doctor Name",
        "type": "text",
        "required": true
      },
      {
        "key": "Medicine Required",
        "label": "Medicine Required",
        "type": "textarea",
        "required": true
      },
      {
        "key": "Estimated Cost",
        "label": "Estimated Medicine Cost (\u20b9)",
        "type": "number",
        "required": false
      },
      {
        "key": "Duration",
        "label": "Duration Required",
        "type": "text",
        "required": true
      },
      {
        "key": "Description",
        "label": "Description of Need",
        "type": "textarea",
        "required": true
      },
      {
        "key": "Reference",
        "label": "Reference Information",
        "type": "textarea",
        "required": false
      }
    ],
    "status": "Pending"
  },
  "birthday-pledge": {
    "key": "birthday-pledge",
    "title": "Birthday Giving Pledge",
    "tab": "Birthday_Pledges",
    "description": "Make your special day a reason for someone else to smile. This is an expression of interest, with no payment collected.",
    "fields": [
      {
        "key": "Name",
        "label": "Full Name",
        "type": "text",
        "required": true
      },
      {
        "key": "Birthday",
        "label": "Birthday",
        "type": "date",
        "required": true
      },
      {
        "key": "Phone",
        "label": "Phone Number",
        "type": "tel",
        "required": true
      },
      {
        "key": "Email",
        "label": "Email",
        "type": "email",
        "required": false
      },
      {
        "key": "City",
        "label": "City",
        "type": "text",
        "required": true
      },
      {
        "key": "Interest",
        "label": "Area of Interest",
        "type": "text",
        "required": true
      },
      {
        "key": "Preferred Wing",
        "label": "Preferred Charity Wing",
        "type": "select",
        "required": true,
        "options": [
          "Blood Wing",
          "Hair to Care",
          "Drug Wing",
          "Gift of Giving"
        ]
      },
      {
        "key": "Message",
        "label": "Message",
        "type": "textarea",
        "required": false
      },
      {
        "key": "Recognition Consent",
        "label": "I agree to public recognition of my participation",
        "type": "checkbox",
        "required": false
      }
    ],
    "status": "Interested"
  },
  "volunteer": {
    "key": "volunteer",
    "title": "Join Our Student Volunteers",
    "tab": "Volunteers",
    "description": "Bring your time, ideas and compassion. We will find a way to put them to work.",
    "fields": [
      {
        "key": "Name",
        "label": "Full Name",
        "type": "text",
        "required": true
      },
      {
        "key": "Phone",
        "label": "Phone Number",
        "type": "tel",
        "required": true
      },
      {
        "key": "Email",
        "label": "Email",
        "type": "email",
        "required": false
      },
      {
        "key": "Batch",
        "label": "Year / Batch",
        "type": "text",
        "required": true
      },
      {
        "key": "Interest",
        "label": "Area of Interest",
        "type": "text",
        "required": true
      },
      {
        "key": "Preferred Wing",
        "label": "Preferred Wing",
        "type": "select",
        "required": true,
        "options": [
          "Blood Wing",
          "Hair to Care",
          "Drug Wing",
          "Gift of Giving"
        ]
      },
      {
        "key": "Message",
        "label": "Message",
        "type": "textarea",
        "required": false
      }
    ],
    "status": "Pending"
  },
  "contact": {
    "key": "contact",
    "title": "Send Us a Message",
    "tab": "Contact_Messages",
    "description": "Have a question or an idea? We would love to hear from you.",
    "fields": [
      {
        "key": "Name",
        "label": "Full Name",
        "type": "text",
        "required": true
      },
      {
        "key": "Email",
        "label": "Email",
        "type": "email",
        "required": true
      },
      {
        "key": "Phone",
        "label": "Phone",
        "type": "tel",
        "required": false
      },
      {
        "key": "Subject",
        "label": "Subject",
        "type": "text",
        "required": true
      },
      {
        "key": "Message",
        "label": "Message",
        "type": "textarea",
        "required": true
      }
    ],
    "status": "New"
  }
};
export const BLOOD_GROUPS=["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
export const STATUSES=["Pending","Contacted","Approved","Completed","Rejected","Active","Inactive","Interested","New"];
