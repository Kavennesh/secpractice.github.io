// ============================================================
// pbq.js — Performance-Based Questions (PBQs)
// CompTIA Security+ SY0-701 Study App
//
// Three interactive question types:
//   "multi"  — select all that apply
//   "match"  — match each item to the correct category
//   "order"  — arrange the items into the correct sequence
//
// For "order", the `items` array is stored in the CORRECT order
// and shuffled when displayed.
// ============================================================

const pbqs = [

  {
    id: 'pbq1',
    type: 'multi',
    domainId: 4,
    title: 'Harden a Public Web Server',
    scenario: `You have just provisioned a new internet-facing web server that will host a public company website. The server was installed from a default image and nothing has been changed yet.`,
    question: `Select the THREE actions that reduce the server's attack surface and improve its security posture.`,
    selectCount: 3,
    options: [
      { text: `Disable or rename the default administrator account`, correct: true },
      { text: `Close every network port except those required for HTTP (80) and HTTPS (443)`, correct: true },
      { text: `Apply all current operating system and application security patches`, correct: true },
      { text: `Install every available software package now, in case it is needed later`, correct: false },
      { text: `Create an unauthenticated guest account for convenience`, correct: false },
      { text: `Leave verbose debugging and detailed error messages enabled`, correct: false }
    ],
    explanation: `Hardening reduces the attack surface by removing anything unnecessary. Disabling/renaming default accounts removes a well-known target, closing unused ports removes entry points, and patching closes known vulnerabilities. Installing unneeded software, creating guest accounts, and exposing verbose errors all expand the attack surface and leak information to attackers.`
  },

  {
    id: 'pbq2',
    type: 'match',
    domainId: 2,
    title: 'Identify the Attack from the Indicator',
    scenario: `A SOC analyst is reviewing four suspicious entries captured by the web application firewall and SIEM. Each entry is a clear indicator of a specific attack technique.`,
    question: `Match each observed indicator to the attack it represents.`,
    categories: ['SQL Injection', 'Cross-Site Scripting (XSS)', 'Brute Force', 'Directory Traversal'],
    items: [
      { text: `A login request submits  ' OR '1'='1' --  in the username field`, answer: 'SQL Injection' },
      { text: `A comment field is submitted containing  <script>document.cookie</script>`, answer: 'Cross-Site Scripting (XSS)' },
      { text: `4,000 failed logins for one account from a single IP within two minutes`, answer: 'Brute Force' },
      { text: `A web request asks for the path  ../../../../etc/passwd`, answer: 'Directory Traversal' }
    ],
    explanation: `SQL injection inserts SQL logic (' OR '1'='1') to manipulate a database query. XSS injects browser-executed script (<script>) into a page. A burst of failed logins for one account is a brute-force/password attack. The ../../ sequence walking out of the web root toward /etc/passwd is a directory (path) traversal attack.`
  },

  {
    id: 'pbq3',
    type: 'order',
    domainId: 4,
    title: 'Incident Response Lifecycle',
    scenario: `Your organization follows the standard incident response process. A help-desk ticket has just been escalated as a possible security incident.`,
    question: `Place the incident response phases in the correct order, from first to last.`,
    items: [
      'Preparation',
      'Detection & Analysis',
      'Containment',
      'Eradication',
      'Recovery',
      'Post-Incident Activity (Lessons Learned)'
    ],
    explanation: `The incident response lifecycle runs: Preparation (before anything happens) → Detection & Analysis (identify and confirm the incident) → Containment (limit the damage) → Eradication (remove the threat) → Recovery (restore normal operations) → Post-Incident Activity (document and learn lessons to improve).`
  },

  {
    id: 'pbq4',
    type: 'match',
    domainId: 3,
    title: 'Common Ports and Services',
    scenario: `While reviewing firewall rules, you need to confirm which service runs on each port number before approving the change.`,
    question: `Match each port number to the service that uses it by default.`,
    categories: ['HTTPS', 'SSH', 'RDP', 'DNS'],
    items: [
      { text: `TCP port 443`, answer: 'HTTPS' },
      { text: `TCP port 22`, answer: 'SSH' },
      { text: `TCP port 3389`, answer: 'RDP' },
      { text: `TCP/UDP port 53`, answer: 'DNS' }
    ],
    explanation: `Port 443 carries HTTPS (encrypted web traffic). Port 22 is SSH (secure remote shell and SFTP). Port 3389 is RDP (Microsoft Remote Desktop). Port 53 is DNS (name resolution), which uses UDP for queries and TCP for larger transfers such as zone transfers.`
  },

  {
    id: 'pbq5',
    type: 'multi',
    domainId: 4,
    title: 'Build True Multi-Factor Authentication',
    scenario: `A system currently authenticates users with only a password, which is "something you know." Security wants to upgrade it to true multi-factor authentication (MFA).`,
    question: `Select the TWO additional methods that each add a DIFFERENT authentication factor (not another "something you know").`,
    selectCount: 2,
    options: [
      { text: `A fingerprint scan`, correct: true },
      { text: `A one-time code generated by a hardware security token`, correct: true },
      { text: `A security question about the user's first pet`, correct: false },
      { text: `A second, longer password`, correct: false },
      { text: `A memorized numeric PIN`, correct: false }
    ],
    explanation: `True MFA requires factors from different categories. A fingerprint is "something you are" (biometric) and a hardware token is "something you have" (possession). Security questions, extra passwords, and PINs are all still "something you know" — adding them does not create a new factor, so they would not make the system genuinely multi-factor.`
  },

  {
    id: 'pbq6',
    type: 'order',
    domainId: 4,
    title: 'Forensic Order of Volatility',
    scenario: `A compromised system is still powered on. A forensic investigator must collect evidence and wants to preserve the most fragile data before it disappears.`,
    question: `Arrange the evidence sources in the correct order of collection, from MOST volatile to LEAST volatile.`,
    items: [
      'CPU registers and cache',
      'RAM and running process/network state',
      'Data on the local hard drive',
      'Logs forwarded to a remote SIEM',
      'Archival and backup media'
    ],
    explanation: `The order of volatility says to collect the most fleeting data first. CPU registers and cache vanish almost instantly, followed by RAM and live process/network state, which are lost on power-off. Disk data persists through a reboot, remote logs are more stable still, and archival/backup media is the most durable and least volatile.`
  },

  {
    id: 'pbq7',
    type: 'match',
    domainId: 1,
    title: 'Classify the Security Control',
    scenario: `An auditor is reviewing the organization's controls and asks you to classify each one by its control category as defined in the Security+ objectives.`,
    question: `Match each control to its category.`,
    categories: ['Technical', 'Managerial', 'Operational', 'Physical'],
    items: [
      { text: `A firewall ruleset that filters network traffic`, answer: 'Technical' },
      { text: `A written risk assessment and classification policy`, answer: 'Managerial' },
      { text: `A recurring security awareness training program for staff`, answer: 'Operational' },
      { text: `Bollards and a perimeter fence around the data center`, answer: 'Physical' }
    ],
    explanation: `Technical (logical) controls are implemented by technology, such as a firewall. Managerial controls are administrative and policy-based, such as a risk assessment policy. Operational controls are processes carried out by people, such as awareness training. Physical controls protect tangible assets, such as bollards and fencing.`
  },

  {
    id: 'pbq8',
    type: 'match',
    domainId: 2,
    title: 'Identify the Malware Type',
    scenario: `A malware analyst is triaging four samples. Each one behaves in a way that clearly identifies its category.`,
    question: `Match each behavior description to the type of malware.`,
    categories: ['Worm', 'Trojan', 'Spyware', 'Rootkit'],
    items: [
      { text: `Self-replicates and spreads across the network with no user interaction`, answer: 'Worm' },
      { text: `Disguised as a legitimate free utility so the user installs it willingly`, answer: 'Trojan' },
      { text: `Silently records keystrokes and browsing activity, then exfiltrates it`, answer: 'Spyware' },
      { text: `Hides itself and maintains stealthy, privileged, persistent access`, answer: 'Rootkit' }
    ],
    explanation: `A worm self-propagates across systems without user action. A Trojan hides malicious code inside something that appears legitimate so the victim installs it. Spyware covertly monitors and harvests user activity. A rootkit conceals its presence (often at the OS or kernel level) to keep privileged, persistent access.`
  },

  {
    id: 'pbq9',
    type: 'multi',
    domainId: 3,
    title: 'Configure Least-Privilege Firewall Rules',
    scenario: `A web server sits in a screened subnet (DMZ). It must serve a public website to anyone on the internet, but it should only be administered over SSH by staff on the internal admin subnet (10.0.5.0/24).`,
    question: `Select the THREE firewall rules that correctly support this using the principle of least privilege.`,
    selectCount: 3,
    options: [
      { text: `Allow inbound TCP 443 from Any to the web server`, correct: true },
      { text: `Allow inbound TCP 80 from Any to the web server`, correct: true },
      { text: `Allow inbound TCP 22 from 10.0.5.0/24 to the web server`, correct: true },
      { text: `Allow inbound TCP 22 from Any to the web server`, correct: false },
      { text: `Allow all inbound traffic from Any to the web server`, correct: false },
      { text: `Allow the web server to initiate connections to all internal hosts`, correct: false }
    ],
    explanation: `Public web traffic requires inbound 80 and 443 from Any. SSH administration should be restricted to only the internal admin subnet (TCP 22 from 10.0.5.0/24). Opening SSH to Any, allowing all inbound traffic, or letting a DMZ host freely reach the internal network all violate least privilege and would let an attacker who compromises the server pivot inward.`
  },

  {
    id: 'pbq10',
    type: 'order',
    domainId: 4,
    title: 'Respond to a Ransomware Outbreak',
    scenario: `An analyst notices files being encrypted on a file server and confirms an active ransomware infection that appears to be spreading. The organization has tested, offline backups.`,
    question: `Place the response actions in the best order, from first to last.`,
    items: [
      'Disconnect the infected host(s) from the network to contain the spread',
      'Notify the incident response team and management',
      'Determine the scope — identify all affected systems and data',
      'Eradicate the ransomware from every affected system',
      'Recover data and services from known-good offline backups',
      'Document the incident and hold a lessons-learned review'
    ],
    explanation: `Containment comes first — isolating infected hosts stops the spread immediately. Next, notify the IR team and management so the response is coordinated. Then determine the full scope before acting broadly. Eradicate the malware, recover from clean offline backups (never pay the ransom when good backups exist), and finally document the incident and conduct a lessons-learned review to prevent recurrence.`
  }

];
