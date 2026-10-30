export type FaqBlock =
  | { kind: 'p'; text: string }
  | { kind: 'h'; text: string }
  | { kind: 'ul'; items: string[] };

export type FaqGroup = {
  title: string;
  items: { question: string; blocks: FaqBlock[] }[];
};

export const FAQ_GROUPS: FaqGroup[] = [
  {
    "title": "About CROSSUB",
    "items": [
      {
        "question": "1. What is CROSSUB?",
        "blocks": [
          {
            "kind": "p",
            "text": "CROSSUB brings together FREE property management software, CROS AI, a FREE inspection app, FREE real market data, and professional service support in one platform."
          },
          {
            "kind": "p",
            "text": "CROS AI helps your team operate the software and move everyday tasks forward. When your agency needs additional support, you can also access:"
          },
          {
            "kind": "ul",
            "items": [
              "Inspection services: Get help when your team is short-staffed or schedules are full, with ingoing, outgoing, routine, and open inspections.",
              "Maintenance support: Connect with reliable, CROSSUB-approved maintenance providers when your properties need repairs or maintenance.",
              "Full-Service Property Management: If you don’t have a PM team, or need broader support, CROSSUB can provide comprehensive day-to-day property management under an agreed service scope."
            ]
          },
          {
            "kind": "p",
            "text": "Whether you need software, extra hands, or a full management service, CROSSUB helps your agency get the work done."
          }
        ]
      },
      {
        "question": "2. Is CROSSUB suitable for an agency that already has a property management team?",
        "blocks": [
          {
            "kind": "p",
            "text": "Yes. Your team can use CROSSUB for its everyday work and access additional services when it needs support."
          },
          {
            "kind": "p",
            "text": "Whether you need help with inspections, maintenance, staff leave, or a growing workload, you can choose the support that suits your agency."
          }
        ]
      },
      {
        "question": "3. Can I use CROSSUB if I don’t have a property management team?",
        "blocks": [
          {
            "kind": "p",
            "text": "Yes. CROSSUB offers full-service property management support for agencies without their own PM team."
          },
          {
            "kind": "p",
            "text": "The responsibilities, service coverage, fees, and client communication arrangements should be agreed before the service begins, so everyone understands who handles what."
          }
        ]
      }
    ]
  },
  {
    "title": "Pricing and Our Business Model",
    "items": [
      {
        "question": "4. Why is CROSSUB free?",
        "blocks": [
          {
            "kind": "p",
            "text": "We want to make property management technology more accessible and help agencies reduce their operating costs."
          },
          {
            "kind": "p",
            "text": "CROSSUB currently offers its core property management software, inspection app, real market data access, and all currently available CROS AI features free of charge."
          },
          {
            "kind": "h",
            "text": "What is not included?"
          },
          {
            "kind": "p",
            "text": "The free offering does not cover third-party products, services, or charges. If a feature or request involves a chargeable third-party service, that cost is separate. Inspection services, maintenance work, and Full-Service Property Management are also separate from the free software offering and may incur fees."
          },
          {
            "kind": "p",
            "text": "Any applicable charges will be disclosed before you commit to the relevant paid service."
          },
          {
            "kind": "h",
            "text": "Will AI always be free?"
          },
          {
            "kind": "p",
            "text": "All currently available CROS AI features are free to use at present. This is our current offering, rather than a commitment to permanent free access."
          },
          {
            "kind": "p",
            "text": "We may introduce or change pricing, usage limits, or access conditions for AI and other platform features in the future, subject to applicable law and any existing contractual commitments. If a change affects your access or introduces a charge, we will provide advance notice explaining the change, when it takes effect, and your available options. No new charge will apply retrospectively to use that was free when it occurred."
          },
          {
            "kind": "p",
            "text": "Please refer to our current pricing information and Terms of Service for the conditions that apply to your use of CROSSUB."
          }
        ]
      },
      {
        "question": "5. How does CROSSUB make money?",
        "blocks": [
          {
            "kind": "p",
            "text": "Our business model combines free software with optional paid services."
          },
          {
            "kind": "p",
            "text": "CROSSUB earns revenue from inspection services, maintenance service arrangements, and Full-Service Property Management. Depending on the service, this may include service fees, coordination fees, or commercial arrangements with participating providers."
          },
          {
            "kind": "p",
            "text": "This allows us to offer free technology while earning revenue when agencies choose additional service support."
          },
          {
            "kind": "p",
            "text": "You do not need to purchase these services to use our current free software offering. Any fees payable by your agency, and any commissions or commercial relationships requiring disclosure, will be explained before you commit to the relevant service."
          }
        ]
      },
      {
        "question": "6. Do I have to buy your services to use the free software?",
        "blocks": [
          {
            "kind": "p",
            "text": "No. You can use CROSSUB’s current free software offering without purchasing inspection services, maintenance services, or Full-Service Property Management."
          },
          {
            "kind": "p",
            "text": "Our inspection app is integrated with the CROSSUB CRM and must be used together with it. It is not available as a standalone app for use with another CRM. Both the inspection app and the CRM are currently free, subject to our applicable terms."
          },
          {
            "kind": "p",
            "text": "Using the app does not require you to book our inspection services or purchase any other paid services. Those services are optional."
          },
          {
            "kind": "p",
            "text": "Third-party charges are separate. Please see our pricing information and Terms of Service for current conditions."
          }
        ]
      },
      {
        "question": "7. Are there hidden fees?",
        "blocks": [
          {
            "kind": "p",
            "text": "No. Our current free software offering is separate from our optional paid services."
          },
          {
            "kind": "p",
            "text": "The CROSSUB CRM and inspection app are currently free to use together. Using them does not require you to purchase inspection services, maintenance services, or Full-Service Property Management."
          },
          {
            "kind": "p",
            "text": "Fees may apply if you choose a paid service or use a chargeable third-party product or service. Before you commit, we will explain the applicable charges, what is included, and any additional costs or cancellation conditions. If further work or costs require your approval, we will seek it before proceeding."
          },
          {
            "kind": "p",
            "text": "Our free offering may change in the future. Any changes will be communicated in advance, subject to applicable law and existing contractual commitments. Charges will not be applied retrospectively to use that was free when it occurred."
          }
        ]
      },
      {
        "question": "8. Will CROSSUB always be free?",
        "blocks": [
          {
            "kind": "p",
            "text": "CROSSUB currently offers its core CRM, inspection app, real market data access, and all currently available CROS AI features free of charge. This describes our current offering and is not a promise of permanent free access."
          },
          {
            "kind": "p",
            "text": "We may introduce paid features or change pricing, usage limits, or access conditions in the future, subject to applicable law and existing contractual commitments."
          },
          {
            "kind": "p",
            "text": "If a change introduces charges for something you currently use for free, we will provide advance notice explaining the new pricing, when it takes effect, and your options to continue or stop using the affected feature before charges begin. We will obtain any agreement required under applicable law or your contract."
          },
          {
            "kind": "p",
            "text": "No new charge will apply retrospectively to use that was free when it occurred. Optional professional services and chargeable third-party products or services remain separate from the free offering."
          },
          {
            "kind": "p",
            "text": "Please refer to our current pricing information and Terms of Service for the conditions that apply."
          }
        ]
      }
    ]
  },
  {
    "title": "Your Agency, Clients, and Data",
    "items": [
      {
        "question": "9. Does using CROSSUB give you access to my landlords and tenants?",
        "blocks": [
          {
            "kind": "p",
            "text": "Yes. CROSSUB provides dedicated landlord and tenant portals, helping them stay informed about their property or tenancy and making it easier for your agency to manage communication."
          },
          {
            "kind": "p",
            "text": "These portals give landlords and tenants access to information relevant to them, according to the access permissions and features available within the platform. Portal access does not give them unrestricted access to your agency’s records or other clients’ information."
          },
          {
            "kind": "p",
            "text": "Providing portal access does not, by itself, transfer your agency’s client relationships or appoint CROSSUB as the managing agent. Any additional management services are covered by a separate agreement."
          }
        ]
      },
      {
        "question": "10. Will CROSSUB approach my clients or take over my rent roll?",
        "blocks": [
          {
            "kind": "p",
            "text": "No. We do not use the client information your agency uploads to bypass your agency or solicit property management business from those clients."
          },
          {
            "kind": "p",
            "text": "Your agency’s use of CROSSUB does not transfer your rent roll, assign your management agreements, or appoint CROSSUB as the managing agent."
          },
          {
            "kind": "p",
            "text": "Landlord and tenant portals support your agency. They help your clients access relevant information and communicate more efficiently. Registering for portal access does not, by itself, make them CROSSUB’s property management clients."
          },
          {
            "kind": "p",
            "text": "Service communication is for delivering the service. Where authorised, CROSSUB or an assigned provider may contact landlords or tenants to arrange access, coordinate inspections, organise maintenance, or deliver another requested service. That contact does not authorise us to market competing property management services to them."
          },
          {
            "kind": "p",
            "text": "Booking support does not hand over your clients. Using our inspection or maintenance services does not give CROSSUB the right to take over the management of those properties."
          },
          {
            "kind": "p",
            "text": "Full Service is a separate, agreed arrangement. If your agency chooses Full-Service Property Management, a separate agreement will define responsibilities, management authority, client communication, and what happens when the arrangement ends. We will not treat ordinary platform use as consent to Full Service."
          },
          {
            "kind": "p",
            "text": "You can use CROSSUB’s technology and service support without handing over your client relationships or your rent roll."
          }
        ]
      },
      {
        "question": "11. If we upload our data to CROSSUB, are we giving you our clients or rent roll?",
        "blocks": [
          {
            "kind": "p",
            "text": "No. Using CROSSUB does not give CROSSUB ownership of your agency’s client relationships, rent roll, or business records. Free software does not mean handing over your business."
          },
          {
            "kind": "p",
            "text": "Uploading records allows CROSSUB to process them to provide the platform and the services you request. It does not transfer your management agreements or appoint CROSSUB as the managing agent."
          },
          {
            "kind": "p",
            "text": "Your client relationships remain yours. Landlord and tenant portals support your agency’s management and communication. Providing portal access does not, by itself, make those landlords or tenants CROSSUB’s property management clients."
          },
          {
            "kind": "p",
            "text": "Access to information is not ownership. Any access by CROSSUB or a service provider must be for a permitted purpose under the applicable service agreement and Privacy Policy. Booking an inspection or maintenance job does not transfer the underlying client relationship."
          },
          {
            "kind": "p",
            "text": "Full Service requires a separate agreement. If you engage CROSSUB for broader property management support, the agreement will define each party’s role, authority, client communication, and arrangements when the service ends."
          },
          {
            "kind": "p",
            "text": "Individuals retain their rights in relation to their personal information, and your agency must have authority to upload and use the records it provides."
          },
          {
            "kind": "p",
            "text": "CROSSUB is here to support your agency. Your choice to use our technology does not transfer your business to us."
          }
        ]
      },
      {
        "question": "12. How does CROSSUB protect our agency’s confidential information?",
        "blocks": [
          {
            "kind": "p",
            "text": "We understand that property management records contain sensitive information — including landlord and tenant details, property access instructions, inspection photos, financial records, and private communications."
          },
          {
            "kind": "p",
            "text": "Using CROSSUB does not make those records public or give everyone on the platform permission to access them. Access and use must follow the relevant permissions, service arrangements, and our Privacy Policy."
          },
          {
            "kind": "p",
            "text": "Access must have a legitimate purpose. Your agency’s information must only be accessed or processed for authorised purposes, such as providing the platform, supporting your account, delivering a requested service, or meeting legal obligations. Access for support or service delivery does not give someone unrestricted permission to use your records."
          },
          {
            "kind": "p",
            "text": "Landlords and tenants do not receive access to your entire account. Their portals are intended to provide information relevant to their own property or tenancy, subject to the platform’s permissions. Portal access does not authorise access to unrelated client records or your agency’s internal information."
          },
          {
            "kind": "p",
            "text": "Service providers do not receive unrestricted access to your business. When you request an inspection, maintenance job, or other service, information shared with the assigned provider must be relevant to that work. Arranging a repair, for example, does not require access to your entire rent roll."
          },
          {
            "kind": "p",
            "text": "AI processing must be covered by clear privacy terms. Where CROS AI processes information, the applicable disclosures must explain how that information is handled, including any external AI providers involved. Enabling an AI feature does not mean your records become publicly available."
          },
          {
            "kind": "p",
            "text": "Your information is not permission to compete for your clients. We do not use the client information your agency uploads to bypass your agency or solicit property management business from those clients."
          },
          {
            "kind": "p",
            "text": "Your agency also controls how its team uses the platform. Keep account access limited to authorised users, protect login details, and promptly update access when staff responsibilities change or someone leaves."
          },
          {
            "kind": "p",
            "text": "No online platform can promise that a security incident will never occur. Our Privacy Policy and applicable terms explain how we handle personal information, and you can contact us with questions about safeguards before uploading sensitive records."
          },
          {
            "kind": "p",
            "text": "Your agency trusts us with information needed to run its business. That information must be handled for defined purposes, with appropriate access restrictions and clear accountability."
          }
        ]
      },
      {
        "question": "13. How is our data stored and backed up?",
        "blocks": [
          {
            "kind": "p",
            "text": "CROSSUB uses cloud infrastructure alongside servers maintained at our own office as part of a layered approach to data storage and protection."
          },
          {
            "kind": "p",
            "text": "These arrangements support backup and recovery, reducing reliance on a single storage location and helping protect against data loss caused by an individual system failure."
          },
          {
            "kind": "p",
            "text": "Backup protection has practical limits. The information recoverable following an incident depends on the available backups and the circumstances of the event. No storage or backup system can guarantee uninterrupted access, zero data loss, or recovery of every recent change."
          },
          {
            "kind": "p",
            "text": "Storage location and processing location are different. Our use of cloud and office-based servers does not constitute a guarantee that all information remains exclusively in Australia. Depending on the services used, third-party infrastructure, AI, or support providers may involve processing, storage, or access outside Australia."
          },
          {
            "kind": "p",
            "text": "Details of applicable overseas handling, including relevant locations where practicable, should be read in our Privacy Policy and any service-specific disclosures."
          },
          {
            "kind": "p",
            "text": "If your agency has specific data residency, backup, or recovery requirements, please contact us before uploading information so we can confirm whether our current arrangements meet those requirements."
          }
        ]
      },
      {
        "question": "14. Can other agencies see our information?",
        "blocks": [
          {
            "kind": "p",
            "text": "No. Another agency does not gain access to your records simply because it also uses CROSSUB."
          },
          {
            "kind": "p",
            "text": "Your agency’s client details, property records, inspection reports, and internal communications are not shared with other agencies through ordinary platform use."
          },
          {
            "kind": "p",
            "text": "Landlord and tenant portal access is limited to the information relevant to their authorised access. It does not give them access to other clients’ records or your agency’s entire account."
          },
          {
            "kind": "p",
            "text": "If you authorise information to be shared for a service or collaboration, access is subject to the relevant permissions and arrangements. Booking an inspection or maintenance service does not give the provider unrestricted access to your agency’s records."
          },
          {
            "kind": "p",
            "text": "Using a shared platform does not mean sharing your agency’s database with other agencies."
          }
        ]
      },
      {
        "question": "15. What information can inspection and maintenance providers see?",
        "blocks": [
          {
            "kind": "p",
            "text": "Booking a service does not give the provider unrestricted access to your agency’s database or rent roll."
          },
          {
            "kind": "p",
            "text": "For an inspection or maintenance job, relevant information may include the property address, job instructions, related photos, access arrangements, and contact details needed to coordinate the work."
          },
          {
            "kind": "p",
            "text": "The information shared depends on the service and the provider’s authorised role. Access provided for a job does not authorise the provider to use those details for unrelated marketing or to solicit your property management clients."
          },
          {
            "kind": "p",
            "text": "Full-Service Property Management may require broader access, which is covered by a separate service agreement."
          }
        ]
      },
      {
        "question": "16. What happens if there is a security incident involving our information?",
        "blocks": [
          {
            "kind": "p",
            "text": "We take suspected unauthorised access, disclosure, or loss of information seriously."
          },
          {
            "kind": "p",
            "text": "Our response will depend on the nature of the incident and may include restricting affected access, investigating what happened, and taking steps to contain the issue."
          },
          {
            "kind": "p",
            "text": "Where notification is required under applicable law or our contractual commitments, we will notify the relevant parties. Information provided may include the records affected, the likely consequences, and recommended protective steps, as those facts become available."
          },
          {
            "kind": "p",
            "text": "You can report a suspected security issue through our support channel. Please avoid sending passwords or unnecessary personal information when making a report."
          }
        ]
      },
      {
        "question": "17. How is CROS AI different from a general AI chatbot?",
        "blocks": [
          {
            "kind": "p",
            "text": "CROS AI is built to help you operate CROSSUB, rather than simply provide answers in a separate chat window."
          },
          {
            "kind": "p",
            "text": "You can give instructions in everyday language and use supported functions to find information, prepare communications, and move tasks forward inside the platform."
          },
          {
            "kind": "p",
            "text": "The actions available depend on the features enabled for your account and your permissions. Some requests may produce a draft or proposed action for review, while others may complete a supported task."
          },
          {
            "kind": "p",
            "text": "You manage the properties. CROS AI helps operate the software."
          }
        ]
      },
      {
        "question": "18. Can CROS AI expose our confidential information?",
        "blocks": [
          {
            "kind": "p",
            "text": "Using CROS AI does not, by itself, publish your records or make them available to other agencies."
          },
          {
            "kind": "p",
            "text": "However, an AI request may require relevant information to be processed by CROSSUB and its AI service providers. AI processing is not necessarily confined to the server where your property records are stored."
          },
          {
            "kind": "p",
            "text": "The applicable privacy disclosures explain how information is handled, including third-party processing, retention, and any overseas handling."
          },
          {
            "kind": "p",
            "text": "Only include information relevant to your request, and avoid entering passwords, access credentials, or unnecessary sensitive information."
          },
          {
            "kind": "p",
            "text": "No AI system can be guaranteed risk-free. If your agency has specific confidentiality requirements, contact us before using AI with those records so we can confirm whether the available arrangements meet your needs."
          }
        ]
      },
      {
        "question": "19. Is our information used to train AI models?",
        "blocks": [
          {
            "kind": "p",
            "text": "Processing information to answer your request and using it to train an AI model are different activities."
          },
          {
            "kind": "p",
            "text": "The applicable arrangements depend on the AI feature and provider involved. Our AI privacy disclosures should be reviewed for details of training use, retention, and available controls."
          },
          {
            "kind": "p",
            "text": "We do not ask you to assume that every AI provider follows the same rules. If your agency requires a contractual restriction on model training, obtain written confirmation of the applicable arrangements before submitting confidential information."
          }
        ]
      },
      {
        "question": "20. Can CROS AI send messages or make changes without our approval?",
        "blocks": [
          {
            "kind": "p",
            "text": "CROS AI’s ability to act depends on the supported function, your permissions, and any automation you have enabled."
          },
          {
            "kind": "p",
            "text": "Preparing a draft is different from sending a message. Suggesting a change is different from saving it. The approval requirements for a function should be understood before you use it."
          },
          {
            "kind": "p",
            "text": "Where a workflow requires confirmation, review the details before approving it. Where automatic action is supported and enabled, it operates within the applicable settings and authority."
          },
          {
            "kind": "p",
            "text": "Do not assume that every action requires a separate approval, or that asking a question automatically authorises every related action."
          }
        ]
      },
      {
        "question": "21. What if CROS AI makes a mistake?",
        "blocks": [
          {
            "kind": "p",
            "text": "AI can make mistakes, so important outputs and actions need appropriate human review."
          },
          {
            "kind": "p",
            "text": "CROS AI may misunderstand instructions, miss relevant context, or produce inaccurate information. Check property details, recipients, amounts, dates, and proposed actions before relying on them."
          },
          {
            "kind": "p",
            "text": "If an error has already affected a record or communication, contact support promptly so the available correction options can be assessed. Reversing an action may depend on what occurred and whether another party has already received or acted on it."
          },
          {
            "kind": "p",
            "text": "CROS AI supports your team’s work; it does not replace professional judgement or your agency’s responsibilities."
          }
        ]
      },
      {
        "question": "22. Can we control what our staff and CROS AI can access?",
        "blocks": [
          {
            "kind": "p",
            "text": "Access depends on the roles, permissions, and AI controls available for your account."
          },
          {
            "kind": "p",
            "text": "Your agency should assign access according to each person’s responsibilities and update it when staff change roles or leave."
          },
          {
            "kind": "p",
            "text": "Before enabling a workflow, confirm what information it can access and what actions it can perform. Do not assume that every function has the same permission or approval controls."
          },
          {
            "kind": "p",
            "text": "If your agency requires a particular restriction or activity record, ask us to demonstrate that capability before relying on it."
          }
        ]
      }
    ]
  },
  {
    "title": "The Inspection App",
    "items": [
      {
        "question": "23. Is the inspection app free, and do we have to book your inspectors?",
        "blocks": [
          {
            "kind": "p",
            "text": "The inspection app and CROSSUB CRM are currently free to use together. You do not have to book our inspection services to use them."
          },
          {
            "kind": "p",
            "text": "Your own team can use the app for its inspections. If you need additional people to carry out inspections, that is a separate service and may involve fees."
          },
          {
            "kind": "p",
            "text": "The app must be used with the CROSSUB CRM. Current access conditions apply, and any chargeable third-party services are separate."
          }
        ]
      },
      {
        "question": "24. Why does the inspection app have to be used with the CROSSUB CRM?",
        "blocks": [
          {
            "kind": "p",
            "text": "The inspection app is an integrated part of CROSSUB, rather than a standalone app for another CRM."
          },
          {
            "kind": "p",
            "text": "It is designed to keep inspection records connected to the relevant property and management workflow within CROSSUB."
          },
          {
            "kind": "p",
            "text": "This means your agency needs to use the CROSSUB CRM to use the app. Both are currently free, and using them does not require you to purchase our optional professional services."
          }
        ]
      },
      {
        "question": "25. Why can’t I send inspection records directly to my own email?",
        "blocks": [
          {
            "kind": "p",
            "text": "The app saves inspection records within CROSSUB. Email delivery is a separate sharing function and depends on the options currently supported."
          },
          {
            "kind": "p",
            "text": "If direct email delivery is not available, it does not mean that CROSSUB takes ownership of your report. It means that particular delivery method is not currently supported."
          },
          {
            "kind": "p",
            "text": "Before relying on the app for a required reporting process, confirm the available viewing, download, and sharing options with us."
          }
        ]
      },
      {
        "question": "26. Can we export inspection reports or use them in another system?",
        "blocks": [
          {
            "kind": "p",
            "text": "The app’s connection to CROSSUB and the ability to export a report are separate matters."
          },
          {
            "kind": "p",
            "text": "Available exports depend on the current features and supported formats. A readable report is also different from a complete data export containing photos, notes, signatures, and historical records."
          },
          {
            "kind": "p",
            "text": "Importing an export into another CRM depends on that system’s requirements. We do not promise automatic compatibility with every platform."
          },
          {
            "kind": "p",
            "text": "If exporting or transferring records is essential to your agency, confirm the exact format and contents before adopting the workflow."
          }
        ]
      },
      {
        "question": "27. Can we use the inspection app without internet access?",
        "blocks": [
          {
            "kind": "p",
            "text": "Do not assume that every app function is available offline."
          },
          {
            "kind": "p",
            "text": "Offline capture, access to existing records, and synchronisation depend on the app’s currently supported capabilities."
          },
          {
            "kind": "p",
            "text": "Before attending a property with limited reception, confirm what will work without a connection. After reconnecting, check that the inspection details and photos have successfully synchronised before treating the record as complete."
          }
        ]
      }
    ]
  },
  {
    "title": "Inspection and Maintenance Services",
    "items": [
      {
        "question": "28. What inspection services does CROSSUB offer?",
        "blocks": [
          {
            "kind": "p",
            "text": "CROSSUB offers ingoing, outgoing, routine, and open inspection services."
          },
          {
            "kind": "p",
            "text": "These services provide extra support when your team is short-staffed, schedules are full, or you need someone on the ground."
          },
          {
            "kind": "p",
            "text": "Availability depends on the property location, service type, and booking capacity. Your booking should confirm the scope, price, timing, and expected deliverables before you commit."
          },
          {
            "kind": "p",
            "text": "Any additional requirements should be agreed as part of the booking."
          }
        ]
      },
      {
        "question": "29. Who arranges keys, property access, and tenant notices?",
        "blocks": [
          {
            "kind": "p",
            "text": "These responsibilities must be agreed before the inspection. They do not automatically transfer simply because a booking is made."
          },
          {
            "kind": "p",
            "text": "The booking arrangements should identify who handles keys, coordinates access, issues any required notices, and deals with failed access or rescheduling."
          },
          {
            "kind": "p",
            "text": "Your agency should provide accurate instructions and confirm any relevant authority or consent. If you need CROSSUB to handle an additional task, have it expressly included in the service scope."
          }
        ]
      },
      {
        "question": "30. What does “CROSSUB-approved” mean for maintenance providers?",
        "blocks": [
          {
            "kind": "p",
            "text": "It means the provider has been accepted to offer maintenance services through CROSSUB under our provider approval process."
          },
          {
            "kind": "p",
            "text": "Approval is not a blanket guarantee that every provider is suitable for every task or that every job will be faultless."
          },
          {
            "kind": "p",
            "text": "Any licensing, insurance, qualification, or specialist requirements relevant to your job should be confirmed before engagement. Ask us about the checks applicable to a provider if these are important to your decision."
          }
        ]
      },
      {
        "question": "31. Can maintenance work start without our approval?",
        "blocks": [
          {
            "kind": "p",
            "text": "Authority to proceed comes from the approved job instructions or an agreed standing authority."
          },
          {
            "kind": "p",
            "text": "The scope, pricing basis, and any spending limit should be clear before work begins."
          },
          {
            "kind": "p",
            "text": "If additional work or costs fall outside the existing authority, further approval is required before proceeding, unless an applicable emergency arrangement or legal requirement provides otherwise."
          },
          {
            "kind": "p",
            "text": "Any emergency authority should be agreed in advance, including who can authorise work and the limits that apply."
          }
        ]
      },
      {
        "question": "32. Can we request maintenance at any time? Is attendance guaranteed?",
        "blocks": [
          {
            "kind": "p",
            "text": "You can submit requests through the available platform channels, but submitting a request is not confirmation of attendance."
          },
          {
            "kind": "p",
            "text": "Provider availability depends on the location, trade, workload, and urgency. A job is confirmed when it has been accepted and attendance arrangements have been agreed."
          },
          {
            "kind": "p",
            "text": "Do not rely on an ordinary maintenance request as a guaranteed emergency response. Any after-hours or emergency coverage must be expressly confirmed."
          },
          {
            "kind": "p",
            "text": "Where there is an immediate threat to life or safety, contact the appropriate emergency service."
          }
        ]
      },
      {
        "question": "33. What happens if there is a problem with an inspection or maintenance job?",
        "blocks": [
          {
            "kind": "p",
            "text": "Report the issue promptly through the support channel for your booking, with the job details and relevant photos or records."
          },
          {
            "kind": "p",
            "text": "We can then assess the issue and coordinate the next steps with the parties involved. Depending on the circumstances, this may involve clarification, further inspection, or rectification."
          },
          {
            "kind": "p",
            "text": "Responsibility, available remedies, and any additional costs depend on the service agreement and applicable law. A particular refund or outcome cannot be promised before the issue is assessed."
          },
          {
            "kind": "p",
            "text": "Do not authorise additional chargeable work on the assumption that reimbursement is automatic."
          }
        ]
      }
    ]
  },
  {
    "title": "Full Service and Moving to CROSSUB",
    "items": [
      {
        "question": "34. What does Full-Service Property Management include?",
        "blocks": [
          {
            "kind": "p",
            "text": "Full Service provides comprehensive property management support for agencies that do not have their own PM team or need broader operational support."
          },
          {
            "kind": "p",
            "text": "The exact scope is agreed in writing. Your agreement identifies the day-to-day work CROSSUB will handle, your agency’s retained responsibilities, fees, authority, and reporting arrangements."
          },
          {
            "kind": "p",
            "text": "“Full Service” does not mean every possible activity is automatically included. Matters such as leasing, rent collection, arrears, trust accounting, compliance, and tribunal representation must be expressly addressed in the agreed scope."
          }
        ]
      },
      {
        "question": "35. Who manages the client relationship under Full Service?",
        "blocks": [
          {
            "kind": "p",
            "text": "The arrangement is agreed before the service starts, rather than assumed from your use of CROSSUB."
          },
          {
            "kind": "p",
            "text": "The agreement should identify who holds the management appointment, who communicates with landlords and tenants, whose branding is used, and who can make particular decisions."
          },
          {
            "kind": "p",
            "text": "It should also explain escalation procedures and what happens to communications and records when the service ends."
          },
          {
            "kind": "p",
            "text": "Using the free CRM or booking an individual inspection does not automatically enrol your agency or its clients in Full Service."
          }
        ]
      },
      {
        "question": "36. Can CROSSUB help us move from another CRM?",
        "blocks": [
          {
            "kind": "p",
            "text": "Contact us to assess the migration options for your existing system and records."
          },
          {
            "kind": "p",
            "text": "Before agreeing to a transfer, we need to establish what can be imported, what needs preparation, any assistance fees, and the proposed timetable."
          },
          {
            "kind": "p",
            "text": "Not every field, attachment, or historical transaction will necessarily transfer automatically. Your agency should review the imported information and retain the records needed to meet its obligations before closing access to the previous system."
          }
        ]
      },
      {
        "question": "37. Can we leave CROSSUB and take our records with us?",
        "blocks": [
          {
            "kind": "p",
            "text": "Using CROSSUB does not transfer ownership of your agency’s business records to us. However, ownership and the available export method are separate questions."
          },
          {
            "kind": "p",
            "text": "Before closing your account, confirm the export options, included records, formats, processing time, and any applicable charges or access deadlines."
          },
          {
            "kind": "p",
            "text": "An export may not reproduce every feature or screen from the platform, and compatibility with another CRM is not automatic."
          },
          {
            "kind": "p",
            "text": "Ending software use is also separate from ending an active service agreement. Notice periods, outstanding jobs, retention requirements, and deletion arrangements are governed by the applicable terms and law."
          }
        ]
      },
      {
        "question": "38. What should we confirm before choosing CROSSUB?",
        "blocks": [
          {
            "kind": "p",
            "text": "Ask us to demonstrate the workflows and service arrangements your agency will actually use."
          },
          {
            "kind": "p",
            "text": "Check how CROS AI performs relevant tasks, how permissions and approvals work, how inspection records can be accessed or exported, and which professional services are available in your area."
          },
          {
            "kind": "p",
            "text": "If a particular privacy, data residency, reporting, or integration requirement is essential to your agency, obtain confirmation before relying on it."
          },
          {
            "kind": "p",
            "text": "You can choose the current free software offering without purchasing optional professional services. Any additional support should have a clear scope and pricing before you commit."
          }
        ]
      }
    ]
  }
];

