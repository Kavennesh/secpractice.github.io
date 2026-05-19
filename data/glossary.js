const glossaryTerms = [
  {
    term: "AAA",
    short: "Authentication, Authorization, and Accounting",
    definition: "A security framework that controls access to resources. Authentication verifies identity, Authorization determines what access is granted, and Accounting tracks what actions were taken. Common implementations include RADIUS and TACACS+.",
    letter: "A"
  },
  {
    term: "ABAC",
    short: "Attribute-Based Access Control",
    definition: "An access control model that grants or denies access based on attributes of the user, resource, environment, and requested action. More flexible and fine-grained than RBAC. Example: allow access only if user.department = 'Finance' AND resource.classification = 'Internal' AND time BETWEEN 9am-5pm.",
    letter: "A"
  },
  {
    term: "AES",
    short: "Advanced Encryption Standard",
    definition: "A symmetric block cipher adopted as the US government standard, replacing DES. Operates on 128-bit blocks with key sizes of 128, 192, or 256 bits. AES-256 is considered extremely secure and is widely used in TLS, disk encryption, and VPNs.",
    letter: "A"
  },
  {
    term: "APT",
    short: "Advanced Persistent Threat",
    definition: "A sophisticated, long-term cyberattack typically conducted by nation-states or well-funded groups. Characterized by stealth, patience, and persistence — attackers may remain undetected for months or years while exfiltrating data. Examples include APT28 (Fancy Bear) and APT41.",
    letter: "A"
  },
  {
    term: "BIA",
    short: "Business Impact Analysis",
    definition: "A systematic process to identify and evaluate the potential effects of a disruption to critical business operations. Identifies critical assets, interdependencies, and recovery priorities. Outputs include RTO and RPO values, and forms the foundation of disaster recovery and business continuity planning.",
    letter: "B"
  },
  {
    term: "CIA Triad",
    short: "Confidentiality, Integrity, Availability",
    definition: "The three core principles of information security. Confidentiality ensures data is accessible only to authorized parties (encryption, access control). Integrity ensures data hasn't been altered without authorization (hashing, digital signatures). Availability ensures authorized users can access resources when needed (redundancy, backups).",
    letter: "C"
  },
  {
    term: "CVE",
    short: "Common Vulnerabilities and Exposures",
    definition: "A publicly accessible dictionary of known cybersecurity vulnerabilities maintained by MITRE. Each entry receives a unique identifier (e.g., CVE-2021-44228 for Log4Shell). CVEs provide a standardized way to reference specific vulnerabilities across tools, databases, and communications.",
    letter: "C"
  },
  {
    term: "CVSS",
    short: "Common Vulnerability Scoring System",
    definition: "An open framework for communicating the characteristics and severity of software vulnerabilities. Scores range from 0.0 to 10.0 (Critical: 9.0-10.0, High: 7.0-8.9, Medium: 4.0-6.9, Low: 0.1-3.9). Base score factors include attack vector, complexity, privileges required, user interaction, and impact on CIA.",
    letter: "C"
  },
  {
    term: "DAC",
    short: "Discretionary Access Control",
    definition: "An access control model where the owner of a resource decides who can access it and with what permissions. Users can pass access rights to others at their discretion. Standard file system permissions in Windows (NTFS ACLs) and Linux (chmod) use DAC. Less secure than MAC because permissions can be delegated.",
    letter: "D"
  },
  {
    term: "DAD Triad",
    short: "Disclosure, Alteration, Denial",
    definition: "The adversarial counterpart to the CIA Triad. Disclosure (breaks Confidentiality) — unauthorized data exposure. Alteration (breaks Integrity) — unauthorized data modification. Denial (breaks Availability) — preventing legitimate access. Security controls aim to prevent each of these attacks.",
    letter: "D"
  },
  {
    term: "DES",
    short: "Data Encryption Standard",
    definition: "A symmetric block cipher developed in the 1970s, now considered insecure due to its small 56-bit key size (vulnerable to brute force). Replaced by Triple DES (3DES) and later AES. 3DES applies DES three times but is slow and now deprecated. Never use DES or 3DES in new systems.",
    letter: "D"
  },
  {
    term: "DLP",
    short: "Data Loss Prevention",
    definition: "Security technology that monitors, detects, and prevents unauthorized transmission of sensitive data. Can inspect email, web uploads, USB transfers, and printing. Uses content inspection (regex, fingerprinting) to identify sensitive data (PII, PCI data, intellectual property) and apply policy actions (block, alert, quarantine).",
    letter: "D"
  },
  {
    term: "DMZ",
    short: "Demilitarized Zone",
    definition: "A network segment positioned between the internal trusted network and the untrusted internet, typically containing publicly accessible servers (web, email, DNS). Provides an additional layer of protection — if a DMZ server is compromised, attackers don't have direct access to the internal network.",
    letter: "D"
  },
  {
    term: "DRP",
    short: "Disaster Recovery Plan",
    definition: "A documented process for recovering IT systems and data following a disaster (natural or man-made). Specifies recovery procedures, responsible parties, RTOs, RPOs, backup locations, and communication plans. A DRP is the IT-focused component of the broader Business Continuity Plan (BCP).",
    letter: "D"
  },
  {
    term: "ECDHE",
    short: "Elliptic Curve Diffie-Hellman Ephemeral",
    definition: "A key exchange protocol based on elliptic curve cryptography. The 'Ephemeral' aspect means new key pairs are generated for each session, providing Perfect Forward Secrecy (PFS) — compromise of long-term keys doesn't expose past sessions. Used in TLS 1.3 as the default key exchange.",
    letter: "E"
  },
  {
    term: "EDR",
    short: "Endpoint Detection and Response",
    definition: "Security software that continuously monitors endpoints for suspicious activity, records behavior data, and provides tools for investigation and response. Detects advanced threats that signature-based AV misses, including fileless malware and living-off-the-land attacks. Examples: CrowdStrike Falcon, Microsoft Defender for Endpoint.",
    letter: "E"
  },
  {
    term: "GDPR",
    short: "General Data Protection Regulation",
    definition: "EU regulation (effective 2018) governing the collection, storage, and processing of personal data of EU residents. Key principles: lawful basis for processing, data minimization, purpose limitation, accuracy, storage limits, integrity/confidentiality. Grants individuals rights to access, erasure ('right to be forgotten'), and portability. Fines up to €20M or 4% of global revenue.",
    letter: "G"
  },
  {
    term: "HIPAA",
    short: "Health Insurance Portability and Accountability Act",
    definition: "US legislation protecting the privacy and security of Protected Health Information (PHI). The Security Rule requires administrative, physical, and technical safeguards for electronic PHI. The Privacy Rule governs use and disclosure. Covered entities and their business associates must comply. Violations can result in civil and criminal penalties.",
    letter: "H"
  },
  {
    term: "HMAC",
    short: "Hash-based Message Authentication Code",
    definition: "A mechanism for verifying both data integrity and authenticity using a cryptographic hash function combined with a secret key. Unlike a simple hash, HMAC requires knowledge of the shared key to verify, preventing tampering by third parties. Used in TLS, JWT, and API authentication (e.g., HMAC-SHA256).",
    letter: "H"
  },
  {
    term: "Honeypot",
    short: "Decoy system designed to attract and detect attackers",
    definition: "A security resource designed to be probed, attacked, or compromised to detect malicious activity and gather threat intelligence. High-interaction honeypots simulate full systems; low-interaction simulate only specific services. A honeynet is a network of honeypots. Honeypots provide early warning and attacker behavior data.",
    letter: "H"
  },
  {
    term: "IDS",
    short: "Intrusion Detection System",
    definition: "A security system that monitors network traffic or host activity for suspicious patterns and generates alerts. NIDS (Network-based IDS) monitors network traffic; HIDS (Host-based IDS) monitors system calls, log files, and file changes. Uses signature-based or anomaly-based detection. Passive — detects but does not block.",
    letter: "I"
  },
  {
    term: "IPS",
    short: "Intrusion Prevention System",
    definition: "Like an IDS but deployed inline (in the traffic path), allowing it to actively block detected threats in addition to alerting. False positives can block legitimate traffic, so tuning is critical. Sits between the internet and internal network, inspecting and filtering packets in real-time. Can be host-based (HIPS) or network-based (NIPS).",
    letter: "I"
  },
  {
    term: "ISO 27001",
    short: "International standard for Information Security Management Systems",
    definition: "An international standard (ISO/IEC 27001) that specifies requirements for establishing, implementing, maintaining, and continually improving an Information Security Management System (ISMS). Organizations can certify compliance through accredited auditors. Provides a risk-based approach to managing information security, complemented by ISO 27002 (controls guidance).",
    letter: "I"
  },
  {
    term: "IPSec",
    short: "Internet Protocol Security",
    definition: "A suite of protocols for securing IP communications through authentication and encryption. Two main protocols: AH (Authentication Header) — provides integrity and authentication; ESP (Encapsulated Security Payload) — adds confidentiality. Two modes: Transport (encrypts payload only) and Tunnel (encrypts entire packet). Used in VPNs.",
    letter: "I"
  },
  {
    term: "Kerberos",
    short: "Network authentication protocol using tickets",
    definition: "A ticket-based authentication protocol developed at MIT. Uses a Key Distribution Center (KDC) with an Authentication Server (AS) and Ticket Granting Server (TGS). Users authenticate once and receive a Ticket Granting Ticket (TGT), then exchange it for service tickets. Eliminates sending passwords over the network. Default authentication in Active Directory.",
    letter: "K"
  },
  {
    term: "LDAP",
    short: "Lightweight Directory Access Protocol",
    definition: "A protocol for accessing and maintaining distributed directory information services (like Active Directory). Uses a hierarchical tree structure with Distinguished Names (DNs). LDAP queries retrieve user accounts, groups, and attributes. Port 389 (unencrypted) and 636 (LDAPS). Used for SSO, authentication, and user provisioning.",
    letter: "L"
  },
  {
    term: "MAC",
    short: "Mandatory Access Control",
    definition: "An access control model where the operating system enforces access decisions based on security labels assigned to objects and clearance levels assigned to subjects. Users cannot change permissions. Used in high-security environments (government, military). SELinux and AppArmor implement MAC on Linux. Contrast with DAC where owners control access.",
    letter: "M"
  },
  {
    term: "MFA",
    short: "Multi-Factor Authentication",
    definition: "Authentication using two or more independent factors from: something you know (password, PIN), something you have (hardware token, smart card, phone), something you are (biometrics), and somewhere you are (geolocation). Significantly reduces account compromise risk — stolen passwords alone are insufficient. Required by PCI DSS and NIST for privileged access.",
    letter: "M"
  },
  {
    term: "NIST CSF",
    short: "NIST Cybersecurity Framework",
    definition: "A voluntary framework developed by NIST to improve cybersecurity risk management in critical infrastructure. The Framework Core has five functions: Identify, Protect, Detect, Respond, Recover. Version 2.0 (2024) added Govern. Widely adopted across industries as a flexible, risk-based approach to cybersecurity management.",
    letter: "N"
  },
  {
    term: "OAuth",
    short: "Open Authorization",
    definition: "An open standard authorization framework that allows third-party applications to obtain limited access to user accounts without exposing credentials. Uses access tokens. Example: 'Login with Google' grants an app access to your Google profile without sharing your Google password. OAuth 2.0 is the current version. Note: OAuth is for authorization, not authentication (that's OIDC).",
    letter: "O"
  },
  {
    term: "OSINT",
    short: "Open-Source Intelligence",
    definition: "Intelligence gathered from publicly available sources: social media, websites, public records, forums, WHOIS, job postings, Shodan, and more. Used in penetration testing reconnaissance and threat intelligence. Shodan indexes internet-connected devices; Maltego maps relationships; theHarvester collects emails and domains.",
    letter: "O"
  },
  {
    term: "PCI DSS",
    short: "Payment Card Industry Data Security Standard",
    definition: "A set of security standards required for all entities that store, process, or transmit payment card data. Maintained by the PCI Security Standards Council (founded by Visa, Mastercard, AmEx, etc.). 12 requirements cover network security, cardholder data protection, vulnerability management, access control, monitoring, and security policies.",
    letter: "P"
  },
  {
    term: "Penetration Testing",
    short: "Authorized simulated cyberattack to find vulnerabilities",
    definition: "A security assessment where authorized testers attempt to exploit vulnerabilities in systems to identify weaknesses before malicious actors can. Types: black box (no prior info), white box (full info), gray box (partial info). Phases: reconnaissance, scanning, exploitation, post-exploitation, reporting. Must have signed authorization — unauthorized testing is illegal.",
    letter: "P"
  },
  {
    term: "Phishing",
    short: "Social engineering attack using deceptive communications",
    definition: "A social engineering attack that deceives victims via email (phishing), SMS (smishing), or voice (vishing) to steal credentials, install malware, or commit fraud. Spear phishing targets specific individuals; whaling targets executives. Indicators: urgency, spoofed sender, suspicious links/attachments, requests for credentials.",
    letter: "P"
  },
  {
    term: "PKI",
    short: "Public Key Infrastructure",
    definition: "A framework of policies, procedures, hardware, software, and roles needed to create, manage, distribute, use, store, and revoke digital certificates. Key components: Certificate Authority (CA) signs and issues certificates; Registration Authority (RA) verifies identity; Certificate Revocation Lists (CRLs) or OCSP handle revocation. Enables trust in public key cryptography.",
    letter: "P"
  },
  {
    term: "RAID 0",
    short: "Disk striping — performance, no redundancy",
    definition: "Data striped across multiple disks for improved read/write performance. No redundancy — if any disk fails, ALL data is lost. Minimum 2 disks. Storage capacity = sum of all disks. Used when performance is critical and data loss is acceptable (scratch drives, caching). NOT a backup solution.",
    letter: "R"
  },
  {
    term: "RAID 1",
    short: "Disk mirroring — redundancy, no performance gain",
    definition: "Data written identically to two or more disks (mirroring). Provides redundancy — system survives one disk failure. Storage capacity = size of one disk (50% efficiency). Slightly improved read performance. Minimum 2 disks. Simple and reliable. Used for OS drives and critical data requiring high availability.",
    letter: "R"
  },
  {
    term: "RAID 5",
    short: "Striping with distributed parity — balance of speed and redundancy",
    definition: "Data and parity information striped across 3+ disks. Can survive one disk failure — the failed disk's data is reconstructed from parity. Storage efficiency: (N-1)/N disks usable. Good balance of performance, capacity, and redundancy. Rebuild performance degrades under heavy load. Vulnerable during rebuild.",
    letter: "R"
  },
  {
    term: "RAID 10",
    short: "Striped mirrors — best performance and redundancy",
    definition: "Combines RAID 1 (mirroring) and RAID 0 (striping). Data mirrored then striped across mirror pairs. Requires minimum 4 disks. Can survive multiple disk failures as long as no mirror loses both disks. 50% storage efficiency. Best performance and redundancy combination. Higher cost than RAID 5.",
    letter: "R"
  },
  {
    term: "RADIUS",
    short: "Remote Authentication Dial-In User Service",
    definition: "A networking protocol providing centralized Authentication, Authorization, and Accounting (AAA) management. Widely used for network access control: VPN authentication, Wi-Fi (802.1X/EAP-RADIUS), and remote access. Uses UDP (ports 1812/1813). Encrypts only the password in transit. Compare with TACACS+ which encrypts the entire payload.",
    letter: "R"
  },
  {
    term: "Ransomware",
    short: "Malware that encrypts files and demands payment",
    definition: "Malicious software that encrypts victim files or locks systems, demanding payment (usually cryptocurrency) for decryption keys. Modern ransomware often exfiltrates data before encrypting (double extortion). Spread via phishing, RDP exploits, and supply chain attacks. Notable examples: WannaCry, NotPetya, Ryuk, LockBit. Mitigate with offline backups, MFA, and patching.",
    letter: "R"
  },
  {
    term: "RBAC",
    short: "Role-Based Access Control",
    definition: "An access control model that assigns permissions to roles rather than individual users. Users are assigned roles based on job function. Simplifies administration — changing a role affects all users with that role. Implements least privilege when roles are properly defined. Example: 'Accountant' role has access to financial systems; 'HR' role has access to HR systems.",
    letter: "R"
  },
  {
    term: "RPO",
    short: "Recovery Point Objective",
    definition: "The maximum acceptable amount of data loss measured in time. Defines how far back recovery must restore data. An RPO of 4 hours means you can lose up to 4 hours of data — backups must occur at least every 4 hours. Lower RPO = more frequent backups = higher cost. Critical for defining backup frequency and replication strategy.",
    letter: "R"
  },
  {
    term: "RSA",
    short: "Rivest-Shamir-Adleman asymmetric encryption",
    definition: "The most widely used asymmetric (public-key) cryptographic algorithm. Security based on the mathematical difficulty of factoring large prime numbers. Key sizes: 2048-bit minimum (3072 or 4096 recommended). Used for: digital signatures, key exchange, and certificate authorities. Slower than symmetric encryption — typically used to encrypt symmetric keys, not bulk data.",
    letter: "R"
  },
  {
    term: "RTO",
    short: "Recovery Time Objective",
    definition: "The maximum acceptable downtime — how quickly a system must be restored after a disaster. An RTO of 4 hours means the system must be operational within 4 hours of failure. Lower RTO requires more investment in hot standby systems and automation. Used alongside RPO to design recovery strategies and choose between hot, warm, and cold sites.",
    letter: "R"
  },
  {
    term: "SAML",
    short: "Security Assertion Markup Language",
    definition: "An XML-based open standard for exchanging authentication and authorization data between an Identity Provider (IdP) and Service Provider (SP). Enables Single Sign-On (SSO) across different security domains. Assertions contain authentication statements, attribute statements, and authorization decisions. Widely used in enterprise SSO with identity providers like Okta, Azure AD, and ADFS.",
    letter: "S"
  },
  {
    term: "SHA",
    short: "Secure Hashing Algorithm",
    definition: "A family of cryptographic hash functions. SHA-1 (160-bit) is deprecated — vulnerable to collision attacks. SHA-2 family (SHA-256, SHA-384, SHA-512) is current standard. SHA-3 uses a different design (Keccak). Hashing is one-way — same input always produces same output, any change produces completely different hash. Used for integrity verification, digital signatures, and password storage.",
    letter: "S"
  },
  {
    term: "SIEM",
    short: "Security Information and Event Management",
    definition: "A platform that aggregates and correlates security log data from across the environment to detect threats, support investigations, and satisfy compliance. Features: log collection/normalization, real-time correlation rules, alerting, dashboards, and long-term log retention. Examples: Splunk, Microsoft Sentinel, IBM QRadar, Elastic SIEM.",
    letter: "S"
  },
  {
    term: "SOAR",
    short: "Security Orchestration, Automation, and Response",
    definition: "A platform that integrates security tools and automates repetitive security operations tasks. Capabilities: orchestration (connecting tools), automation (scripting responses), case management, and threat intelligence integration. Example: automatically quarantine a host when EDR detects malware, create a ticket, and notify the analyst — reducing MTTD and MTTR.",
    letter: "S"
  },
  {
    term: "SOX",
    short: "Sarbanes-Oxley Act",
    definition: "US federal law (2002) requiring public companies to maintain accurate financial records and implement internal controls. Section 404 requires management assessment of internal controls over financial reporting. IT security implications: access controls, audit trails, change management, and separation of duties for financial systems. Non-compliance can result in criminal penalties.",
    letter: "S"
  },
  {
    term: "SSL",
    short: "Secure Sockets Layer (deprecated)",
    definition: "The predecessor to TLS for encrypted communications. SSL 2.0 and 3.0 are deprecated and insecure (POODLE, BEAST attacks). Superseded by TLS 1.0, then TLS 1.2, then TLS 1.3. The term 'SSL' is often incorrectly used colloquially to mean TLS. All SSL versions should be disabled — use TLS 1.2 minimum, TLS 1.3 preferred.",
    letter: "S"
  },
  {
    term: "SSO",
    short: "Single Sign-On",
    definition: "An authentication mechanism allowing users to log in once and gain access to multiple applications without re-authenticating. Reduces password fatigue, simplifies access management, and can improve security (fewer passwords = less phishing surface). Implemented with protocols like SAML, OAuth/OIDC, and Kerberos. Risk: compromise of SSO credentials provides broad access.",
    letter: "S"
  },
  {
    term: "TACACS+",
    short: "Terminal Access Controller Access Control System Plus",
    definition: "A Cisco-developed AAA protocol that separates authentication, authorization, and accounting functions. Encrypts the entire payload (unlike RADIUS which only encrypts the password). Uses TCP port 49. Preferred over RADIUS for device administration (routers, switches). Allows per-command authorization, making it granular for network device management.",
    letter: "T"
  },
  {
    term: "TLS",
    short: "Transport Layer Security",
    definition: "The cryptographic protocol securing communications over networks (web, email, VoIP). Successor to SSL. TLS 1.3 (current standard) eliminates weak ciphers, requires forward secrecy, and provides faster handshakes. Provides confidentiality (encryption), integrity (MAC), and authentication (certificates). Indicated by 'https://' and padlock icon in browsers.",
    letter: "T"
  },
  {
    term: "VPN",
    short: "Virtual Private Network",
    definition: "Creates an encrypted tunnel over a public network to provide secure remote access or site-to-site connectivity. Types: Remote access VPN (individual users) and site-to-site VPN (connecting networks). Protocols: IPSec, SSL/TLS, OpenVPN, WireGuard. Split tunneling routes only corporate traffic through VPN. Always-on VPN ensures continuous protection.",
    letter: "V"
  },
  {
    term: "VLAN",
    short: "Virtual Local Area Network",
    definition: "A logical network segmentation technology that divides a physical switch into multiple isolated broadcast domains. Improves security (separates departments, isolates IoT devices), reduces broadcast traffic, and simplifies management. Inter-VLAN routing requires a Layer 3 device. VLAN hopping attacks attempt to access unauthorized VLANs by exploiting misconfigured trunk ports.",
    letter: "V"
  },
  {
    term: "WAF",
    short: "Web Application Firewall",
    definition: "A security device or service that filters HTTP/HTTPS traffic to and from a web application, protecting against OWASP Top 10 attacks (SQLi, XSS, CSRF, etc.). Operates at Layer 7. Can be deployed in-line (blocking), monitoring (detection only), or learning mode. Can use signature-based or behavior-based detection. Examples: AWS WAF, Cloudflare WAF, F5 ASM.",
    letter: "W"
  },
  {
    term: "XDR",
    short: "Extended Detection and Response",
    definition: "An evolution of EDR that integrates and correlates security data across endpoints, networks, cloud, email, and identity sources for unified threat detection and response. Reduces alert fatigue by correlating signals from multiple sources into high-fidelity incidents. Examples: Palo Alto Cortex XDR, Microsoft Defender XDR, Trend Micro Vision One.",
    letter: "X"
  },
  {
    term: "Zero Trust",
    short: "Security model: never trust, always verify",
    definition: "A security framework based on the principle that no user, device, or network should be implicitly trusted — every access request must be verified. Key tenets: verify explicitly (authenticate and authorize every request), use least privilege access, assume breach. Components: Policy Engine (decisions), Policy Administrator (communicates decisions), Policy Enforcement Point (enforces). Contrasts with perimeter-based 'castle and moat' security.",
    letter: "Z"
  }
];