const HIDDEN_WITHOUT_SERVICES = new Set(['3', '15', '28', '29', '30', '31', '32', '33', '34', '35']);

function questionNumber(question: string): string {
  return question.match(/^\d+/)?.[0] ?? '';
}

function paragraphs(question: string, texts: string[]) {
  return {
    question,
    blocks: texts.map((text) => ({ kind: 'p' as const, text })),
  };
}

function withoutPaidServices(group: FaqGroup): FaqGroup | null {
  if (group.title === 'Inspection and Maintenance Services') return null;

  const items = group.items.flatMap((item) => {
    const number = questionNumber(item.question);
    if (HIDDEN_WITHOUT_SERVICES.has(number)) return [];

    if (number === '1') {
      return [
        paragraphs(item.question, [
          'CROSSUB brings together FREE property management software, CROS AI, a FREE inspection app, and FREE real market data in one platform.',
          'CROS AI helps your team operate the software and move everyday tasks forward.',
        ]),
      ];
    }
    if (number === '2') {
      return [paragraphs(item.question, ['Yes. Your team can use CROSSUB for its everyday work.'])];
    }
    if (number === '4') {
      return [
        {
          question: item.question,
          blocks: item.blocks.flatMap((block): FaqBlock[] => {
            if (block.kind === 'p' && block.text.startsWith('The free offering does not cover')) {
              return [
                {
                  kind: 'p',
                  text: 'The free offering does not cover third-party products, services, or charges. If a feature or request involves a chargeable third-party service, that cost is separate.',
                },
              ];
            }
            if (block.kind === 'p' && block.text.startsWith('Any applicable charges will be disclosed')) return [];
            return [block];
          }),
        },
      ];
    }
    if (number === '5') {
      return [
        paragraphs(item.question, [
          'The current CROSSUB software, inspection app, and CROS AI features are free to use.',
          'Third-party products or charges, where they apply, are separate and are explained before you commit.',
        ]),
      ];
    }
    if (number === '6') {
      return [
        paragraphs(item.question, [
          'No. You can use CROSSUB’s current free software offering without a subscription.',
          'Our inspection app is integrated with the CROSSUB CRM and must be used together with it. It is not available as a standalone app for use with another CRM. Both the inspection app and the CRM are currently free, subject to our applicable terms.',
          'Third-party charges are separate. Please see our Terms of Service for current conditions.',
        ]),
      ];
    }
    if (number === '7') {
      return [
        paragraphs(item.question, [
          'No. The current free software offering does not have a subscription fee.',
          'The CROSSUB CRM and inspection app are currently free to use together.',
          'Fees may apply if you use a chargeable third-party product or service. Before you commit, we will explain the applicable charges, what is included, and any additional costs or cancellation conditions.',
          'Our free offering may change in the future. Any changes will be communicated in advance, subject to applicable law and existing contractual commitments. Charges will not be applied retrospectively to use that was free when it occurred.',
        ]),
      ];
    }
    if (number === '8') {
      return [
        {
          question: item.question,
          blocks: item.blocks.map((block) =>
            block.kind === 'p' && block.text.startsWith('No new charge will apply retrospectively')
              ? {
                  kind: 'p' as const,
                  text: 'No new charge will apply retrospectively to use that was free when it occurred. Chargeable third-party products or services remain separate from the free software.',
                }
              : block,
          ),
        },
      ];
    }
    if (number === '9') {
      return [
        {
          question: item.question,
          blocks: item.blocks.filter(
            (block) => !(block.kind === 'p' && block.text.includes('additional management services')),
          ),
        },
      ];
    }
    if (number === '10') {
      return [
        paragraphs(item.question, [
          'No. We do not use the client information your agency uploads to bypass your agency or solicit property management business from those clients.',
          'Your agency’s use of CROSSUB does not transfer your rent roll, assign your management agreements, or appoint CROSSUB as the managing agent.',
          'Landlord and tenant portals support your agency. They help your clients access relevant information and communicate more efficiently. Registering for portal access does not, by itself, make them CROSSUB’s property management clients.',
          'You can use CROSSUB’s technology without handing over your client relationships or your rent roll.',
        ]),
      ];
    }
    if (number === '11') {
      return [
        {
          question: item.question,
          blocks: item.blocks.filter(
            (block) =>
              block.kind !== 'p' ||
              (!block.text.startsWith('Access to information is not ownership') &&
                !block.text.startsWith('Full Service requires')),
          ),
        },
      ];
    }
    if (number === '12') {
      return [
        {
          question: item.question,
          blocks: item.blocks.filter(
            (block) => !(block.kind === 'p' && block.text.startsWith('Service providers do not receive')),
          ),
        },
      ];
    }
    if (number === '14') {
      return [
        {
          question: item.question,
          blocks: item.blocks.map((block) =>
            block.kind === 'p' && block.text.startsWith('If you authorise information')
              ? {
                  kind: 'p' as const,
                  text: 'If you authorise information to be shared, access is subject to the relevant permissions and arrangements.',
                }
              : block,
          ),
        },
      ];
    }
    if (number === '23') {
      return [
        paragraphs('23. Is the inspection app free?', [
          'The inspection app and CROSSUB CRM are currently free to use together.',
          'Your own team can use the app for its inspections.',
          'The app must be used with the CROSSUB CRM. Current access conditions apply, and any chargeable third-party services are separate.',
        ]),
      ];
    }
    if (number === '24') {
      return [
        {
          question: item.question,
          blocks: item.blocks.map((block) =>
            block.kind === 'p' && block.text.includes('optional professional services')
              ? {
                  kind: 'p' as const,
                  text: 'This means your agency needs to use the CROSSUB CRM to use the app. Both are currently free.',
                }
              : block,
          ),
        },
      ];
    }
    if (number === '38') {
      return [
        paragraphs(item.question, [
          'Ask us to demonstrate the workflows your agency will actually use.',
          'Check how CROS AI performs relevant tasks, how permissions and approvals work, and how inspection records can be accessed or exported.',
          'If a particular privacy, data residency, reporting, or integration requirement is essential to your agency, obtain confirmation before relying on it.',
        ]),
      ];
    }
    return [item];
  });

  if (items.length === 0) return null;
  return {
    title: group.title === 'Full Service and Moving to CROSSUB' ? 'Moving to CROSSUB' : group.title,
    items,
  };
}

export function faqGroupsFor(offersServices: boolean): FaqGroup[] {
  if (offersServices) return FAQ_GROUPS;
  return FAQ_GROUPS.flatMap((group) => {
    const next = withoutPaidServices(group);
    return next ? [next] : [];
  });
}
