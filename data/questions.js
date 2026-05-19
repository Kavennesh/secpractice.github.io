const questions = [
  {
    id: 1,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 1,
    question: `Matt is updating the organization's threat assessment process. What category of control is Matt implementing?`,
    choices: {
      A: `Operational`,
      B: `Technical`,
      C: `Corrective`,
      D: `Managerial`
    },
    correct: "D",
    explanation: `Managerial controls are procedural mechanisms that focus on the mechanics of the risk management process. Threat assessment is an example of one of these activities.`
  },
  {
    id: 2,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 1,
    question: `Jade's organization recently suffered a security breach that affected stored credit card data. Jade's primary concern is the fact that the organization is subject to sanctions for violating the provisions of the Payment Card Industry Data Security Standard. What category of risk is concerning Jade?`,
    choices: {
      A: `Strategic`,
      B: `Compliance`,
      C: `Operational`,
      D: `Financial`
    },
    correct: "B",
    explanation: `The breach of credit card information may cause many different impacts on the organization, including compliance, operational, and financial risks. However, in this scenario, Jade's primary concern is violating PCI DSS, making his concern a compliance risk.`
  },
  {
    id: 3,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 1,
    question: `Chris is responding to a security incident that compromised one of his organization's web servers. He believes that the attackers defaced one or more pages on the website. What cybersecurity objective did this attack violate?`,
    choices: {
      A: `Confidentiality`,
      B: `Nonrepudiation`,
      C: `Integrity`,
      D: `Availability`
    },
    correct: "C",
    explanation: `The defacement of a website alters content without authorization and is, therefore, a violation of the integrity objective. The attackers may also have breached the confidentiality or availability of the website, but the scenario does not provide us with enough information to draw those conclusions.`
  },
  {
    id: 4,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 1,
    question: `Tonya is concerned about the risk that an attacker will attempt to gain access to her organization's database server. She is searching for a control that would discourage the attacker from attempting to gain access. What type of security control is she seeking to implement?`,
    choices: {
      A: `Preventive`,
      B: `Detective`,
      C: `Corrective`,
      D: `Deterrent`
    },
    correct: "D",
    explanation: `Deterrent controls are designed to prevent an attacker from attempting to violate security policies in the first place. Preventive controls would attempt to block an attack that was about to take place. Corrective controls would remediate the issues that arose during an attack. Detective controls detect issues or indicators of issues.`
  },
  {
    id: 5,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 1,
    question: `Greg is implementing a data loss prevention system. He would like to ensure that it protects against transmissions of sensitive information by guests on his wireless network. What DLP technology would best meet this goal?`,
    choices: {
      A: `Watermarking`,
      B: `Pattern recognition`,
      C: `Host-based`,
      D: `Network-based`
    },
    correct: "D",
    explanation: `In this case, Greg must use a network-based DLP system. Hostbased DLP requires the use of agents, which would not be installed on guest systems. Greg may use watermarking and/or pattern recognition to identify the sensitive information, but he must use network-based DLP to meet his goal.`
  },
  {
    id: 6,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 1,
    question: `What term best describes data that is being sent between two systems over a network connection?`,
    choices: {
      A: `Data at rest`,
      B: `Data in transit`,
      C: `Data in processing`,
      D: `Data in use`
    },
    correct: "B",
    explanation: `Data being sent over a network is data in transit. Data at rest is stored data that resides on hard drives, tapes, in the cloud, or on other storage media. Data in processing, or data in use, is data that is actively in use by a computer system.`
  },
  {
    id: 7,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 1,
    question: `Tina is tuning her organization's intrusion prevention system to prevent false positive alerts. What type of control is Tina implementing?`,
    choices: {
      A: `Technical control`,
      B: `Physical control`,
      C: `Managerial control`,
      D: `Operational control`
    },
    correct: "A",
    explanation: `Technical controls enforce confidentiality, integrity, and availability in the digital space. Examples of technical security controls include firewall rules, access control lists, intrusion prevention systems, and encryption.`
  },
  {
    id: 8,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 1,
    question: `Which one of the following is not a common goal of a cybersecurity attacker?`,
    choices: {
      A: `Disclosure`,
      B: `Denial`,
      C: `Alteration`,
      D: `Allocation`
    },
    correct: "D",
    explanation: `The three primary goals of cybersecurity attackers are disclosure, alteration, and denial. These map directly to the three objectives of cybersecurity professionals: confidentiality, integrity, and availability.`
  },
  {
    id: 9,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 1,
    question: `Tony is reviewing the status of his organization's defenses against a breach of their file server. He believes that a compromise of the file server could reveal information that would prevent the company from continuing to do business. What term best describes the risk that Tony is considering?`,
    choices: {
      A: `Strategic`,
      B: `Reputational`,
      C: `Financial`,
      D: `Operational`
    },
    correct: "A",
    explanation: `The risk that Tony is contemplating could fit any one of these categories. However, his primary concern is that the company may no longer be able to do business if the risk materializes. This is a strategic risk.`
  },
  {
    id: 10,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 1,
    question: `Which one of the following data elements is not commonly associated with identity theft?`,
    choices: {
      A: `Social Security number`,
      B: `Driver's license number`,
      C: `Frequent flyer number`,
      D: `Passport number`
    },
    correct: "C",
    explanation: `Although it is possible that a frequent flyer account number, or any other account number for that matter, could be used in identity theft, it is far more likely that identity thieves would use core identity documents. These include drivers' licenses, passports, and Social Security numbers.`
  },
  {
    id: 11,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 1,
    question: `What term best describes an organization's desired security state?`,
    choices: {
      A: `Control objectives`,
      B: `Security priorities`,
      C: `Strategic goals`,
      D: `Best practices`
    },
    correct: "A",
    explanation: `As an organization analyzes its risk environment, technical and business leaders determine the level of protection required to preserve the confidentiality, integrity, and availability of their information and systems. They express these requirements by writing the control objectives that the organization wishes to achieve. These control objectives are statements of a desired security state.`
  },
  {
    id: 12,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 1,
    question: `Lou mounted the sign below on the fence surrounding his organization's datacenter. What control type best describes this control? Source: Gabriel Cassan / Adobe Stock`,
    choices: {
      A: `Compensating`,
      B: `Detective`,
      C: `Physical`,
      D: `Deterrent`
    },
    correct: "D",
    explanation: `This question is a little tricky. The use of an actual guard dog could be considered a deterrent, physical, or detective control. It could even be a compensating control in some circumstances. However, the question asks about the presence of a sign and does not state that an actual dog is used. The sign only has value as a deterrent control. Be careful when facing exam questions like this to read the details of the question.`
  },
  {
    id: 13,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 1,
    question: `What technology uses mathematical algorithms to render information unreadable to those lacking the required key?`,
    choices: {
      A: `Data loss prevention`,
      B: `Data obfuscation`,
      C: `Data minimization`,
      D: `Data encryption`
    },
    correct: "D",
    explanation: `Encryption technology uses mathematical algorithms to protect information from prying eyes, both while it is in transit over a network and while it resides on systems. Encrypted data is unintelligible to anyone who does not have access to the appropriate decryption key, making it safe to store and transmit encrypted data over otherwise insecure means.`
  },
  {
    id: 14,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 1,
    question: `Greg recently conducted an assessment of his organization's security controls and discovered a potential gap: the organization does not use full-disk encryption on laptops. What type of control gap exists in this case?`,
    choices: {
      A: `Detective`,
      B: `Corrective`,
      C: `Deterrent`,
      D: `Preventive`
    },
    correct: "D",
    explanation: `The use of full-disk encryption is intended to prevent a security incident from occurring if a device is lost or stolen. Therefore, this is a preventive control gap.`
  },
  {
    id: 15,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 1,
    question: `What compliance regulation most directly affects the operations of a health-care provider?`,
    choices: {
      A: `HIPAA`,
      B: `PCI DSS`,
      C: `GLBA`,
      D: `SOX`
    },
    correct: "A",
    explanation: `Although a health-care provider may be impacted by any of these regulations, the Health Insurance Portability and Accountability Act (HIPAA) provides direct regulations for the security and privacy of protected health information and would have the most direct impact on a health-care provider.`
  },
  {
    id: 16,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 1,
    question: `Nolan is writing an after action report on a security breach that took place in his organization. The attackers stole thousands of customer records from the organization's database. What cybersecurity principle was most impacted in this breach?`,
    choices: {
      A: `Availability`,
      B: `Nonrepudiation`,
      C: `Confidentiality`,
      D: `Integrity`
    },
    correct: "C",
    explanation: `The disclosure of sensitive information to unauthorized individuals is a violation of the principle of confidentiality.`
  },
  {
    id: 17,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 1,
    question: `Which one of the following objectives is not one of the three main objectives that information security professionals must achieve to protect their organizations against cybersecurity threats?`,
    choices: {
      A: `Integrity`,
      B: `Nonrepudiation`,
      C: `Availability`,
      D: `Confidentiality`
    },
    correct: "B",
    explanation: `The three primary objectives of cybersecurity professionals are confidentiality, integrity, and availability.`
  },
  {
    id: 18,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 1,
    question: `Which one of the following data protection techniques is reversible when conducted properly?`,
    choices: {
      A: `Tokenization`,
      B: `Masking`,
      C: `Hashing`,
      D: `Shredding`
    },
    correct: "A",
    explanation: `Tokenization techniques use a lookup table and are designed to be reversible. Masking and hashing techniques replace the data with values that can't be reversed back to the original data if performed properly. Shredding, when conducted properly, physically destroys data so that it may not be recovered.`
  },
  {
    id: 19,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 1,
    question: `Which one of the following statements is not true about compensating controls under PCI DSS?`,
    choices: {
      A: `Controls used to fulfill one PCI DSS requirement may be used to compensate for the absence of a control needed to meet another requirement.`,
      B: `Controls must meet the intent of the original requirement.`,
      C: `Controls must meet the rigor of the original requirement.`,
      D: `Compensating controls must provide a similar level of defense as the original requirement. Chapter 2 Cybersecurity Threat Landscape THE COMPTIA SECURITY+ EXAM OBJECTIVES COVERED IN THIS CHAPTER INCLUDE: Domain 2.0: Threats, Vulnerabilities, and Mitigations`
    },
    correct: "A",
    explanation: `PCI DSS compensating controls must be “above and beyond” other PCI DSS requirements. This specifically bans the use of a control used to meet one requirement as a compensating control for another requirement.`
  },
  {
    id: 20,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 2,
    question: `Which of the following measures is not commonly used to assess threat intelligence?`,
    choices: {
      A: `Timeliness`,
      B: `Detail`,
      C: `Accuracy`,
      D: `Relevance`
    },
    correct: "B",
    explanation: `Although higher levels of detail can be useful, they aren't a common measure used to assess threat intelligence. Instead, the timeliness, accuracy, and relevance of the information are considered critical to determining whether you should use the threat information.`
  },
  {
    id: 21,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 2,
    question: `Which one of the following motivations is most commonly attributed to hacktivists?`,
    choices: {
      A: `War`,
      B: `Financial gain`,
      C: `Political/philosophical beliefs`,
      D: `Ethical`
    },
    correct: "C",
    explanation: `Hacktivists are defined by the motivation behind their actions —advancing their political or philosophical beliefs. They engage in cyberattacks that they believe will advance their causes.`
  },
  {
    id: 22,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 2,
    question: `Kolin is a penetration tester who works for a cybersecurity company. His firm was hired to conduct a penetration test against a health-care system, and Kolin is working to gain access to the systems belonging to a hospital in that system. What term best describes Kolin's work?`,
    choices: {
      A: `Authorized attacker`,
      B: `Unauthorized attacker`,
      C: `Unknown attacker`,
      D: `Semi-authorized attacker`
    },
    correct: "A",
    explanation: `Attacks that are conducted as part of an authorized penetration test are white-hat hacking attacks, regardless of whether they are conducted by internal employees or an external firm. Kolin is, therefore, engaged in white-hat hacking. If he were acting on his own, without authorization, his status would depend on his intent. If he had malicious intent, his activity would be considered black-hat hacking. If he simply intended to report vulnerabilities to the hospital, his attack would be considered gray hat and he would likely be semi-authorized.`
  },
  {
    id: 23,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 2,
    question: `Which one of the following attackers is most likely to be associated with an APT?`,
    choices: {
      A: `Nation-state actor`,
      B: `Hacktivist`,
      C: `Unskilled`,
      D: `Insider`
    },
    correct: "A",
    explanation: `Advanced persistent threats (APTs) are most commonly associated with nation-state actors. It is unlikely that an APT group would leverage the unsophisticated services of an unskilled script kiddie type attacker. It is also unlikely that a hacktivist would have access to APT resources. Although APTs may take advantage of insider access, they are most commonly associated with nation-state actors.`
  },
  {
    id: 24,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 2,
    question: `Which organization did the U.S. government help create to share knowledge between organizations in specific verticals?`,
    choices: {
      A: `DHS`,
      B: `SANS`,
      C: `CERTS`,
      D: `ISACs`
    },
    correct: "D",
    explanation: `The U.S. government created the Information Sharing and Analysis Centers (ISACs). ISACs help infrastructure owners and operators share threat information, and provide tools and assistance to their members.`
  },
  {
    id: 25,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 2,
    question: `Which of the following threat actors typically has the greatest access to resources?`,
    choices: {
      A: `Nation-state actors`,
      B: `Organized crime`,
      C: `Hacktivists`,
      D: `Insider threats`
    },
    correct: "A",
    explanation: `Nation-state actors are government sponsored, and they typically have the greatest access to resources, including tools, money, and talent.`
  },
  {
    id: 26,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 2,
    question: `Which one of the following is the best example of a hacktivist group?`,
    choices: {
      A: `Chinese military`,
      B: `U.S. government`,
      C: `Russian mafia`,
      D: `Anonymous`
    },
    correct: "D",
    explanation: `The Chinese military and U.S. government are examples of nation-state actors and advanced persistent threats (APTs). The Russian mafia is an example of a criminal syndicate. Anonymous is the world's most prominent hacktivist group.`
  },
  {
    id: 27,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 2,
    question: `What type of assessment is particularly useful for identifying insider threats?`,
    choices: {
      A: `Behavioral`,
      B: `Instinctual`,
      C: `Habitual`,
      D: `IoCs`
    },
    correct: "A",
    explanation: `Behavioral assessments are very useful when you are attempting to identify insider threats. Since insider threats are often hard to distinguish from normal behavior, the context of the actions performed—such as after-hours logins, misuse of credentials, logins from abnormal locations, or abnormal patterns —and other behavioral indicators are often used.`
  },
  {
    id: 28,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 2,
    question: `Cindy is concerned that her organization may be targeted by a supply chain attack and is conducting a review of all of her vendor and supplier partners. Which one of the following organizations is least likely to be the conduit for a supply chain attack?`,
    choices: {
      A: `Hardware provider`,
      B: `Software provider`,
      C: `Managed service provider`,
      D: `Talent provider`
    },
    correct: "D",
    explanation: `Supply chain attacks are typically associated with vendors and suppliers that provide technology infrastructure or services that may be compromised. This would include hardware and software providers as well as managed service providers (MSPs). Talent providers, who help with staffing solutions, are generally not considered common avenues for supply chain attacks.`
  },
  {
    id: 29,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 2,
    question: `Greg believes that an attacker may have installed malicious firmware in a network device before it was provided to his organization by the supplier. What type of threat vector best describes this attack?`,
    choices: {
      A: `Supply chain`,
      B: `Removable media`,
      C: `Cloud`,
      D: `Direct access`
    },
    correct: "A",
    explanation: `Tampering with equipment before it reaches the intended user is an example of a supply chain threat. It is also possible to describe this attack as a direct access attack because it involved physical access to the device, but supply chain is a more relevant answer. You should be prepared to select the best possible choice from several possible correct answers when you take the exam. Security+ questions often use this type of misdirection.`
  },
  {
    id: 30,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 2,
    question: `Ken is conducting threat research on Transport Layer Security (TLS) and would like to consult the authoritative reference for the protocol's technical specification. What resource would best meet his needs?`,
    choices: {
      A: `Academic journal`,
      B: `Internet RFCs`,
      C: `Subject matter experts`,
      D: `Textbooks`
    },
    correct: "B",
    explanation: `All of these resources might contain information about the technical details of TLS, but Internet Request for Comments (RFC) documents are the definitive technical standards for Internet protocols. Consulting the RFCs would be Ken's best option.`
  },
  {
    id: 31,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 2,
    question: `Wendy is scanning cloud-based repositories for sensitive information. Which one of the following should concern her most, if discovered in a public repository?`,
    choices: {
      A: `Product manuals`,
      B: `Source code`,
      C: `API keys`,
      D: `Open source data`
    },
    correct: "C",
    explanation: `All of these items could be concerning, depending on the circumstances. However, API keys should never be found in public repositories because they may grant unauthorized individuals access to information and resources.`
  },
  {
    id: 32,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 2,
    question: `Which one of the following threat research tools is used to visually display information about the location of threat actors?`,
    choices: {
      A: `Threat map`,
      B: `Predictive analysis`,
      C: `Vulnerability feed`,
      D: `STIX`
    },
    correct: "A",
    explanation: `Threat maps are graphical tools that display information about the geographic locations of attackers and their targets. These tools are most often used as interesting marketing gimmicks, but they can also help identify possible threat sources.`
  },
  {
    id: 33,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 2,
    question: `Vince recently received the hash values of malicious software that several other firms in his industry found installed on their systems after a compromise. What term best describes this information?`,
    choices: {
      A: `Vulnerability feed`,
      B: `IoC`,
      C: `TTP`,
      D: `RFC`
    },
    correct: "B",
    explanation: `Specific details of attacks that may be used to identify compromises are known as indicators of compromise (IoCs). This data may also be described as an adversary tactics, techniques, and procedures (TTP), but the fact that it is a set of file signatures makes it more closely match the definition of an IoC.`
  },
  {
    id: 34,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 2,
    question: `Ursula recently discovered that a group of developers are sharing information over a messaging tool provided by a cloud vendor but not sanctioned by her organization. What term best describes this use of technology?`,
    choices: {
      A: `Shadow IT`,
      B: `System integration`,
      C: `Vendor management`,
      D: `Data exfiltration`
    },
    correct: "A",
    explanation: `The developers in question are using unapproved technology for business purposes. This is the classic definition of shadow IT. It is possible to describe this as data exfiltration, but there is no indication that the data security has been compromised, so shadow IT is a better description here. Remember, you will often be asked to choose the best answer from multiple correct answers on the exam.`
  },
  {
    id: 35,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 2,
    question: `Tom's organization recently learned that the vendor is discontinuing support for their customer relationship management (CRM) system. What should concern Tom the most from a security perspective?`,
    choices: {
      A: `Unavailability of future patches`,
      B: `Lack of technical support`,
      C: `Theft of customer information`,
      D: `Increased costs`
    },
    correct: "A",
    explanation: `Tom's greatest concern should be that running unsupported software exposes his organization to the risk of new, unpatchable vulnerabilities. It is certainly true that they will no longer receive technical support, but this is a less important issue from a security perspective. There is no indication in the scenario that discontinuing the product will result in the theft of customer information or increased costs.`
  },
  {
    id: 36,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 2,
    question: `Which one of the following information sources would not be considered an OSINT source?`,
    choices: {
      A: `DNS lookup`,
      B: `Search engine research`,
      C: `Port scans`,
      D: `WHOIS queries`
    },
    correct: "C",
    explanation: `Port scans are an active reconnaissance technique that probe target systems and would not be considered open source intelligence (OSINT). Search engine research, DNS lookups, and WHOIS queries are all open source resources. 19. A, C. As a government contractor, Snowden had authorized access to classified information and exploited this access to make an unauthorized disclosure of that information. This clearly makes him fit into the category of an insider. He did so with political motivations, making him fit the category of hacktivist as well.`
  },
  {
    id: 37,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 2,
    question: `Renee is a cybersecurity hobbyist. She receives an email about a new web-based grading system being used by her son's school and she visits the site. She notices that the URL for the site looks like this: www.myschool.edu/grades.php&studentID=1023425 She realizes that 1023425 is her son's student ID number and she then attempts to access the following similar URLs: www.myschool.edu/grades.php&studentID=1023423 www.myschool.edu/grades.php&studentID=1023424 www.myschool.edu/grades.php&studentID=1023426 www.myschool.edu/grades.php&studentID=1023427 When she does so, she accesses the records of other students. She closes the records and immediately informs the school principal of the vulnerability. What term best describes Renee's work?`,
    choices: {
      A: `Authorized hacking`,
      B: `Unknown hacking`,
      C: `Semi-authorized hacking`,
      D: `Unauthorized hacking Chapter 3 Malicious Code THE COMPTIA SECURITY+ EXAM OBJECTIVES COVERED IN THIS CHAPTER INCLUDE: Domain 2.0: Threats, Vulnerabilities, and Mitigations`
    },
    correct: "C",
    explanation: `Renee was not authorized to perform this security testing, so her work does not fit into the category of white-hat hacking, or authorized hacking. However, she also does not have malicious intent, so her work cannot be categorized as an unauthorized, or black-hat attack. Instead, it fits somewhere in between the two extremes and would best be described as semi-authorized, or gray-hat hacking.`
  },
  {
    id: 38,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 3,
    question: `Ryan wants to prevent logic bombs created by insider threats from impacting his organization. What technique will most effectively limit the likelihood of logic bombs being put in place?`,
    choices: {
      A: `Deploying antivirus software`,
      B: `Using a code review process`,
      C: `Deploying endpoint detection and response (EDR) software`,
      D: `Disabling autorun for USB drives`
    },
    correct: "B",
    explanation: `Logic bombs are embedded in code, so Ryan's organization would get the most benefit from a code review process for any code that goes into production. Antivirus and EDR are unlikely to detect logic bombs created by staff in Ryan's organization.`
  },
  {
    id: 39,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 3,
    question: `Yasmine believes that her organization may be dealing with an advanced rootkit and wants to write IoC definitions for it. Which of the following is not likely to be a useful IoC for a rootkit?`,
    choices: {
      A: `File hashes`,
      B: `Command and control domains`,
      C: `Pop-ups demanding a ransom`,
      D: `Behavior-based identifiers`
    },
    correct: "C",
    explanation: `Rootkits are intended to be stealthy, and a pop-up demanding ransom works against that purpose. File hashes, command and control details, and behavior-based identifiers are all useful IoCs likely to be relevant to a rootkit.`
  },
  {
    id: 40,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 3,
    question: `Nathan works at a school and notices that one of his staff appears to have logged in and changed grades for a single student to higher grades, even in classes that staff member is not responsible for. When asked, the staff member says that they did not perform the action. Which of the following is the most likely way that a student could have gotten access to the staff member's password?`,
    choices: {
      A: `A keylogger`,
      B: `A rootkit`,
      C: `Spyware`,
      D: `A logic bomb`
    },
    correct: "A",
    explanation: `Nathan should check the staff member's computer for a keylogger, which would have captured their username and password. A student could have then used the staff member's credentials to make the changes described. A rootkit would be used to retain access, spyware gathers a variety of data but is not specifically aimed at capturing keystrokes like this, and logic bombs have specific events or triggers that cause them to take action.`
  },
  {
    id: 41,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 3,
    question: `Mike discovers that attackers have left software that allows them to have remote access to systems on a computer in his company's network. How should he describe or classify this malware?`,
    choices: {
      A: `A worm`,
      B: `Crypto malware`,
      C: `A trojan`,
      D: `A backdoor`
    },
    correct: "D",
    explanation: `Remote access to a system is typically provided by a backdoor. Backdoors may also appear in firmware or even in hardware. None of the other items listed provide remote access by default, although they may have a backdoor as part of a more capable malware package.`
  },
  {
    id: 42,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 3,
    question: `What is the primary impact of bloatware?`,
    choices: {
      A: `Consuming resources`,
      B: `Logging keystrokes`,
      C: `Providing information about users and devices to third parties`,
      D: `Allowing unauthorized remote access`
    },
    correct: "A",
    explanation: `Bloatware is typically not a significant security threat, but it consumes resources like disk space, CPU, and memory. Unfortunately, some bloatware can be vulnerable and may not get regularly patched, meaning it's both useless and a potential risk!`
  },
  {
    id: 43,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 3,
    question: `What type of malware is used to gather information about a user's browsing habits and system?`,
    choices: {
      A: `A Trojan`,
      B: `Bloatware`,
      C: `Spyware`,
      D: `A rootkit`
    },
    correct: "C",
    explanation: `Spyware is specifically designed to gather information about users and systems and to send that data back to a central collector. Trojans pretend to be useful software and include malicious components, bloatware is preinstalled software that isn't needed, and rootkits are used to conceal malicious software and retain a foothold on compromised systems.`
  },
  {
    id: 44,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 3,
    question: `Matt uploads a malware sample to a third-party malware scanning site that uses multiple antimalware and antivirus engines to scan the sample. He receives multiple different answers for what the malware package is. What has occurred?`,
    choices: {
      A: `The package contains more than one piece of malware.`,
      B: `The service is misconfigured.`,
      C: `The malware is polymorphic and changed while being tested.`,
      D: `Different vendors use different names for malware packages.`
    },
    correct: "D",
    explanation: `One of the challenges security practitioners can face when attempting to identify malware is that different antivirus and antimalware vendors will name malware packages and families differently. This means that Matt may need to look at different names to figure out what he is dealing with.`
  },
  {
    id: 45,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 3,
    question: `Nancy is concerned that there is a software keylogger on the system she's investigating. What best describes data that may have been stolen?`,
    choices: {
      A: `All files on the system`,
      B: `All keyboard input`,
      C: `All files the user accessed while the keylogger was active`,
      D: `Keyboard and other input from the user`
    },
    correct: "D",
    explanation: `While keyloggers often focus on keyboard input, other types of input may also be captured, meaning Nancy should worry about any user input that occurred while the keylogger was installed. Keyloggers typically do not target files on systems, although if Nancy finds a keylogger, she may want to check for other malware packages with additional capabilities.`
  },
  {
    id: 46,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 3,
    question: `A system in Elaine's company has suddenly displayed a message demanding payment in Bitcoin and claiming that the data from the system has been encrypted. What type of malware has Elaine likely encountered?`,
    choices: {
      A: `Worms`,
      B: `A virus`,
      C: `Ransomware`,
      D: `Rootkit`
    },
    correct: "C",
    explanation: `Ransomware demands payment to be made while typically using encryption to make data inaccessible. Worms, viruses, and rootkits are not defined by behavior like this.`
  },
  {
    id: 47,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 3,
    question: `Rick believes that a system he is responsible for has been compromised with malware that uses a rootkit to obtain and retain access to the system. When he runs an antimalware tool's scanner, the system doesn't show any malware. If he has other data that indicates the system is infected, what should his next step be if he wants to determine what malware may be on the system?`,
    choices: {
      A: `Rerun the antimalware scan.`,
      B: `Mount the drive on another system and scan it that way.`,
      C: `Disable the systems antivirus because it may be causing a false negative.`,
      D: `The system is not infected and he should move on.`
    },
    correct: "B",
    explanation: `Rootkits are designed to hide from antimalware scanners and can often defeat locally run scans. Mounting the drive in another system in read-only mode or booting from a USB drive and scanning using a trusted, known good operating system can be an effective way to determine what malware is on a potentially infected system.`
  },
  {
    id: 48,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 3,
    question: `A recently terminated developer from Jaya's organization has contacted the organization claiming that they left code in an application that they wrote that will delete files and bring the application down if they are not employed by the company. What type of malware is this?`,
    choices: {
      A: `Ransomware`,
      B: `Extortionware`,
      C: `A logic bomb`,
      D: `A Trojan`
    },
    correct: "C",
    explanation: `Jaya's former employee is describing a logic bomb, malicious code that will cause harm when a trigger or specific action occurs. In this case, the former employee is claiming that the trigger is them not being employed at the company. Jaya will need to assess all of the code that the employee wrote to determine if a logic bomb exists. Ransomware is a type of malicious software that typically uses encryption to extort a ransom. Extortionware is not a commonly used term. Trojans appear to be useful or desirable software but contain malicious code.`
  },
  {
    id: 49,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 3,
    question: `Selah wants to ensure that malware is completely removed from a system. What should she do to ensure this?`,
    choices: {
      A: `Run multiple antimalware tools and use them to remove all detections.`,
      B: `Wipe the drive and reinstall from known good media.`,
      C: `Use the delete setting in her antimalware software rather than the quarantine setting.`,
      D: `There is no way to ensure the system is safe and it should be destroyed.`
    },
    correct: "B",
    explanation: `In most malware infection scenarios, wiping the drive and reinstalling from known good media is the best option available. If the malware has tools that can infect the system BIOS/UEFI, even this may not be sufficient, but BIOS/UEFI resident malware is relatively uncommon. Multiple antivirus and antimalware tools, even if they are set to delete malware, may still fail against unknown or advanced malware packages. Destroying systems is uncommon, expensive, and unlikely to be acceptable to most organizations as a means of dealing with a malware infection.`
  },
  {
    id: 50,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 3,
    question: `What is the key difference between a worm and a virus?`,
    choices: {
      A: `What operating system they run on`,
      B: `How they spread`,
      C: `What their potential impact is`,
      D: `The number of infections`
    },
    correct: "B",
    explanation: `The key difference between worms and viruses is how they spread. Worms spread themselves, whereas viruses rely on human interaction.`
  },
  {
    id: 51,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 3,
    question: `Ben wants to analyze Python code that he believes may be malicious code written by an employee of his organization. What can he do to determine if the code is malicious?`,
    choices: {
      A: `Run a decompiler against it to allow him to read the code`,
      B: `Open the file using a text editor to review the code`,
      C: `Test the code using an antivirus tool`,
      D: `Submit the Python code to a malware testing website`
    },
    correct: "B",
    explanation: `Python is an interpreted rather than a compiled language, so Ben doesn't need to use a decompiler. Instead, his best bet is to open the file and review the code to see what it does. Since it was written by an employee, it is unlikely that it will match an existing known malicious package, which means antivirus and antimalware tools and sites will be useless.`
  },
  {
    id: 52,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 3,
    question: `Which of the following defenses is most likely to prevent Trojan installation?`,
    choices: {
      A: `Installing patches for known vulnerabilities`,
      B: `Preventing downloads from application stores`,
      C: `Preventing the use of USB drives`,
      D: `Disabling autorun from USB drives`
    },
    correct: "B",
    explanation: `Trojans are often found in application stores where they appear to be innocuous but desirable applications or are listed in confusingly similar ways to legitimate applications. Many organizations choose to lock down the ability to acquire applications from app stores to prevent this type of issue. Since Trojans do not self-spread and rely on user action, patching typically won't prevent them. While users may try to transfer files via USB, this isn't the most common means for modern Trojans to spread.`
  },
  {
    id: 53,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 3,
    question: `Jason's security team reports that a recent WordPress vulnerability seems to have been exploited by malware and that their organization's entire WordPress service cluster has been infected. What type of malware is most likely involved if a vulnerability in the software was exploited over the network?`,
    choices: {
      A: `A logic bomb`,
      B: `A Trojan`,
      C: `A worm`,
      D: `A rootkit`
    },
    correct: "C",
    explanation: `Worms often spread via networks, taking advantage of vulnerabilities to install themselves on targeted systems and then to propagate further. Trojans require human interaction to install software that appears desirable. Logic bombs are embedded in code and perform actions when triggers like a date or event occur. Rootkits are used to hide malware and to conceal attacker's actions.`
  },
  {
    id: 54,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 3,
    question: `Hui's organization recently purchased new Windows computers from an office supply store. The systems have a number of unwanted programs on them that load at startup that were installed by the manufacturer. What type of software is this?`,
    choices: {
      A: `Viruses`,
      B: `Trojans`,
      C: `Spyware`,
      D: `Bloatware`
    },
    correct: "D",
    explanation: `Unwanted, typically preinstalled programs are known as bloatware. They take up space and resources without providing value, and many organizations either uninstall them or install clean operating system images to avoid them. There is no indication of malicious activity in the question, so these are most likely not viruses, Trojans, or spyware.`
  },
  {
    id: 55,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 3,
    question: `What type of malware connects to a command and control system, allowing attackers to manage, control, and update it remotely?`,
    choices: {
      A: `A bot`,
      B: `A drone`,
      C: `A vampire`,
      D: `A worm`
    },
    correct: "A",
    explanation: `Bots connect to command and control (C&C) systems, allowing them to be updated, controlled, and managed remotely. Worms spread via vulnerabilities, and drones and vampires aren't common terms for malware.`
  },
  {
    id: 56,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 3,
    question: `Randy believes that a system that he is responsible for was infected after a user picked up a USB drive and plugged it in. The user claims that they only opened one file on the drive to see who might own it. What type of malware is most likely involved?`,
    choices: {
      A: `A virus`,
      B: `A worm`,
      C: `A trojan`,
      D: `A spyware tool Chapter 4 Social Engineering and Password Attacks THE COMPTIA SECURITY+ EXAM OBJECTIVES COVERED IN THIS CHAPTER INCLUDE: Domain 2.0: Threats, Vulnerabilities, and Mitigations`
    },
    correct: "A",
    explanation: `Randy knows that viruses spread through user interaction with files on thumb drives. A worm would spread itself, a Trojan would look like a useful or desirable file, and there is no indication of spyware in the question.`
  },
  {
    id: 57,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 4,
    question: `Joseph receives an email notifying him that he needs to change his password due to a recent account issue. He notices that the email links him to a website using the domain amaz0n.com. What type of attack should he describe this as?`,
    choices: {
      A: `Typosquatting`,
      B: `Phishing`,
      C: `Smishing`,
      D: `A watering hole attack`
    },
    correct: "B",
    explanation: `This email is an attempt to get account information and is a phishing email. Joseph did not enter the URL himself, which is the behavior that a typosquatter relies on. A smishing attack relies on SMS, and a watering hole attack uses a frequently visited website.`
  },
  {
    id: 58,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 4,
    question: `When you combine phishing with voicemail, it is known as:`,
    choices: {
      A: `Whaling`,
      B: `Spoofing`,
      C: `Spooning`,
      D: `Vishing`
    },
    correct: "D",
    explanation: `Vishing is a form of phishing done via voice phones call or voicemail. Whaling focuses on targeting important targets for phishing attacks, whereas spoofing is a general term that means faking things. Spooning is not a technical term used for security practices.`
  },
  {
    id: 59,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 4,
    question: `While reviewing her logs, Michele notices that a remote system has attempted to log into her server via SSH using the username admin and a variety of passwords like “password” and “ninja.” What type of attack has Michele noticed?`,
    choices: {
      A: `A brute-force attack`,
      B: `Shoulder surfing`,
      C: `An on-path attack`,
      D: `Pretexting`
    },
    correct: "A",
    explanation: `Michele has discovered a brute-force attack, which relies on trying a large number of passwords, often combined with a list of usernames to try. Shoulder surfing attacks involve an attacker watching as a user enters information like a password or credit card data. On-path attacks intercept data sent via a network, and pretexting is a social engineering attack that relies on a believable reason for attackers to need a victim to take action.`
  },
  {
    id: 60,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 4,
    question: `Joanna wants to detect password spraying attacks. What type of rule should she deploy through her security systems?`,
    choices: {
      A: `Match attempts to log into many systems with the same username and password.`,
      B: `Match multiple attempts to log into the same user account using different passwords.`,
      C: `Match repeated use of the same password during failed login attempts for multiple usernames.`,
      D: `Match all attempts to use passwords with slight changes for the same account.`
    },
    correct: "C",
    explanation: `Password spraying involves the use of the same password to attempt to log into multiple accounts. Joanna should search for uses of the same password for different accounts.`
  },
  {
    id: 61,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 4,
    question: `One of the staff at Susan's organization has reported that a critical vendor has contacted them about an unpaid invoice. After Susan investigates, she discovers that the invoice was sent from an email account that was not typically a contact and that the invoice requested payment to a PayPal account. What type of social engineering attack has Susan most likely discovered?`,
    choices: {
      A: `Smishing`,
      B: `Business email compromise`,
      C: `Disinformation`,
      D: `Typosquatting`
    },
    correct: "B",
    explanation: `Susan has most likely discovered a business email compromise and should reach out to the impacted organization to inform them of the potentially compromised account. Smishing would occur via SMS, there is nothing in the question to indicate a disinformation campaign was part of this, and there is no URL mentioned and thus typosquatting can be dismissed as well.`
  },
  {
    id: 62,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 4,
    question: `Selah infects the ads on a website that users from her target company frequently visit with malware as part of her penetration test. What technique has she used?`,
    choices: {
      A: `A watering hole attack`,
      B: `Vishing`,
      C: `Whaling`,
      D: `Typosquatting`
    },
    correct: "A",
    explanation: `Watering hole attacks rely on compromising or infecting a website that targeted users frequently visit, much like animals will visit a common watering hole. Vishing is phishing via voice, whaling is a targeted phishing attack against senior or important staff, and typosquatting registers similar URLs that are likely to be inadvertently entered in order to harvest clicks or conduct malicious activity.`
  },
  {
    id: 63,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 4,
    question: `Ben wants to determine if brute-force password attacks are being used against his company. What log information is least likely to be useful when working to detect brute-force attacks?`,
    choices: {
      A: `Source IP address or hostname`,
      B: `Failed login logs`,
      C: `The password that was used for each attempt`,
      D: `The geographic location of system being logged into`
    },
    correct: "D",
    explanation: `The source IP or hostname; the failed login logs with time, date, username, and other information; and the password that was used for each failed attempt would be useful for watching for brute-force attempts. Knowing where the system being logged into is located isn't useful when tracking brute-force attempts. Logging failed passwords can be problematic as it can reveal actual passwords by allowing log reviewers to see failures driven by typos, so Ben may want to avoid that sort of log even though it can be useful!`
  },
  {
    id: 64,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 4,
    question: `Melissa receives a call and the caller informs her a senior manager in her organization needs her to buy gift cards for an event that starts in an hour. The caller says that the senior leader forgot to get the cards, and that the event is critical to her organization. Melissa buys the cards and sends them to the Gmail address the caller says that the senior leader needs them sent to. What type of attack has Melissa fallen for?`,
    choices: {
      A: `Phishing`,
      B: `Pretexting`,
      C: `Business email compromise`,
      D: `Carding`
    },
    correct: "B",
    explanation: `The caller is using pretexting, providing Melissa with a story that relies on urgency and perceived authority to get her to take actions she might normally question. This social engineering attack is not a phishing attack aimed at gathering information or credentials, it does not involve business email accounts being compromised, and carding is not a topic covered in the Security+ exam outline.`
  },
  {
    id: 65,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 4,
    question: `Alaina wants to determine if a password spraying attack was used against her organization. Which of the following indicators would be most useful as part of her investigation?`,
    choices: {
      A: `The time the login attempts happened`,
      B: `The passwords used for failed attempts`,
      C: `The source IP address of the attempts`,
      D: `The number of failed attempts for each user`
    },
    correct: "B",
    explanation: `Password spraying attempts try to use a single common password for many user accounts. Determining if a single password is being used over and over can help catch basic password spraying attempts. The time, source IP, or number of failed attempts do not indicate password spraying.`
  },
  {
    id: 66,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 4,
    question: `Which of the following human vectors is primarily associated with nation-state actors?`,
    choices: {
      A: `Misinformation campaigns`,
      B: `Watering hole attacks`,
      C: `Business email compromise`,
      D: `Password spraying`
    },
    correct: "A",
    explanation: `Misinformation and disinformation campaigns are primarily associated with nation-state actors, but are increasingly used by other organizations and even individuals as well. Watering hole attacks, business email compromise, and password spraying are broadly used attacks.`
  },
  {
    id: 67,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 4,
    question: `Nicole accidentally types www.smazon.com into her browser and discovers that she is directed to a different site loaded with ads and pop-ups. Which of the following is the most accurate description of the attack she has experienced?`,
    choices: {
      A: `DNS hijacking`,
      B: `Pharming`,
      C: `Typosquatting`,
      D: `Hosts file compromise`
    },
    correct: "C",
    explanation: `Typosquatting uses misspellings and common typos of websites to redirect traffic for profit or malicious reasons. Fortunately in reality, if you visit smazon.com, you'll be redirected to the actual amazon.com website, as Amazon knows about and works to prevent this type of issue. DNS hijacking and hosts file modifications both attempt to redirect traffic to actual URLs or hostnames to different destinations, and pharming does redirect legitimate traffic to fake sites, but typosquatting is the more specific answer.`
  },
  {
    id: 68,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 4,
    question: `Devon is a penetration tester and sets up malicious tools on his target organization's primary internal website. What type of attack is he conducting?`,
    choices: {
      A: `A misinformation campaign`,
      B: `A watering hole attack`,
      C: `A typosquatting attack`,
      D: `A disinformation campaign`
    },
    correct: "B",
    explanation: `Devon is conducting a watering hole attack that leverages a frequently visited site to deploy malware. There is no description of misinformation or disinformation in the question, and there is not a typo described that would lead to a typosquatting attack being successful.`
  },
  {
    id: 69,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 4,
    question: `Phishing emails sent pretending to be from a company that recipients are familiar with and likely to respond to is what type of attack?`,
    choices: {
      A: `Phishing`,
      B: `Pharming`,
      C: `Brand impersonation`,
      D: `Pretexting`
    },
    correct: "C",
    explanation: `Brand impersonation attacks are designed to appear to be from a company that recipients are likely to be familiar with, and thus are more likely to elicit a response. While these are a type of phishing, the more specific answer of brand impersonation is the best answer. Pretexting is a social engineering concept that provides a reason for the request. Pharming attacks redirect traffic intended to be sent to a legitimate site to a fake website typically designed to simulate the real one.`
  },
  {
    id: 70,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 4,
    question: `When a caller was recently directed to Amanda, who is a junior IT employee at her company, the caller informed her that they were the head of IT for her organization and that she needed to immediately disable the organization's firewall. After Amanda made the change, she discovered that the caller was not the head of IT, and that they were actually a penetration tester hired by her company. What social engineering attack best describes this?`,
    choices: {
      A: `Smishing`,
      B: `Pretexting`,
      C: `Impersonation`,
      D: `Vishing`
    },
    correct: "C",
    explanation: `This is an example of an impersonation attack. The pentester impersonated the head of IT in order to achieve their goals. The good news is that it was a penetration tester! Smishing is phishing via SMS, vishing is phishing via voice or voicemail, and pretexting provides a reason that the target should perform an action. Here the attack relied on the authority that Amanda believed the caller had.`
  },
  {
    id: 71,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 4,
    question: `Fred is concerned about text message–based attacks. Which of the following attacks relies on text messages as its primary focus?`,
    choices: {
      A: `Impersonation`,
      B: `Watering hole attacks`,
      C: `Smishing`,
      D: `Business email compromise`
    },
    correct: "C",
    explanation: `Smishing attacks are SMS-based. Impersonation attacks could use texts but don't specifically rely on them. Watering hole attacks use frequently visited websites, whereas business email compromise attacks focus on gaining access to business email accounts to use in follow-up attacks.`
  },
  {
    id: 72,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 4,
    question: `Sharif notices that his authentication logs have many different usernames showing failed logins with the same password. What type of attack has he discovered?`,
    choices: {
      A: `Credential harvesting`,
      B: `Impersonation`,
      C: `BEC`,
      D: `Spraying`
    },
    correct: "D",
    explanation: `Sharif has discovered a spraying attack that uses the same password—often a default or common password—with many usernames. Credential harvesting is the process of gathering credentials like usernames and passwords. Impersonation is a social engineering technique used when an attacker pretends to be someone else. BEC, or business email compromise, involves attackers posing as a trusted individual and asking for actions to be performed.`
  },
  {
    id: 73,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 4,
    question: `Naomi receives a report of smishing. What type of attack should she be looking for?`,
    choices: {
      A: `Compressed files in phishing`,
      B: `Text message–based phishing`,
      C: `Voicemail-based phishing`,
      D: `Server-based phishing`
    },
    correct: "B",
    explanation: `Smishing is a type of phishing that occurs via text (SMS) message.`
  },
  {
    id: 74,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 4,
    question: `Jack's organization wants to prevent typosquatting. What option should he select to address this issue?`,
    choices: {
      A: `Copyright the domain name`,
      B: `Purchase the most common typos for his organization's domain`,
      C: `Trademark the domain name`,
      D: `Disable typo resolution for the domain`
    },
    correct: "B",
    explanation: `While it's nearly impossible to prevent typosquatting, purchasing and registering the most common typos (typodomains) related to your organization's domain and redirecting them to your real domain is the most effective option available. Copyrighting or trademarking the domain name does not prevent typosquatting, and typo resolution is not a feature or capability that is available.`
  },
  {
    id: 75,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 4,
    question: `Gwyne's company has been contacted by customers asking about a new social media account operating under the company's brand. The social media account is advertising cryptocurrency, which Gwyne's organization does not sell or work with. What type of attack best describes what Gwyne's organization has encountered?`,
    choices: {
      A: `Impersonation`,
      B: `Brand impersonation`,
      C: `Mis-branding`,
      D: `Crypto-phishing`
    },
    correct: "B",
    explanation: `Using an organization's brand in this way is an example of brand impersonation. While this is also an impersonation attack, the more specific description is the best answer here. Misbranding and crypto-phishing were both made up for this question and aren't commonly used terms.`
  },
  {
    id: 76,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 4,
    question: `Nation-state-driven social media campaigns about the trustworthiness of the U.S. election in 2016 are an example of what type of social engineering?`,
    choices: {
      A: `Smishing`,
      B: `Pretexting`,
      C: `Disinformation`,
      D: `Spraying Chapter 5 Security Assessment and Testing THE COMPTIA SECURITY+ EXAM OBJECTIVES COVERED IN THIS CHAPTER INCLUDE: Domain 4.0: Security Operations`
    },
    correct: "C",
    explanation: `Disinformation campaigns are used to shift public opinion or to accomplish other goals. They are not limited to nation-state actors but are an increasingly heavily used social engineering tactic at a broad scale. Smishing relies on SMS messages, pretexting involves using a reason that creates urgency or importance in a request from a social engineer, and spraying is a type of password brute forcing.`
  },
  {
    id: 77,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 5,
    question: `Which one of the following security assessment techniques assumes that an organization has already been compromised and searches for evidence of that compromise?`,
    choices: {
      A: `Vulnerability scanning`,
      B: `Penetration testing`,
      C: `Threat hunting`,
      D: `War driving`
    },
    correct: "C",
    explanation: `Threat hunting is an assessment technique that makes an assumption of compromise and then searches the organization for indicators of compromise that confirm the assumption. Vulnerability scanning, penetration testing, and war driving are all assessment techniques that probe for vulnerabilities but do not assume that a compromise has already taken place.`
  },
  {
    id: 78,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 5,
    question: `Renee is configuring her vulnerability management solution to perform credentialed scans of servers on her network. What type of account should she provide to the scanner?`,
    choices: {
      A: `Domain administrator`,
      B: `Local administrator`,
      C: `Root`,
      D: `Read-only`
    },
    correct: "D",
    explanation: `Credentialed scans only require read-only access to target servers. Renee should follow the principle of least privilege and limit the access available to the scanner.`
  },
  {
    id: 79,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 5,
    question: `Ryan is planning to conduct a vulnerability scan of a businesscritical system using dangerous plug-ins. What would be the best approach for the initial scan?`,
    choices: {
      A: `Run the scan against production systems to achieve the most realistic results possible.`,
      B: `Run the scan during business hours.`,
      C: `Run the scan in a test environment.`,
      D: `Do not run the scan to avoid disrupting the business.`
    },
    correct: "C",
    explanation: `Ryan should first run his scan against a test environment to identify likely vulnerabilities and assess whether the scan itself might disrupt business activities.`
  },
  {
    id: 80,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 5,
    question: `Which one of the following values for the CVSS attack complexity metric would indicate that the specified attack is simplest to exploit?`,
    choices: {
      A: `High`,
      B: `Medium`,
      C: `Low`,
      D: `Severe`
    },
    correct: "C",
    explanation: `An attack complexity of “low” indicates that exploiting the vulnerability does not require any specialized conditions.`
  },
  {
    id: 81,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 5,
    question: `Which risk category would this vulnerability fall into?`,
    choices: {
      A: `Low`,
      B: `Medium`,
      C: `High`,
      D: `Critical`
    },
    correct: "A",
    explanation: `A false positive error occurs when the vulnerability scanner reports a vulnerability that does not actually exist.`
  },
  {
    id: 82,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 5,
    question: `Brian ran a penetration test against a school's grading system and discovered a flaw that would allow students to alter their grades by exploiting a SQL injection vulnerability. What type of control should he recommend to the school's cybersecurity team to prevent students from engaging in this type of activity?`,
    choices: {
      A: `Confidentiality`,
      B: `Integrity`,
      C: `Alteration`,
      D: `Availability`
    },
    correct: "B",
    explanation: `By allowing students to change their own grades, this vulnerability provides a pathway to unauthorized alteration of information. Brian should recommend that the school deploy integrity controls that prevent unauthorized modifications.`
  },
  {
    id: 83,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 5,
    question: `Which one of the following security assessment tools is least likely to be used during the reconnaissance phase of a penetration test?`,
    choices: {
      A: `Nmap`,
      B: `Nessus`,
      C: `Metasploit`,
      D: `Nslookup`
    },
    correct: "C",
    explanation: `Nmap is a port scanning tool used to enumerate open network ports on a system. Nessus is a vulnerability scanner designed to detect security issues on a system. Nslookup is a DNS information gathering utility. All three of these tools may be used to gather information and detect vulnerabilities. Metasploit is an exploitation framework used to execute and attack and would be better suited for the Attacking and Exploiting phase of a penetration test.`
  },
  {
    id: 84,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 5,
    question: `During a vulnerability scan, Brian discovered that a system on his network contained this vulnerability: What security control, if deployed, would likely have addressed this issue?`,
    choices: {
      A: `Patch management`,
      B: `File integrity monitoring`,
      C: `Intrusion detection`,
      D: `Threat hunting`
    },
    correct: "A",
    explanation: `This vulnerability is corrected by a patch that was released by Microsoft in 2017. A strong patch management program would have identified and remediated the missing patch.`
  },
  {
    id: 85,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 5,
    question: `Which one of the following tools is most likely to detect an XSS vulnerability?`,
    choices: {
      A: `Static application test`,
      B: `Web application vulnerability scanner`,
      C: `Intrusion detection system`,
      D: `Network vulnerability scanner`
    },
    correct: "B",
    explanation: `Intrusion detection systems do not detect vulnerabilities; they detect attacks. The remaining three tools could all possibly discover a cross-site scripting (XSS) vulnerability, but a web application vulnerability scanner is the most likely to detect it because it is specifically designed to test web applications.`
  },
  {
    id: 86,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 5,
    question: `During a penetration test, Patrick deploys a toolkit on a compromised system and uses it to gain access to other systems on the same network. What term best describes this activity?`,
    choices: {
      A: `Lateral movement`,
      B: `Privilege escalation`,
      C: `Footprinting`,
      D: `OSINT`
    },
    correct: "A",
    explanation: `Moving from one compromised system to other systems on the same network is known as lateral movement. Privilege escalation attacks increase the level of access that an attacker has to an already compromised system. Footprinting and OSINT are reconnaissance techniques.`
  },
  {
    id: 87,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 5,
    question: `Zian is a cybersecurity leader who is coordinating the activities of a security audit. The audit is being done to validate the organization's financial statements to investors and involves a review of cybersecurity controls. What term best describes this audit?`,
    choices: {
      A: `External audit`,
      B: `Penetration test`,
      C: `Internal audit`,
      D: `Informal audit`
    },
    correct: "A",
    explanation: `Audits performed to validate an organization's financial statements are very formal audits that are performed by independent third-party auditors. This makes them external audits. Internal audits may be more or less formal than external audits but they are generally done only to provide assurance to internal parties and not to investors. Penetration tests may be done as part of an audit but they are not audits themselves.`
  },
  {
    id: 88,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 5,
    question: `Which one of the following assessment techniques is designed to solicit participation from external security experts and reward them for discovering vulnerabilities?`,
    choices: {
      A: `Threat hunting`,
      B: `Penetration testing`,
      C: `Bug bounty`,
      D: `Vulnerability scanning`
    },
    correct: "C",
    explanation: `Bug bounty programs are designed to allow external security experts to test systems and uncover previously unknown vulnerabilities. Bug bounty programs offer successful testers financial rewards to incentivize their participation.`
  },
  {
    id: 89,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 5,
    question: `Kyle is conducting a penetration test. After gaining access to an organization's database server, he installs a backdoor on the server to grant himself access in the future. What term best describes this action?`,
    choices: {
      A: `Privilege escalation`,
      B: `Lateral movement`,
      C: `Maneuver`,
      D: `Persistence`
    },
    correct: "D",
    explanation: `Backdoors are a persistence tool, designed to make sure that the attacker's access persists after the original vulnerability is remediated. Kyle can use this backdoor to gain access to the system in the future, even if the original exploit that he used to gain access is no longer effective.`
  },
  {
    id: 90,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 5,
    question: `Which one of the following techniques would be considered passive reconnaissance?`,
    choices: {
      A: `Port scans`,
      B: `Vulnerability scans`,
      C: `WHOIS lookups`,
      D: `Footprinting`
    },
    correct: "C",
    explanation: `WHOIS lookups use external registries and are an example of open source intelligence (OSINT), which is a passive reconnaissance technique. Port scans, vulnerability scans, and footprinting all require active engagement with the target and are, therefore, active reconnaissance.`
  },
  {
    id: 91,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 5,
    question: `Which element of the SCAP framework can be used to consistently describe vulnerabilities?`,
    choices: {
      A: `CPE`,
      B: `CVE`,
      C: `CVSS`,
      D: `CCE`
    },
    correct: "B",
    explanation: `Common Vulnerabilities and Exposures (CVE) provides a standard nomenclature for describing security-related software flaws. Common Platform Enumeration (CPE) provides a standard nomenclature for describing product names and versions. The Common Vulnerability Scoring System (CVSS) provides a standardized approach for measuring and describing the severity of security-related software flaws. Common Configuration Enumeration (CCE) provides a standard nomenclature for discussing system configuration issues.`
  },
  {
    id: 92,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 5,
    question: `Bruce is conducting a penetration test for a client. The client provided him with full details of their systems in advance. What type of test is Bruce conducting?`,
    choices: {
      A: `Partially known environment test`,
      B: `Detailed environment test`,
      C: `Known environment test`,
      D: `Unknown environment test`
    },
    correct: "C",
    explanation: `Known environment tests are performed with full knowledge of the underlying technology, configurations, and settings that make up the target. Unknown environment tests are intended to replicate what an attacker would encounter. Testers are not provided with access to or information about an environment, and instead, they must gather information, discover vulnerabilities, and make their way through an infrastructure or systems like an attacker would. Partially known environment tests are a blend of unknown environment and known environment testing. Detailed environment tests are not a type of penetration test.`
  },
  {
    id: 93,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 5,
    question: `Lila is working on a penetration testing team and she is unsure whether she is allowed to conduct social engineering as part of the test. What document should she consult to find this information?`,
    choices: {
      A: `Contract`,
      B: `Statement of work`,
      C: `Rules of engagement`,
      D: `Lessons learned report`
    },
    correct: "C",
    explanation: `The rules of engagement provide technical details on the parameters of the test. This level of detail would not normally be found in a contract or statement of work (SOW). The lessons learned report is not produced until after the test.`
  },
  {
    id: 94,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 5,
    question: `Grace would like to determine the operating system running on a system that she is targeting in a penetration test. Which one of the following techniques will most directly provide her with this information?`,
    choices: {
      A: `Port scanning`,
      B: `Footprinting`,
      C: `Vulnerability scanning`,
      D: `Packet capture`
    },
    correct: "B",
    explanation: `All of these techniques might provide Grace with information about the operating system running on a device. However, footprinting is a technique specifically designed to elicit this information.`
  },
  {
    id: 95,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 5,
    question: `Which one of the CVSS metrics would contain information about the type of account access that an attacker must have to execute an attack?`,
    choices: {
      A: `AV`,
      B: `C`,
      C: `PR`,
      D: `AC`
    },
    correct: "C",
    explanation: `The privileges required (PR) metric indicates the type of system access that an attacker must have to execute the attack. AV=Attack Vector, AC=Attack Complexity, C=Confidentiality impact.`
  },
  {
    id: 96,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 6,
    question: `Adam is conducting software testing by reviewing the source code of the application. What type of code testing is Adam conducting?`,
    choices: {
      A: `Mutation testing`,
      B: `Static code analysis`,
      C: `Dynamic code analysis`,
      D: `Fuzzing`
    },
    correct: "B",
    explanation: `Adam is conducting static code analysis by reviewing the source code. Dynamic code analysis requires running the program, and both mutation testing and fuzzing are types of dynamic analysis.`
  },
  {
    id: 97,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 6,
    question: `Charles is worried about users conducting SQL injection attacks. Which of the following solutions will best address his concerns?`,
    choices: {
      A: `Using secure session management`,
      B: `Enabling logging on the database`,
      C: `Performing user input validation`,
      D: `Implementing TLS`
    },
    correct: "C",
    explanation: `Charles should perform user input validation to strip out any SQL code or other unwanted input. Secure session management can help prevent session hijacking, logging may provide useful information for incident investigation, and implementing TLS can help protect network traffic, but only input validation helps with the issue described.`
  },
  {
    id: 98,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 6,
    question: `Precompiled SQL statements that only require variables to be input are an example of what type of application security control?`,
    choices: {
      A: `Parameterized queries`,
      B: `Encoding data`,
      C: `Input validation`,
      D: `Appropriate access controls`
    },
    correct: "A",
    explanation: `A parameterized query (sometimes called a prepared statement) uses a prebuilt SQL statement to prevent SQL-based attacks. Variables from the application are fed to the query, rather than building a custom query when the application needs data. Encoding data helps to prevent cross-site scripting attacks, as does input validation. Appropriate access controls can prevent access to data that the account or application should not have access to, but they don't use precompiled SQL statements. Stored procedures are an example of a parameterized query implementation.`
  },
  {
    id: 99,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 6,
    question: `During a web application test, Ben discovers that the application shows SQL code as part of an error provided to application users. What should he note in his report?`,
    choices: {
      A: `Improper error handling`,
      B: `Code exposure`,
      C: `SQL injection`,
      D: `A default configuration issue`
    },
    correct: "A",
    explanation: `Improper error handling often exposes data to users and possibly attackers that should not be exposed. In this case, knowing what SQL code is used inside the application can provide an attacker with details they can use to conduct further attacks. Code exposure is not one of the vulnerabilities we discuss in this book, and SQL code being exposed does not necessarily mean that SQL injection is possible. While this could be caused by a default configuration issue, there is nothing in the question to point to that problem.`
  },
  {
    id: 100,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 6,
    question: `The application that Scott is writing has a flaw that occurs when two operations are attempted at the same time, resulting in unexpected results when the two actions do not occur in the expected order. What type of flaw does the application have?`,
    choices: {
      A: `Dereferencing`,
      B: `A race condition`,
      C: `An insecure function`,
      D: `Improper error handling`
    },
    correct: "B",
    explanation: `The application has a race condition, which occurs when multiple operations cause undesirable results due to their order of completion. De-referencing accesses or uses a memory pointer, an insecure function would have security issues in the function itself, and improper error handling would involve an error and how it was displayed or what data it provided.`
  },
  {
    id: 101,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 6,
    question: `Every time Susan checks code into her organization's code repository, it is tested and validated, and then if accepted, it is immediately put into production. What is the term for this?`,
    choices: {
      A: `Continuous integration`,
      B: `Continuous delivery`,
      C: `A security nightmare`,
      D: `Agile development`
    },
    correct: "B",
    explanation: `Although this example includes continuous integration, the key thing to notice is that the code is then deployed into production. This means that Susan is operating in a continuous deployment environment, where code is both continually integrated and deployed. Agile is a development methodology and often uses CI/CD, but we cannot determine if Susan is using Agile.`
  },
  {
    id: 102,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 6,
    question: `Tim is working on a change to a web application used by his organization to fix a known bug. What environment should he be working in?`,
    choices: {
      A: `Test`,
      B: `Development`,
      C: `Staging`,
      D: `Production`
    },
    correct: "B",
    explanation: `Developers working on active changes to code should always work in the development environment. The test environment is where the software or systems can be tested without impacting the production environment. The staging environment is a transition environment for code that has successfully cleared testing and is waiting to be deployed into production. The production environment is the live system. Software, patches, and other changes that have been tested and approved move to production.`
  },
  {
    id: 103,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 6,
    question: `Ricky is concerned that developers in his organization make use of third-party code in their applications, which may introduce unknown vulnerabilities. He is concerned about the risk of the organization running code that it is not aware it is using. Which one of the following activities would best address this risk?`,
    choices: {
      A: `Web application firewalls`,
      B: `Package monitoring`,
      C: `Static analysis`,
      D: `Dynamic analysis`
    },
    correct: "B",
    explanation: `All of the activities listed here may reduce the risk of the vulnerabilities created by the code. However, Ricky is specifically concerned about the fact that the organization may not be aware of all of the code that it is running. Package monitoring would inventory and monitor these third-party libraries, so that is the best answer here.`
  },
  {
    id: 104,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 6,
    question: `Which one of the following is not an advantage of automation in cybersecurity operations?`,
    choices: {
      A: `Enforcing baselines`,
      B: `Technical debt`,
      C: `Employee retention`,
      D: `Standardizing infrastructure configurations`
    },
    correct: "B",
    explanation: `The main benefits of automation are efficiency and time savings, enforcing baselines, standardizing infrastructure configurations, scaling in a secure manner, retaining employees, reducing reaction time, and serving as a workforce multiplier. Technical debt is one of the potential drawbacks of automation.`
  },
  {
    id: 105,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 6,
    question: `Chris is creating a script that will automatically screen any user requests and flag those that exceed normal thresholds for manual review. What term best describes this automation use case?`,
    choices: {
      A: `User provisioning`,
      B: `Guard rails`,
      C: `Ticket creation`,
      D: `Escalation`
    },
    correct: "B",
    explanation: `This is an example of the guard rails use case for automation. Cybersecurity professionals can use scripting to automatically review user actions and block any that are outside of normal parameters.`
  },
  {
    id: 106,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 6,
    question: `Which one of the following is not a common drawback of automating cybersecurity operations?`,
    choices: {
      A: `Reducing employee satisfaction`,
      B: `Creating single points of failure`,
      C: `Costs`,
      D: `Complexity`
    },
    correct: "A",
    explanation: `Automation normally increases employee retention. The common drawbacks to automation include complexity, cost, creating single points of failure, incurring technical debt, and creating challenges to ongoing supportability.`
  },
  {
    id: 107,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 6,
    question: `Frank is investigating a security incident where the attacker entered a very long string into an input field, which was followed by a system command. What type of attack likely took place?`,
    choices: {
      A: `Cross-site request forgery`,
      B: `Server-side request forgery`,
      C: `Command injection`,
      D: `Buffer overflow`
    },
    correct: "D",
    explanation: `Buffer overflow attacks occur when an attacker manipulates a program into placing more data into an area of memory than is allocated for that program's use. The goal is to overwrite other information in memory with instructions that may be executed by a different process running on the system.`
  },
  {
    id: 108,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 6,
    question: `What type of attack places an attacker in the position to eavesdrop on communications between a user and a web server?`,
    choices: {
      A: `On-path attack`,
      B: `Session hijacking`,
      C: `Buffer overflow`,
      D: `Meet-in-the-middle`
    },
    correct: "A",
    explanation: `In an on-path attack, the attacker fools the user into thinking that the attacker is actually the target website and presenting a fake authentication form. They may then authenticate to the website on the user's behalf and obtain the cookie. This is slightly different from a session hijacking attack, where the attacker steals the cookie associated with an active session.`
  },
  {
    id: 109,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 6,
    question: `Tom is a software developer who creates code for sale to the public. He would like to assure his users that the code they receive actually came from him. What technique can he use to best provide this assurance?`,
    choices: {
      A: `Code signing`,
      B: `Code endorsement`,
      C: `Code encryption`,
      D: `Code obfuscation`
    },
    correct: "A",
    explanation: `Code signing provides developers with a way to confirm the authenticity of their code to end users. Developers use a cryptographic function to digitally sign their code with their own private key, and then browsers can use the developer's public key to verify that signature and ensure that the code is legitimate and was not modified by unauthorized individuals.`
  },
  {
    id: 110,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 6,
    question: `Chris is reviewing evidence of a cross-site scripting attack where the attacker embedded JavaScript in a URL that a user clicked. The web page then sent the JavaScript to the user in the displayed page. What term best describes this attack?`,
    choices: {
      A: `Reflected XSS`,
      B: `Stored XSS`,
      C: `Persistent XSS`,
      D: `DOM-based XSS`
    },
    correct: "A",
    explanation: `This is an example of a reflected attack because the script code is contained within the URL. A persistent or stored attack places the content on a web page or other location where a victim may later access it. DOM-based XSS attacks hide the attack code within the Document Object Model.`
  },
  {
    id: 111,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 6,
    question: `Joe checks his web server logs and sees that someone sent the following query string to an application running on the server: www.mycompany.com/servicestatus.php? serviceID=892&serviceID=892’%20;DROP%20TABLE%20Services;-- What type of attack was most likely attempted?`,
    choices: {
      A: `Cross-site scripting`,
      B: `Session hijacking`,
      C: `Parameter pollution`,
      D: `On-path`
    },
    correct: "C",
    explanation: `This query string is indicative of a parameter pollution attack. In this case, it appears that the attacker was waging a SQL injection attack and tried to use parameter pollution to slip the attack past content filtering technology. The two instances of the serviceID parameter in the query string indicate a parameter pollution attempt.`
  },
  {
    id: 112,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 6,
    question: `Upon further inspection, Joe finds a series of thousands of requests to the same URL coming from a single IP address. Here are a few examples: www.mycompany.com/servicestatus.php?serviceID=1 www.mycompany.com/servicestatus.php?serviceID=2 www.mycompany.com/servicestatus.php?serviceID=3 www.mycompany.com/servicestatus.php?serviceID=4 www.mycompany.com/servicestatus.php?serviceID=5 www.mycompany.com/servicestatus.php?serviceID=6 What type of vulnerability was the attacker likely trying to exploit?`,
    choices: {
      A: `Insecure direct object reference`,
      B: `File upload`,
      C: `Unvalidated redirect`,
      D: `Session hijacking`
    },
    correct: "A",
    explanation: `The series of thousands of requests incrementing a variable indicate that the attacker was most likely attempting to exploit an insecure direct object reference vulnerability.`
  },
  {
    id: 113,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 6,
    question: `Joe's adventures in web server log analysis are not yet complete. As he continues to review the logs, he finds the request: www.mycompany.com/../../../etc/passwd What type of attack was most likely attempted?`,
    choices: {
      A: `SQL injection`,
      B: `Session hijacking`,
      C: `Directory traversal`,
      D: `File upload`
    },
    correct: "C",
    explanation: `In this case, the .. operators are the telltale giveaway that the attacker was attempting to conduct a directory traversal attack. This particular attack sought to break out of the web server's root directory and access the /etc/passwd file on the server.`
  },
  {
    id: 114,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 6,
    question: `Wendy is a penetration tester who wishes to engage in a session hijacking attack. What information is crucial for Wendy to obtain if her attack will be successful?`,
    choices: {
      A: `Session ticket`,
      B: `Session cookie`,
      C: `Username`,
      D: `User password`
    },
    correct: "B",
    explanation: `Websites use HTTP cookies to maintain sessions over time. If Wendy is able to obtain a copy of the user's session cookie, she can use that cookie to impersonate the user's browser and hijack the authenticated session.`
  },
  {
    id: 115,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 6,
    question: `Joe is examining the logs for his web server and discovers that a user sent input to a web application that contained the string WAITFOR. What type of attack was the user likely attempting?`,
    choices: {
      A: `Timing-based SQL injection`,
      B: `HTML injection`,
      C: `Cross-site scripting`,
      D: `Content-based SQL injection Chapter 7 Cryptography and the PKI THE COMPTIA SECURITY+ EXAM OBJECTIVES COVERED IN THIS CHAPTER INCLUDE: Domain 1.0: General Security Concepts`
    },
    correct: "A",
    explanation: `The use of the SQL WAITFOR command is a signature characteristic of a timing-based SQL injection attack.`
  },
  {
    id: 116,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 7,
    question: `Mike is sending David an encrypted message using a symmetric encryption algorithm. What key should he use to encrypt the message?`,
    choices: {
      A: `Mike's public key`,
      B: `Mike's private key`,
      C: `David's public key`,
      D: `Shared secret key`
    },
    correct: "D",
    explanation: `In symmetric encryption algorithms, both the sender and the receiver use a shared secret key to encrypt and decrypt the message, respectively.`
  },
  {
    id: 117,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 7,
    question: `Shahla recently discovered an attack where the attacker managed to force a network user to use weak encryption and was then able to decrypt that content. What term best describes this attack?`,
    choices: {
      A: `Downgrade`,
      B: `Collision`,
      C: `Homomorphic encryption`,
      D: `Birthday attack`
    },
    correct: "A",
    explanation: `Downgrade attacks try to remove or lower the strength of encryption to allow the decryption of sensitive information. Birthday attacks find collisions where two different inputs produce the same hash value output, but there is no discussion of that in this scenario. Homomorphic encryption is not an attack but a technology that protects privacy by encrypting data in a way that preserves the ability to perform computation on that data.`
  },
  {
    id: 118,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 7,
    question: `Norm is using full-disk encryption technology to protect the contents of laptops against theft. What goal of cryptography is he attempting to achieve?`,
    choices: {
      A: `Integrity`,
      B: `Non-repudiation`,
      C: `Authentication`,
      D: `Confidentiality`
    },
    correct: "D",
    explanation: `Norm's actions are designed to protect against the unauthorized disclosure of sensitive information. This is a clear example of protecting confidentiality.`
  },
  {
    id: 119,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 7,
    question: `Brian discovers that a user suspected of stealing sensitive information is posting many image files to a message board. What technique might the individual be using to hide sensitive information in those images?`,
    choices: {
      A: `Steganography`,
      B: `Homomorphic encryption`,
      C: `Replay attack`,
      D: `Birthday attack`
    },
    correct: "A",
    explanation: `Steganography is the art of using cryptographic techniques to embed secret messages within another file.`
  },
  {
    id: 120,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 7,
    question: `Which one of the following statements about cryptographic keys is incorrect?`,
    choices: {
      A: `All cryptographic keys should be kept secret.`,
      B: `Longer keys are better than shorter keys when the same algorithm is used.`,
      C: `Asymmetric algorithms generally use longer keys than symmetric algorithms.`,
      D: `Digital certificates are designed to share public keys.`
    },
    correct: "A",
    explanation: `All of these statements are correct except for the statement that all cryptographic keys should be kept secret. The exception to this rule are public keys used in asymmetric cryptography. These keys should be freely shared.`
  },
  {
    id: 121,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 7,
    question: `What type of cipher operates on one character of text at a time?`,
    choices: {
      A: `Block cipher`,
      B: `Bit cipher`,
      C: `Stream cipher`,
      D: `Balanced cipher`
    },
    correct: "C",
    explanation: `Stream ciphers operate on one character or bit of a message (or data stream) at a time. Block ciphers operate on “chunks,” or blocks, of a message and apply the encryption algorithm to an entire message block at the same time.`
  },
  {
    id: 122,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 7,
    question: `Vince is choosing a symmetric encryption algorithm for use in his organization. He would like to choose the strongest algorithm from these choices. What algorithm should he choose?`,
    choices: {
      A: `DES`,
      B: `3DES`,
      C: `RSA`,
      D: `AES`
    },
    correct: "D",
    explanation: `AES is the successor to 3DES and DES and is the best choice for a symmetric encryption algorithm. RSA is a secure algorithm, but it is asymmetric rather than symmetric.`
  },
  {
    id: 123,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 7,
    question: `Kevin is configuring a web server to use digital certificates. What technology can he use to allow clients to quickly verify the status of those certificates without contacting a remote server?`,
    choices: {
      A: `CRL`,
      B: `OCSP`,
      C: `Certificate stapling`,
      D: `Certificate pinning`
    },
    correct: "C",
    explanation: `The Online Certificate Status Protocol (OCSP) provides realtime checking of a digital certificate's status using a remote server. Certificate stapling attaches a current OCSP response to the certificate to allow the client to validate the certificate without contacting the OCSP server. Certificate revocation lists (CRLs) are a slower, outdated approach to managing certificate status. Certificate pinning is used to provide an expected key, not to manage certificate status.`
  },
  {
    id: 124,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 7,
    question: `Acme Widgets has 10 employees and they all need the ability to communicate with one another using a symmetric encryption system. The system should allow any two employees to securely communicate without other employees eavesdropping. If an 11th employee is added to the organization, how many new keys must be added to the system?`,
    choices: {
      A: `1`,
      B: `2`,
      C: `10`,
      D: `11`
    },
    correct: "C",
    explanation: `When the 11th employee joins Acme Widgets, they will need a shared secret key with every existing employee. There are 10 existing employees, so 10 new keys are required.`
  },
  {
    id: 125,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 7,
    question: `Referring to the scenario in question 9, if Acme Widgets switched to an asymmetric encryption algorithm, how many keys would be required to add the 11th employee?`,
    choices: {
      A: `1`,
      B: `2`,
      C: `10`,
      D: `11`
    },
    correct: "B",
    explanation: `In an asymmetric encryption algorithm, each employee needs only two keys: a public key and a private key. Adding a new user to the system requires the addition of these two keys for that user, regardless of how many other users exist.`
  },
  {
    id: 126,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 7,
    question: `What type of digital certificate provides the greatest level of assurance that the certificate owner is who they claim to be?`,
    choices: {
      A: `DV`,
      B: `OV`,
      C: `UV`,
      D: `EV`
    },
    correct: "D",
    explanation: `Extended validation (EV) certificates provide the highest available level of assurance. The CA issuing an EV certificate certifies that they have verified the identity and authenticity of the certificate subject.`
  },
  {
    id: 127,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 7,
    question: `Glenn recently obtained a wildcard certificate for *.mydomain.com. Which one of the following domains would not be covered by this certificate?`,
    choices: {
      A: `mydomain.com`,
      B: `core.mydomain.com`,
      C: `dev. www.mydomain.com`,
      D: `mail.mydomain.com`
    },
    correct: "C",
    explanation: `Wildcard certificates protect the listed domain as well as all first-level subdomains. dev.www.mydomain.com is a second-level subdomain of mydomain.com and would not be covered by this certificate.`
  },
  {
    id: 128,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 7,
    question: `Which one of the following servers is almost always an offline CA in a large PKI deployment?`,
    choices: {
      A: `Root CA`,
      B: `Intermediate CA`,
      C: `RA`,
      D: `Internal CA`
    },
    correct: "A",
    explanation: `Root CAs are highly protected and not normally used for certificate issuance. A root CA is usually run as an offline CA that delegates authority to intermediate CAs that run as online CAs.`
  },
  {
    id: 129,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 7,
    question: `Which one of the following certificate formats is closely associated with Windows binary certificate files?`,
    choices: {
      A: `DER`,
      B: `PEM`,
      C: `PFX`,
      D: `P7B`
    },
    correct: "C",
    explanation: `The PFX format is most closely associated with Windows systems that store certificates in binary format, whereas the P7B format is used for Windows systems storing files in text format.`
  },
  {
    id: 130,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 7,
    question: `What type of security solution provides a hardware platform for the storage and management of encryption keys?`,
    choices: {
      A: `HSM`,
      B: `IPS`,
      C: `SIEM`,
      D: `SOAR`
    },
    correct: "A",
    explanation: `Hardware security modules (HSMs) provide an effective way to manage encryption keys. These hardware devices store and manage encryption keys in a secure manner that prevents humans from ever needing to work directly with the keys.`
  },
  {
    id: 131,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 7,
    question: `What type of cryptographic attack attempts to force a user to reduce the level of encryption that they use to communicate with a remote server?`,
    choices: {
      A: `Birthday`,
      B: `Frequency`,
      C: `Downgrade`,
      D: `Collision`
    },
    correct: "C",
    explanation: `A downgrade attack is sometimes used against secure communications such as TLS in an attempt to get the user or system to inadvertently shift to less secure cryptographic modes. The idea is to trick the user into shifting to a less secure version of the protocol, one that might be easier to break.`
  },
  {
    id: 132,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 7,
    question: `David would like to send Mike a message using an asymmetric encryption algorithm. What key should he use to encrypt the message?`,
    choices: {
      A: `David's public key`,
      B: `David's private key`,
      C: `Mike's public key`,
      D: `Mike's private key`
    },
    correct: "C",
    explanation: `When encrypting a message using an asymmetric encryption algorithm, the person performing the encryption does so using the recipient's public key.`
  },
  {
    id: 133,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 7,
    question: `When Mike receives the message that David encrypted for him, what key should he use to decrypt the message?`,
    choices: {
      A: `David's public key`,
      B: `David's private key`,
      C: `Mike's public key`,
      D: `Mike's private key`
    },
    correct: "D",
    explanation: `In an asymmetric encryption algorithm, the recipient of a message uses their own private key to decrypt messages that they receive.`
  },
  {
    id: 134,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 7,
    question: `If David wishes to digitally sign the message that he is sending Mike, what key would he use to create the digital signature?`,
    choices: {
      A: `David's public key`,
      B: `David's private key`,
      C: `Mike's public key`,
      D: `Mike's private key`
    },
    correct: "B",
    explanation: `The sender of a message may digitally sign the message by encrypting a message digest with the sender's own private key.`
  },
  {
    id: 135,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 7,
    question: `When Mike receives the digitally signed message from David, what key should he use to verify the digital signature?`,
    choices: {
      A: `David's public key`,
      B: `David's private key`,
      C: `Mike's public key`,
      D: `Mike's private key Chapter 8 Identity and Access Management THE COMPTIA SECURITY+ EXAM OBJECTIVES COVERED IN THIS CHAPTER INCLUDE: Domain 1.0: General Security Concepts`
    },
    correct: "A",
    explanation: `The recipient of a digitally signed message may verify the digital signature by decrypting it with the public key of the individual who signed the message.`
  },
  {
    id: 136,
    domain: "Security Operations",
    domainId: 4,
    chapter: 8,
    question: `Angela has chosen to federate with other organizations to allow use of services that each organization provides. What role does Angela's organization play when they authenticate their users and assert that those users are valid to other members of the federation?`,
    choices: {
      A: `Service provider`,
      B: `Relying party`,
      C: `Authentication provider`,
      D: `Identity provider`
    },
    correct: "D",
    explanation: `Angela's organization is acting as an identity provider (IdP). Other members of the federation may act as a service provider or relying party when they allow her users to access their services. Authentication provider is not a named role in typical federation activities.`
  },
  {
    id: 137,
    domain: "Security Operations",
    domainId: 4,
    chapter: 8,
    question: `Which of the following technologies is the least effective means of preventing shared accounts?`,
    choices: {
      A: `Password complexity requirements`,
      B: `Requiring biometric authentication`,
      C: `Requiring one-time passwords via a token`,
      D: `Requiring a one-time password via an application`
    },
    correct: "A",
    explanation: `Password complexity requirements do not prevent sharing of complex passwords, making it the least effective option from the list. Biometric authentication measures will require the enrolled user to be there, although in some cases such as fingerprint systems, multiple users could each enroll a valid fingerprint for a single account. Both types of one-time passwords could be shared but make it harder and less convenient to share accounts.`
  },
  {
    id: 138,
    domain: "Security Operations",
    domainId: 4,
    chapter: 8,
    question: `Amitoj wants to ensure that her organization's password policy does not allow users to reset their password multiple times until they can reuse their current password. What setting is used to prevent this?`,
    choices: {
      A: `Complexity`,
      B: `Length`,
      C: `Expiration`,
      D: `Age`
    },
    correct: "D",
    explanation: `Password age is set to prevent users from resetting their password enough times to bypass reuse settings. Complexity, length, and expiration do not influence this.`
  },
  {
    id: 139,
    domain: "Security Operations",
    domainId: 4,
    chapter: 8,
    question: `Which type of multifactor authentication is considered the least secure?`,
    choices: {
      A: `HOTP`,
      B: `SMS`,
      C: `TOTP`,
      D: `Biometric`
    },
    correct: "B",
    explanation: `SMS messages are not secure and could be accessed by cloning a SIM card or redirecting VoIP traffic, among other possible threat models. Both HOTP and TOTP tokens and applications as well as biometric factors are generally considered more secure than an SMS-based factor.`
  },
  {
    id: 140,
    domain: "Security Operations",
    domainId: 4,
    chapter: 8,
    question: `Geeta has been issued a USB security key as part of her organization's multifactor implementation. What type of implementation is this?`,
    choices: {
      A: `A hard token`,
      B: `A biometric token`,
      C: `A soft token`,
      D: `An attestation token`
    },
    correct: "A",
    explanation: `A USB security key is an example of a hard, or physical, token. An application is an example of a soft token. A biometric factor might be a fingerprint or faceprint. Attestation is a formal verification that something is true. Attestation tokens were made up for this question.`
  },
  {
    id: 141,
    domain: "Security Operations",
    domainId: 4,
    chapter: 8,
    question: `Michelle enables the Windows picture password feature to control logins for her laptop. Which type of attribute will it provide?`,
    choices: {
      A: `Somewhere you are`,
      B: `Something you know`,
      C: `Something you are`,
      D: `Someone you know`
    },
    correct: "B",
    explanation: `Picture password asks users to click on specific, self-defined parts of a picture. This means that clicking on those points is something you know. Something you are involves biometric traits, and somewhere you are relies on geographic locations.`
  },
  {
    id: 142,
    domain: "Security Operations",
    domainId: 4,
    chapter: 8,
    question: `What purpose would Linux file permissions set to rw-r—r-serve?`,
    choices: {
      A: `To allow the owner to read and write the file, and for the owner's group and others to be able to read it`,
      B: `To allow all users to read and write the file, and for the group and owner to be able to read it`,
      C: `To allow system administrators to read and write the file, and for users and all others to be able to read it`,
      D: `To prevent reading and writing for all users, and to prevent reading by groups and a specific user`
    },
    correct: "A",
    explanation: `Linux file permissions are read left to right, with the first three characters indicating read, write, and execute permissions (rwx) for the owner of the file, the second three apply to the group, and the last three to all other users. Any indicated with a – are not allowed for that set.`
  },
  {
    id: 143,
    domain: "Security Operations",
    domainId: 4,
    chapter: 8,
    question: `Theresa wants to implement an access control scheme that sets permissions based on what the individual's job requires. Which of the following schemes is most suited to this type of implementation?`,
    choices: {
      A: `ABAC`,
      B: `DAC`,
      C: `RBAC`,
      D: `MAC`
    },
    correct: "C",
    explanation: `Role-based access control (RBAC) sets permissions based on an individual's role, which is typically associated with their job. Attribute-based access control (ABAC) is typically matched to other attributes than the job role. Discretionary access control (DAC) and mandatory access control (MAC) are commonly implemented at the operating system level.`
  },
  {
    id: 144,
    domain: "Security Operations",
    domainId: 4,
    chapter: 8,
    question: `Which of the following biometric technologies is most broadly deployed due to its ease of use and acceptance from end users?`,
    choices: {
      A: `Voice print recognition`,
      B: `Gait recognition`,
      C: `Retina scanners`,
      D: `Fingerprint scanner`
    },
    correct: "D",
    explanation: `Fingerprint scanners are found on many mobile devices and laptops, making them one of the most broadly deployed biometric technologies. Facial recognition is also broadly deployed, but it is not mentioned in this question or offered as an option.`
  },
  {
    id: 145,
    domain: "Security Operations",
    domainId: 4,
    chapter: 8,
    question: `Adam want to increase his organization's passwords resistance to attacks in the event that the password hash database is stolen by attackers. Which of the following password security settings has the largest impact on password cracking if his organization's current passwords are 8 characters long?`,
    choices: {
      A: `Password complexity`,
      B: `Password length`,
      C: `Password reuse limitations`,
      D: `Preventing the use of common words in passwords`
    },
    correct: "B",
    explanation: `Password length has the largest impact on preventing password cracking. When paired with a strong password hash algorithm and proper use of technology like salting, long passwords are much harder to crack. Complexity is the next most important option, as preventing simple repeated characters and similar problematic passwords helps reduce the probability of easily cracked passwords being used. Reuse limitations and preventing common words are less useful.`
  },
  {
    id: 146,
    domain: "Security Operations",
    domainId: 4,
    chapter: 8,
    question: `A PIN is an example of what type of factor?`,
    choices: {
      A: `Something you know`,
      B: `Something you are`,
      C: `Something you have`,
      D: `Something you set`
    },
    correct: "A",
    explanation: `PINs and passwords are both examples of something you know. Something you set is not a type of factor. Biometric factors are an example of something you are, and a physical USB token would be a common example of something you have.`
  },
  {
    id: 147,
    domain: "Security Operations",
    domainId: 4,
    chapter: 8,
    question: `Marie is implementing a PAM solution and wants to ensure that root passwords are available in the event of an outage. Which PAM-related tool is most likely to be useful in this situation?`,
    choices: {
      A: `Ephemeral accounts`,
      B: `Just-in-time permissions`,
      C: `Password vaulting`,
      D: `Token-based authentication`
    },
    correct: "C",
    explanation: `Password vaulting, which stores passwords for use with proper authentication and rights, is the most appropriate solution for Marie's needs. Ephemeral accounts and just-in-time permissions are typically used under normal circumstances to provide least privilege access as needed. Token-based authentication is not specifically a PAM solution.`
  },
  {
    id: 148,
    domain: "Security Operations",
    domainId: 4,
    chapter: 8,
    question: `Jill sets her files on a Windows file share to allow Fred to access the files. What type of access control system is she using?`,
    choices: {
      A: `Mandatory access control`,
      B: `Rule-based access control`,
      C: `Attribute-based access control`,
      D: `Discretionary access control`
    },
    correct: "D",
    explanation: `Jill is able to make decisions about the rights she grants on her files, meaning this is a discretionary access control system. A mandatory access control system relies on labels to set access control rules. Rule-based access control systems rely on rules to define access, and attribute-based access control systems grant access based on attributes like job roles or locations.`
  },
  {
    id: 149,
    domain: "Security Operations",
    domainId: 4,
    chapter: 8,
    question: `Lisa sets up an account on a website that allows her to log in with Google. When she logs in, Google provides an access token to the website that confirms that she is who she says she is but doesn't provide the site with her password. Which of the following technologies has she used?`,
    choices: {
      A: `LDAP`,
      B: `OAuth`,
      C: `MITRE`,
      D: `RADIUS`
    },
    correct: "B",
    explanation: `OAuth is an authentication protocol that allows services to receive authentication tokens from an identity provider without needing the user's password. LDAP is a directory service and is often used as part of SSO processes. MITRE is a nonprofit organization, and RADIUS is an authentication technology.`
  },
  {
    id: 150,
    domain: "Security Operations",
    domainId: 4,
    chapter: 8,
    question: `Kyle has been asked to provide his government-issued ID as part of the creation of his user account. What process should he assume it is being used for?`,
    choices: {
      A: `Biometric enrollment`,
      B: `Just-in-time permission creation`,
      C: `Identity proofing`,
      D: `Federation`
    },
    correct: "C",
    explanation: `Kyle can assume that his government-issued ID is being used as part of an identity proofing process to validate that he is who he claims to be. Biometric enrollment typically requires interaction with an enrollment process to scan or capture biometric information. Just-in-time permission creation is done when access is requested and does not require government ID, and federation connects identity providers with service providers, which is not described here.`
  },
  {
    id: 151,
    domain: "Security Operations",
    domainId: 4,
    chapter: 8,
    question: `What key concept below best describes only providing the permissions necessary to perform a role?`,
    choices: {
      A: `Least privilege`,
      B: `Best practice`,
      C: `Ephemeral accounts`,
      D: `Mandatory access control`
    },
    correct: "A",
    explanation: `The principle of least privilege means that users should only be given the permissions necessary to perform their role. Best practice is a general term describing commonly recommended and accepted industry practices. Temporal accounts are ephemeral, or short-lived accounts. Mandatory access control is an access control scheme.`
  },
  {
    id: 152,
    domain: "Security Operations",
    domainId: 4,
    chapter: 8,
    question: `Nina has recently left her organization. What should the organization do with her account?`,
    choices: {
      A: `Transfer it to her replacement.`,
      B: `Reprovision it for another user.`,
      C: `Deprovision her account.`,
      D: `Change the password and preserve the account.`
    },
    correct: "C",
    explanation: `Without other factors that would require the account to be retained, deprovisioning accounts that belonged to users who have left the organization is a best practice. Transferring accounts or reprovisioning them may expose data to new users or provide them with rights that they should not have.`
  },
  {
    id: 153,
    domain: "Security Operations",
    domainId: 4,
    chapter: 8,
    question: `A person's name, age, location, or job title are all examples of what?`,
    choices: {
      A: `Biometric factors`,
      B: `Identity factors`,
      C: `Attributes`,
      D: `Account permissions`
    },
    correct: "C",
    explanation: `A person's name, age, location, job title, and even things like their height or their hair color are all attributes that may be associated with a person's identity. None of these describe biometric factors used for authentication, and identity factors are something you are, something you have, or somewhere you are. Account permissions determine what you can do, not attributes like these.`
  },
  {
    id: 154,
    domain: "Security Operations",
    domainId: 4,
    chapter: 8,
    question: `What type of access control scheme best describes the Linux filesystem?`,
    choices: {
      A: `MAC`,
      B: `RBAC`,
      C: `DAC`,
      D: `ABAC Chapter 9 Resilience and Physical Security THE COMPTIA SECURITY+ EXAM OBJECTIVES COVERED IN THIS CHAPTER INCLUDE: Domain 1.0: General Security Concepts`
    },
    correct: "C",
    explanation: `Linux users can change who can read, write, or execute files and directories they own, which is discretionary access control (DAC). Mandatory access control (MAC) would enforce settings set by the systems administrator without users having the rights to make their own decisions. While role-based access control is involved, DAC best describes the access control scheme. ABAC is not a default method for setting rights for the Linux filesystem.`
  },
  {
    id: 155,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 9,
    question: `Naomi wants to handle increasing load by scaling cloud-hosted resources as needed while having the change remain transparent to users. She also wants to allow for upgrades and system replacements transparently. What solution should she select?`,
    choices: {
      A: `Load balancing`,
      B: `Clustering`,
      C: `Geographic diversity`,
      D: `A hot site`
    },
    correct: "A",
    explanation: `Naomi should select a load balancing solution. Load balancers allow multiple systems or services to appear like a single resource and can take systems out of the load-balanced pool to allow for upgrades or changes in resources required. Clustering is used to allow groups of computers to perform the same task, but without a load balancer cannot provide the same transparent service appearing as the same system. Geographic diversity and hot sites are concepts used to provide resilience but don't provide this capability.`
  },
  {
    id: 156,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 9,
    question: `Rick performs a backup that captures the changes since the last full backup. What type of backup has he performed?`,
    choices: {
      A: `A new full backup`,
      B: `A snapshot`,
      C: `An incremental backup`,
      D: `A differential backup`
    },
    correct: "D",
    explanation: `Differential backups back up the changes since the last full backup. Incremental backups back up changes since the last backup, and snapshots are a live copy of a system. This is not a full backup, because it is capturing changes since a full backup.`
  },
  {
    id: 157,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 9,
    question: `What type of recovery site has some or most systems in place but does not have the data needed to take over operations?`,
    choices: {
      A: `A hot site`,
      B: `A warm site`,
      C: `A cloud site`,
      D: `A cold site`
    },
    correct: "B",
    explanation: `Warm sites have systems, connectivity, and power but do not have the live or current data to immediately take over operations. A hot site can immediately take over operations, whereas a cold site has space and power, and likely connectivity, but will require that systems and data be put in place to be used. Cloud sites are not one of the three common types of recovery sites.`
  },
  {
    id: 158,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 9,
    question: `Ben wants to test his warm site to verify that it will take over operations successfully. What type of testing is this?`,
    choices: {
      A: `Parallel processing`,
      B: `Simulation`,
      C: `Failover`,
      D: `A tabletop exercise`
    },
    correct: "C",
    explanation: `Testing that involves an actual failover to another site or service is failover testing. Parallel processing runs both sites or services at the same time; simulation and tabletops both review what would happen without making the actual change.`
  },
  {
    id: 159,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 9,
    question: `Felix wants to clone a virtual machine. What should he do to capture a live machine, including the machine state?`,
    choices: {
      A: `A full backup`,
      B: `A snapshot`,
      C: `A differential backup`,
      D: `Live boot media`
    },
    correct: "B",
    explanation: `Virtual machine snapshots capture the machine state at a point in time and will allow Felix to clone the system. A full backup and a differential backup can be used to capture the disk for the machine but typically will not capture the memory state and other details of the system state. Live boot media allows you to boot and run a nonpersistent system from trusted media.`
  },
  {
    id: 160,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 9,
    question: `Sally is working to restore her organization's operations after a disaster took her datacenter offline. What critical document should she refer to as she restarts systems?`,
    choices: {
      A: `The restoration order documentation`,
      B: `The TOTP documentation`,
      C: `The HOTP documentation`,
      D: `The last-known good configuration documentation`
    },
    correct: "A",
    explanation: `A documented restoration order helps ensure that systems and services that have dependencies start in the right order and that high-priority or mission-critical services are restored first. TOTP and HOTP are types of one-time password technology, and lastknown good configurations are often preserved with a snapshot or other technology that can allow a system to return to a known good status after an issue such as a bad patch or configuration change.`
  },
  {
    id: 161,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 9,
    question: `Mike wants to stop vehicles from traveling toward the entrance of his building. What physical security control should he implement?`,
    choices: {
      A: `An air gap`,
      B: `A hot aisle`,
      C: `A robotic sentry`,
      D: `A bollard`
    },
    correct: "D",
    explanation: `Bollards are physical security controls that prevent vehicles from accessing or ramming doors or other areas. They may look like pillars, planters, or other innocuous objects. An air gap is a physical separation of technology environments; a hot aisle is the aisle where systems in a datacenter exhaust warm air; and unlike in movies, robotic sentries are not commonly deployed and aren't ready to stop vehicles in most current circumstances.`
  },
  {
    id: 162,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 9,
    question: `Alecia wants to ensure that her backups cannot be accessed by third parties while stored in an offsite storage location. What should she do to secure her backups?`,
    choices: {
      A: `Hash the backup data.`,
      B: `Avoid the use of offsite storage locations.`,
      C: `Employ security guards.`,
      D: `Encrypt the backup data.`
    },
    correct: "D",
    explanation: `Encryption is commonly used to ensure that backup media or data that is exposed is not accessible to third parties. This does mean that Alecia must carefully secure the encryption keys for the backup. Hashing that data would not keep it secure, and if only hashes were stored the data would be unrecoverable. Security guards are expensive and not a complete solution if data is inadvertently exposed, and offsite, secure storage locations are a useful and common solution for organizations that want to have remote backups.`
  },
  {
    id: 163,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 9,
    question: `Fred wants to be able to recover his database transactions at any point in time if a physical disaster occurs involving his datacenter. His organization uses daily backups. What additional solution should he select to support this need?`,
    choices: {
      A: `Onsite journaling`,
      B: `Onsite snapshots`,
      C: `Offsite journaling`,
      D: `Offsite snapshots`
    },
    correct: "C",
    explanation: `Offsite journaling will allow transactions to be recorded and to remain available if a significant event occurred that involved his datacenter. Snapshots are useful at a point in time but do not retain a transaction log between snapshots.`
  },
  {
    id: 164,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 9,
    question: `Ellen is concerned about her company's resilience and wants to ensure it can handle either changing loads or support disaster recovery and business continuity efforts if a primary location or datacenter were taken offline. Which of the following should she primarily focus on during her capacity planning?`,
    choices: {
      A: `People, technology, and infrastructure`,
      B: `A generator and a UPS`,
      C: `RAID 0, 1, 5, and 10`,
      D: `Incremental, differential, and full backups`
    },
    correct: "A",
    explanation: `Resilience requires capacity planning to ensure that capacity— including staff, technology, and infrastructure—is available when is needed. Although a generator, UPS, various RAID levels, and backups have their place in disaster recovery and contingency planning, they are not the primary focus of resiliency and capacity planning.`
  },
  {
    id: 165,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 9,
    question: `Madhuri has deployed a replication tool that copies data over to a secondary hot site in real time. What type of replication has she deployed?`,
    choices: {
      A: `Synchronous replication`,
      B: `Journaled replication`,
      C: `Asynchronous replication`,
      D: `Snapshot-based replication`
    },
    correct: "A",
    explanation: `Synchronous replication occurs in real time, whereas asynchronous replication occurs after the fact but more regularly than a backup. Journaled and snapshot-based replication are not specific types of replication.`
  },
  {
    id: 166,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 9,
    question: `What factor is a major reason organizations do not use security guards?`,
    choices: {
      A: `Reliability`,
      B: `Training`,
      C: `Cost`,
      D: `Social engineering`
    },
    correct: "C",
    explanation: `Security guards can be one of the costliest physical security controls over time, making the cost of guards one of the most important deciding factors guiding when and where they will be employed. Reliability, training, and the potential for social engineering are all possible issues with security guards, but none of these is the major driver in the decision process.`
  },
  {
    id: 167,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 9,
    question: `Megan wants to deploy a sensor that is inexpensive, yet will allow her to detect humans entering and moving in a secured room. Which of the following should she select?`,
    choices: {
      A: `An infrared sensor`,
      B: `A microwave sensor`,
      C: `An ultrasonic sensor`,
      D: `A pressure sensor`
    },
    correct: "A",
    explanation: `Infrared sensors balance lower cost with the ability to detect humans entering and moving in a space. Microwave sensors are more expensive but can provide better coverage, including traveling through some barriers. Ultrasonic sensors are rarely used for this purpose, and pressure sensors are limited to the pad where they are deployed, making them expensive and challenging to use for rooms or larger spaces.`
  },
  {
    id: 168,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 9,
    question: `Kathleen wants to discourage potential attackers from entering the facility she is responsible for. Which of the following is not a common control used for this type of preventive defense?`,
    choices: {
      A: `Fences`,
      B: `Lighting`,
      C: `Platform diversity`,
      D: `Video surveillance`
    },
    correct: "C",
    explanation: `Fences, lighting, and video surveillance can all help discourage potential malicious actors from entering an area, although a determined adversary will ignore or bypass all three. Platform diversity can help make it harder for attackers to succeed, but this is primarily a resilience tactic, and remains more costly to maintain and implement.`
  },
  {
    id: 169,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 9,
    question: `How does technology diversity help ensure cybersecurity resilience?`,
    choices: {
      A: `It ensures that a vulnerability in a single company's product will not impact the entire infrastructure.`,
      B: `If a single vendor goes out of business, the company does not need to replace its entire infrastructure.`,
      C: `It means that a misconfiguration will not impact the company's entire infrastructure.`,
      D: `All of the above.`
    },
    correct: "D",
    explanation: `Technology diversity helps ensure that a single failure—due to a vendor, vulnerability, or misconfiguration—will not impact an entire organization. Technology diversity does have additional costs, including training, patch management, and configuration management.`
  },
  {
    id: 170,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 9,
    question: `Scott sends his backups to a company that keeps them in a secure vault. What type of backup solution has he implemented?`,
    choices: {
      A: `Nearline`,
      B: `Safe`,
      C: `Onsite`,
      D: `Offsite`
    },
    correct: "D",
    explanation: `Scott has implemented an offsite backup scheme. His backups will take longer to retrieve because they are at a remote facility and will have to be sent back to him, but they are likely to survive any disaster that occurs in his facility or datacenter. Onsite backups are kept immediately accessible, whereas nearline backups can be retrieved somewhat more slowly than online backups but faster than offline backups. “Safe backups” is not an industry term.`
  },
  {
    id: 171,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 9,
    question: `Gabby wants to detect physical brute-force attempts against her organization. What solution is best suited to this?`,
    choices: {
      A: `Security guards`,
      B: `Locks`,
      C: `Access badges`,
      D: `An intrusion detection system (IDS)`
    },
    correct: "A",
    explanation: `Security guards who can monitor for and understand the signs of a physical brute-force attempt are the most useful control listed. Locks may show signs of attempts but require careful inspection, access badges would require log review and additional information to detect brute-force attacks, and an IDS is useful for network attacks.`
  },
  {
    id: 172,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 9,
    question: `Florian wants to test his high-availability designs but does not want to interrupt his organization's normal work. Which of the following is the least disruptive testing scenario?`,
    choices: {
      A: `A failover exercise`,
      B: `A tabletop exercise`,
      C: `A partial failover exercise`,
      D: `A simulation`
    },
    correct: "B",
    explanation: `A tabletop exercise is the least disruptive form of exercise. Even simulations have some risk if an employee does not fully realize that the scenario is simulated and takes action. Failover, even partial, involves the potential for disruption.`
  },
  {
    id: 173,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 9,
    question: `Gurvinder identifies a third-party datacenter provider over 90 miles away to run his redundant datacenter operations. Why has he placed the datacenter that far away?`,
    choices: {
      A: `Because it is required by law`,
      B: `Network traffic latency concerns`,
      C: `Geographic dispersion`,
      D: `Geographic tax reasons Chapter 10 Cloud and Virtualization Security THE COMPTIA SECURITY+ EXAM OBJECTIVES COVERED IN THIS CHAPTER INCLUDE: Domain 2.0: Threats, Vulnerabilities, and Mitigations`
    },
    correct: "C",
    explanation: `Geographic dispersion helps ensure that a single natural or human-made disaster does not disable multiple facilities. This distance is not required by law; latency increases with distance; and though there may be tax reasons in some cases, this is not a typical concern for a security professional.`
  },
  {
    id: 174,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 10,
    question: `Kevin discovered that his web server was being overwhelmed by traffic, causing a CPU bottleneck. Using the interface offered by his cloud service provider, he added another CPU to the server. What term best describes Kevin's action?`,
    choices: {
      A: `Elasticity`,
      B: `Horizontal scaling`,
      C: `Vertical scaling`,
      D: `High availability`
    },
    correct: "C",
    explanation: `This is an example of adding additional capacity to an existing server, which is also known as vertical scaling. Kevin could also have used horizontal scaling by adding additional web servers. Elasticity involves the ability to both add and remove capacity on demand, and though it does describe this scenario, it's not as good a description as vertical scaling. There is no mention of increasing the server's availability.`
  },
  {
    id: 175,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 10,
    question: `Fran's organization uses a Type I hypervisor to implement an IaaS offering that it sells to customers. Which one of the following security controls is least applicable to this environment?`,
    choices: {
      A: `Customers must maintain security patches on guest operating systems.`,
      B: `The provider must maintain security patches on the hypervisor.`,
      C: `The provider must maintain security patches on the host operating system.`,
      D: `Customers must manage security groups to mediate network access to guest operating systems.`
    },
    correct: "C",
    explanation: `Type I hypervisors, also known as bare-metal hypervisors, run directly on top of the physical hardware and, therefore, do not require a host operating system.`
  },
  {
    id: 176,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 10,
    question: `In what cloud security model does the cloud service provider bear the most responsibility for implementing security controls?`,
    choices: {
      A: `IaaS`,
      B: `FaaS`,
      C: `PaaS`,
      D: `SaaS`
    },
    correct: "D",
    explanation: `The cloud service provider bears the most responsibility for implementing security controls in an SaaS environment and the least responsibility in an IaaS environment. This is due to the division of responsibilities under the cloud computing shared responsibility model.`
  },
  {
    id: 177,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 10,
    question: `Greg would like to find a reference document that describes how to map cloud security controls to different regulatory standards. What document would best assist with this task?`,
    choices: {
      A: `CSA CCM`,
      B: `NIST SP 500-292`,
      C: `ISO 27001`,
      D: `PCI DSS`
    },
    correct: "A",
    explanation: `The Cloud Security Alliance (CSA) Cloud Controls Matrix (CCM) is a reference document designed to help organizations understand the appropriate use of cloud security controls and map those controls to various regulatory standards. NIST SP 500292 is a reference model for cloud computing and operates at a high level. ISO 27001 is a general standard for cybersecurity, and PCI DSS is a regulatory requirement for organizations involved in processing credit card transactions.`
  },
  {
    id: 178,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 10,
    question: `Wanda is responsible for a series of seismic sensors placed at remote locations. These sensors have low-bandwidth connections, and she would like to place computing power on the sensors to allow them to preprocess data before it is sent back to the cloud. What term best describes this approach?`,
    choices: {
      A: `Edge computing`,
      B: `Client-server computing`,
      C: `Fog computing`,
      D: `Thin client computing`
    },
    correct: "A",
    explanation: `This approach may be described as client-server computing, but that is a general term that describes many different operating environments. The better term to use here is edge computing, which involves placing compute power at the client to allow it to perform preprocessing before sending data back to the cloud. Fog computing is a related concept that uses IoT gateway devices that are located in close physical proximity to the sensors.`
  },
  {
    id: 179,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 10,
    question: `Which one of the following statements about cloud computing is incorrect?`,
    choices: {
      A: `Cloud computing offers ubiquitous, convenient access.`,
      B: `Cloud computing customers store data on hardware that is shared with other customers.`,
      C: `Cloud computing customers provision resources through the service provider's sales team.`,
      D: `Cloud computing resources are accessed over a network.`
    },
    correct: "C",
    explanation: `One of the key characteristics of cloud computing is that customers can access resources on-demand with minimal service provider interaction. Cloud customers do not need to contact a sales representative each time they wish to provision a resource but can normally do so on a self-service basis.`
  },
  {
    id: 180,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 10,
    question: `Helen designed a new payroll system that she offers to her customers. She hosts the payroll system in AWS and her customers access it through the web. What tier of cloud computing best describes Helen's service?`,
    choices: {
      A: `PaaS`,
      B: `SaaS`,
      C: `FaaS`,
      D: `IaaS`
    },
    correct: "B",
    explanation: `Helen is using IaaS services to create her payroll product. She is then offering that payroll service to her customers as a SaaS solution.`
  },
  {
    id: 181,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 10,
    question: `Which cloud computing deployment model requires the use of a unifying technology platform to tie together components from different providers?`,
    choices: {
      A: `Public cloud`,
      B: `Private cloud`,
      C: `Community cloud`,
      D: `Hybrid cloud`
    },
    correct: "D",
    explanation: `Hybrid cloud environments blend elements of public, private, and/or community cloud solutions. A hybrid cloud requires the use of technology that unifies the different cloud offerings into a single, coherent platform.`
  },
  {
    id: 182,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 10,
    question: `Which one of the following would not commonly be available as an IaaS service offering?`,
    choices: {
      A: `CRM`,
      B: `Storage`,
      C: `Networking`,
      D: `Computing`
    },
    correct: "A",
    explanation: `Customer relationship management (CRM) packages offered in the cloud would be classified as software-as-a-service (SaaS), since they are not infrastructure components. Storage, networking, and computing resources are all common IaaS offerings.`
  },
  {
    id: 183,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 10,
    question: `Which one of the following is not an example of infrastructure as code?`,
    choices: {
      A: `Defining infrastructure in JSON`,
      B: `Writing code to interact with a cloud provider's API`,
      C: `Using a cloud provider's web interface to provision resources`,
      D: `Defining infrastructure in YAML`
    },
    correct: "C",
    explanation: `Infrastructure as code (IaC) is any approach that automates the provisioning, management, and deprovisioning of cloud resources. Defining resources through JSON or YAML is IaC, as is writing code that interacts with an API. Provisioning resources through a web interface is manual, not automated, and therefore does not qualify as IaC.`
  },
  {
    id: 184,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 10,
    question: `Brian is selecting a CASB for his organization, and he would like to use an approach that interacts with the cloud provider directly. Which CASB approach is most appropriate for his needs?`,
    choices: {
      A: `Inline CASB`,
      B: `Outsider CASB`,
      C: `Comprehensive CASB`,
      D: `API-based CASB`
    },
    correct: "D",
    explanation: `API-based CASB solutions interact directly with the cloud provider through the provider's API. Inline CASB solutions intercept requests between the user and the provider. Outsider and comprehensive are not categories of CASB solutions.`
  },
  {
    id: 185,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 10,
    question: `In which of the following cloud categories are customers typically charged based on the number of virtual server instances dedicated to their use?`,
    choices: {
      A: `IaaS only`,
      B: `SaaS only`,
      C: `IaaS and PaaS`,
      D: `IaaS, SaaS, and PaaS`
    },
    correct: "C",
    explanation: `Customers are typically charged for server instances in both IaaS environments, where they directly provision those instances, and PaaS environments, where they request the number of servers needed to support their applications. In an SaaS environment, the customer typically has no knowledge of the number of server instances supporting their use.`
  },
  {
    id: 186,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 10,
    question: `Brian would like to limit the ability of users inside his organization to provision expensive cloud server instances without permission. What type of control would best help him achieve this goal?`,
    choices: {
      A: `Resource policy`,
      B: `Security group`,
      C: `Multifactor authentication`,
      D: `Secure web gateway`
    },
    correct: "A",
    explanation: `Cloud providers offer resource policies that customers may use to limit the actions that users of their accounts may take. Implementing resource policies is a good security practice to limit the damage caused by an accidental command, a compromised account, or a malicious insider.`
  },
  {
    id: 187,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 10,
    question: `Ursula would like to link the networks in her on-premises datacenter with cloud VPCs in a secure manner. What technology would help her best achieve this goal?`,
    choices: {
      A: `Transit gateway`,
      B: `HSM`,
      C: `VPC endpoint`,
      D: `SWG`
    },
    correct: "A",
    explanation: `Cloud providers offer VPC endpoints that allow connections of VPCs to each other using the cloud provider’s secure network. Cloud transit gateways extend this model even further, allowing the direct interconnection of cloud VPCs with on-premises VLANs for hybrid cloud operations. Secure web gateways (SWGs) provide a layer of application security for cloud-dependent organizations. Hardware security modules (HSMs) are special-purpose computing devices that manage encryption keys and also perform cryptographic operations in a highly efficient manner.`
  },
  {
    id: 188,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 10,
    question: `What component of a virtualization platform is primarily responsible for preventing VM escape attacks?`,
    choices: {
      A: `Administrator`,
      B: `Guest operating system`,
      C: `Host operating system`,
      D: `Hypervisor`
    },
    correct: "D",
    explanation: `Virtual machine (VM) escape vulnerabilities are the most serious issue that can exist in a virtualized environment, particularly when a virtual host runs systems of differing security levels. In an escape attack, the attacker has access to a single virtual host and then manages to leverage that access to intrude upon the resources assigned to a different virtual machine. The hypervisor is supposed to prevent this type of access by restricting a virtual machine's access to only those resources assigned to that machine.`
  },
  {
    id: 189,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 10,
    question: `Ryan is selecting a new security control to meet his organization's objectives. He would like to use it in their multicloud environment and would like to minimize the administrative work required from his fellow technologists. What approach would best meet his needs?`,
    choices: {
      A: `Third-party control`,
      B: `Internally developed control`,
      C: `Cloud-native control`,
      D: `Any of the above`
    },
    correct: "A",
    explanation: `Controls offered by cloud service providers have the advantage of direct integration with the provider's offerings, often making them cost-effective and user-friendly. Third-party solutions are often more costly, but they bring the advantage of integrating with a variety of cloud providers, facilitating the management of multicloud environments.`
  },
  {
    id: 190,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 10,
    question: `Kira would like to implement a security control that can implement access restrictions across all of the SaaS solutions used by her organization. What control would best meet her needs?`,
    choices: {
      A: `Security group`,
      B: `Resource policy`,
      C: `CASB`,
      D: `SWG`
    },
    correct: "C",
    explanation: `Cloud access security brokers (CASBs) are designed specifically for this situation: enforcing security controls across cloud providers. A secure web gateway (SWG) may be able to achieve Kira's goal, but it would be more difficult to do so. Security groups and resource policies are controls used in IaaS environments.`
  },
  {
    id: 191,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 10,
    question: `Howard is assessing the legal risks to his organization based on its handling of PII. The organization is based in the United States, handles the data of customers located in Europe, and stores information in Japanese datacenters. What law would be most important to Howard during his assessment?`,
    choices: {
      A: `Japanese law`,
      B: `European Union law`,
      C: `U.S. law`,
      D: `All should have equal weight.`
    },
    correct: "D",
    explanation: `The principle of data sovereignty states that data is subject to the legal restrictions of any jurisdiction where it is collected, stored, or processed. In this case, Howard needs to assess the laws of all three jurisdictions.`
  },
  {
    id: 192,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 10,
    question: `Brenda's company provides a managed incident response service to its customers. What term best describes this type of service offering?`,
    choices: {
      A: `MSP`,
      B: `PaaS`,
      C: `SaaS`,
      D: `MSSP`
    },
    correct: "D",
    explanation: `Brenda's company is offering a technology service to customers on a managed basis, making it a managed service provider (MSP). However, this service is a security service, so the term managed security service provider (MSSP) is a better description of the situation.`
  },
  {
    id: 193,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 10,
    question: `Tony purchases virtual machines from Microsoft Azure exclusively for use by his organization. What model of cloud computing is this?`,
    choices: {
      A: `Public cloud`,
      B: `Private cloud`,
      C: `Hybrid cloud`,
      D: `Community cloud Chapter 11 Endpoint Security THE COMPTIA SECURITY+ EXAM OBJECTIVES COVERED IN THIS CHAPTER INCLUDE: Domain 1.0: General Security Concepts`
    },
    correct: "A",
    explanation: `This is an example of public cloud computing because Tony is using a public cloud provider, Microsoft Azure. The fact that Tony is limiting access to virtual machines to his own organization is not relevant because the determining factor for the cloud model is whether the underlying infrastructure is shared, not whether virtualized resources are shared.`
  },
  {
    id: 194,
    domain: "Security Operations",
    domainId: 4,
    chapter: 11,
    question: `Lin's hardware manufacturer has stopped selling the model of device that Lin's organization uses and has also stopped providing security or other updates. What phase of the hardware life cycle is the device in?`,
    choices: {
      A: `End-of-life`,
      B: `Legacy`,
      C: `End-of-sales`,
      D: `Senescence`
    },
    correct: "B",
    explanation: `Legacy hardware is unsupported and no longer sold. End-oflife typically means that the device is no longer being made but is likely to still have support for a period of time. End-of-sales means the device is no longer being sold, but again, may have support for some time. Senescence is not a term typically used in hardware life cycles.`
  },
  {
    id: 195,
    domain: "Security Operations",
    domainId: 4,
    chapter: 11,
    question: `Naomi has discovered the following TCP ports open on a system she wants to harden. Which ports are used for unsecure services and thus should be disabled to allow their secure equivalents to continue to be used?`,
    choices: {
      A: `21, 22, and 80`,
      B: `21 and 80`,
      C: `21, 23, and 80`,
      D: `22 and 443`
    },
    correct: "C",
    explanation: `The services listed are: 21—FTP 22—SSH 23—Telnet 80—HTTP 443—HTTPS Of these services, SSH (Port 22) and HTTPS (port 443) are secure options for remote shell access and HTTP. Although secure mode FTP (FTP/S) may run on TCP 21, there is not enough information to know for sure, and HTTPS can be used for secure file transfer if necessary. Thus, Naomi's best option is to disable all three likely unsecure protocols: FTP (port 21), Telnet (port 23), and HTTP (port 80).`
  },
  {
    id: 196,
    domain: "Security Operations",
    domainId: 4,
    chapter: 11,
    question: `Frank's organization is preparing to deploy a data loss prevention (DLP) system. What key process should they undertake before they deploy it?`,
    choices: {
      A: `Define data life cycles for all nonsensitive data.`,
      B: `Encrypt all sensitive data.`,
      C: `Implement and use a data classification scheme.`,
      D: `Tag all data by creator or owner.`
    },
    correct: "C",
    explanation: `Protecting data using a DLP requires data classification so that the DLP knows which data should be protected and what policies to apply to it. Defining data life cycles can help prevent data from being kept longer than it should be and improves data security by limiting the data that needs to be secured, but it isn't necessary as part of a DLP deployment. Encrypting all sensitive data may mean the DLP cannot recognize it and may not be appropriate for how it is used. Tagging all data with a creator or owner can be useful but is not required for a DLP rollout—instead, knowing the classification of the data is more important.`
  },
  {
    id: 197,
    domain: "Security Operations",
    domainId: 4,
    chapter: 11,
    question: `Oliver wants to store and manage secrets in his cloud service provider's environment. What type of solution should he look for as part of their offerings?`,
    choices: {
      A: `A TPM`,
      B: `A secure enclave`,
      C: `A KMS`,
      D: `A Titan M`
    },
    correct: "C",
    explanation: `Oliver should look for a key management system, or KMS, which will allow him to securely create, store, and manage keys in a cloud environment. TPMs, secure enclaves, and Google's Titan M are all local hardware solutions.`
  },
  {
    id: 198,
    domain: "Security Operations",
    domainId: 4,
    chapter: 11,
    question: `What is the key difference between EDR and XDR solutions?`,
    choices: {
      A: `The variety of malware it can detect`,
      B: `The number of threat feeds that are used`,
      C: `The breadth of the technology stack that is covered`,
      D: `The volume of logs that can be processed`
    },
    correct: "C",
    explanation: `XDR is similar to EDR but has a broader perspective covering not only endpoints but also cloud services, security platforms, and other components. Thus, the breadth of coverage of the technology stack is broader for XDR solutions.`
  },
  {
    id: 199,
    domain: "Security Operations",
    domainId: 4,
    chapter: 11,
    question: `Michelle wants to prevent unauthorized applications from being installed on a Windows system. What type of tool can she use to stop applications from being installed?`,
    choices: {
      A: `Antivirus`,
      B: `A GPO`,
      C: `An EDR`,
      D: `A HIPS`
    },
    correct: "B",
    explanation: `A Windows Group Policy Object (GPO) can be used to control whether users are able to install software. Antivirus will not stop this, nor will EDR or a HIPS.`
  },
  {
    id: 200,
    domain: "Security Operations",
    domainId: 4,
    chapter: 11,
    question: `What term is used to describe tools focused on detecting and responding to suspicious activities occurring on endpoints like desktops, laptops, and mobile devices?`,
    choices: {
      A: `EDR`,
      B: `IAM`,
      C: `FDE`,
      D: `ESC`
    },
    correct: "A",
    explanation: `Endpoint detection and response (EDR) systems provide monitoring, detection, and response capabilities for systems. EDR systems capture data from endpoints and send it to a central repository, where it can be analyzed for issues and indicators of compromise or used for incident response activities. IAM is identity and access management, FDE is full-disk encryption, and ESC is not a commonly used security acronym.`
  },
  {
    id: 201,
    domain: "Security Operations",
    domainId: 4,
    chapter: 11,
    question: `Fred has recently purchased a network router and is preparing to deploy it. Which of the following is a common step in deploying new routers?`,
    choices: {
      A: `Disabling unwanted services`,
      B: `Removing unnecessary software`,
      C: `Installing antivirus`,
      D: `Changing default passwords`
    },
    correct: "D",
    explanation: `Network devices as well as many other devices like printers come with default passwords set. Fred should change the default password as part of the process of setting up his new router.`
  },
  {
    id: 202,
    domain: "Security Operations",
    domainId: 4,
    chapter: 11,
    question: `Charlene wants to prevent attacks against her system that leverage flaws in the services that it provides while still keeping the services accessible. What hardening technique should she use?`,
    choices: {
      A: `A host-based firewall`,
      B: `A host-based IPS`,
      C: `Encryption`,
      D: `An EDR`
    },
    correct: "B",
    explanation: `A host-based intrusion prevention system (HIPS) can detect and prevent attacks against services while allowing the service to be accessible. A firewall can only block based on port, protocol, and IP; encryption won't prevent this; and an EDR is primarily targeted at malicious software and activity, not at network-based attacks on services.`
  },
  {
    id: 203,
    domain: "Security Operations",
    domainId: 4,
    chapter: 11,
    question: `Allan is preparing to harden his organization's network switches. Which of the following is not a common hardening technique for network devices?`,
    choices: {
      A: `Removing unnecessary software`,
      B: `Installing patches`,
      C: `Administrative VLANs`,
      D: `Changing default passwords`
    },
    correct: "A",
    explanation: `Unlike computers and mobile devices, switches and other network devices typically do not have additional software that can be removed. Installing patches, placing administrative interfaces on protected VLANs, and changing default passwords are all common hardening techniques for network devices like switches.`
  },
  {
    id: 204,
    domain: "Security Operations",
    domainId: 4,
    chapter: 11,
    question: `Helen's organization is planning to deploy IoT devices across their buildings as part of a HVAC system. Helen knows that the vendor for the IoT devices does not provide regular security updates to the device's web interfaces that are used to manage the devices. What security control should she recommend to help protect the devices on the network?`,
    choices: {
      A: `Install host-based firewalls.`,
      B: `Deploy the IoT devices to a protected VLAN.`,
      C: `Install host-based IPS.`,
      D: `Disable the web interfaces for the IoT devices.`
    },
    correct: "B",
    explanation: `Since the web interfaces are needed to manage the devices, Helen's best option is to place the IoT devices in a protected VLAN. IoT devices will not typically allow additional software to be installed, meaning that adding firewalls or a HIPS won't work.`
  },
  {
    id: 205,
    domain: "Security Operations",
    domainId: 4,
    chapter: 11,
    question: `What is the primary reason to remove unnecessary software during hardening efforts?`,
    choices: {
      A: `To reduce the attack footprint of the device`,
      B: `To reduce the number of patches that are installed`,
      C: `To reduce the number of firewall rules required for the device`,
      D: `To support incident response (IR) activities`
    },
    correct: "A",
    explanation: `Removing unnecessary software helps to reduce the attack surface of the devices. Not all software runs a service or opens a network port, but installed software provides additional opportunities for attackers to find vulnerabilities. That means that reducing firewall rules is not a primary purpose. While removing it may reduce the number of patches required by a device, that is not the primary driver. Finally, while incident response efforts may point to a need for further hardening to prevent future incidents, removing unnecessary software is not a typical step in support of IR activities.`
  },
  {
    id: 206,
    domain: "Security Operations",
    domainId: 4,
    chapter: 11,
    question: `Brian has deployed a system that monitors sensors and uses that data to manage the power distribution for the power company that he works for. Which of the following terms is commonly used to describe this type of control and monitoring solution?`,
    choices: {
      A: `SCADA`,
      B: `SIM`,
      C: `HVAC`,
      D: `AVAD`
    },
    correct: "A",
    explanation: `SCADA (supervisory control and data acquisition) is a system architecture that combines data acquisition and control devices with communications methods and interfaces to oversee complex industrial and manufacturing processes, just like those used in utilities. A SIM (subscriber identity module) is the small card used to identify cell phones; HVAC stands for heating, ventilation, and air-conditioning; and AVAD was made up for this question.`
  },
  {
    id: 207,
    domain: "Security Operations",
    domainId: 4,
    chapter: 11,
    question: `The organization that Lynn works for wants to deploy an embedded system that needs to process data as it comes in to the device without processing delays or other interruptions. What type of solution does Lynn's company need to deploy?`,
    choices: {
      A: `An MFP`,
      B: `A HIPS`,
      C: `An SoC`,
      D: `An RTOS`
    },
    correct: "D",
    explanation: `A real-time operating system (RTOS) is an OS that is designed to handle data as it is fed to the operating system, rather than delaying handling it as other processes and programs are run. Real-time operating systems are used when processes or procedures are sensitive to delays that might occur if responses do not happen immediately. An MFP is a multifunction printer, a HIPS is a host intrusion prevention system, and an SoC is a system on a chip—which is hardware, which might run an RTOS, but the option does not mention what type of OS the SoC is running.`
  },
  {
    id: 208,
    domain: "Security Operations",
    domainId: 4,
    chapter: 11,
    question: `Which of the following is not a common constraint of an embedded system?`,
    choices: {
      A: `Compute`,
      B: `Cost`,
      C: `Network`,
      D: `Authentication`
    },
    correct: "B",
    explanation: `Embedded systems are available at many price points. Understanding constraints that limited resources create for embedded systems helps security professionals identify appropriate security controls and options.`
  },
  {
    id: 209,
    domain: "Security Operations",
    domainId: 4,
    chapter: 11,
    question: `Jim configures a Windows machine with the built-in BitLocker full-disk encryption tool that uses a TPM chip. When is the machine least vulnerable to having data stolen from it?`,
    choices: {
      A: `When the machine is off`,
      B: `When the machine is booted and logged in but is locked`,
      C: `When the machine is booted and logged in but is unlocked`,
      D: `When the machine is booted and logged in but is asleep`
    },
    correct: "A",
    explanation: `Jim knows that once a BitLocker-enabled machine is booted, the drive is unlocked and could be accessed. He would be least worried if the machine were off and was stolen, or if the drive itself were stolen from the machine, since the data would not be accessible in either of those cases.`
  },
  {
    id: 210,
    domain: "Security Operations",
    domainId: 4,
    chapter: 11,
    question: `Olivia wants to install a host-based security package that can detect attacks against the system coming from the network, but she does not want to take the risk of blocking the attacks since she fears that she might inadvertently block legitimate traffic. What type of tool could she install that will meet this requirement?`,
    choices: {
      A: `A host firewall`,
      B: `A host-based intrusion detection system`,
      C: `A host-based intrusion prevention system`,
      D: `A data loss prevention tool`
    },
    correct: "B",
    explanation: `Olivia should install a host-based intrusion detection system (HIDS). An HIDS can detect and report on potential attacks but does not have the ability to stop them. A host-based intrusion prevention system (HIPS) can be configured to report only on attacks, but it does have the built-in ability to be set up to block them. Firewalls can block known ports, protocols, or applications, but they do not detect attacks—although advanced modern firewalls blur the line between firewalls and other defensive tools. Finally, a data loss prevention (DLP) tool focuses on preventing data exposures, not on stopping network attacks.`
  },
  {
    id: 211,
    domain: "Security Operations",
    domainId: 4,
    chapter: 11,
    question: `Anita wants to enforce security settings across her organization's Windows Active Directory domain. What tool can she use to do this?`,
    choices: {
      A: `EDR`,
      B: `Group Policy`,
      C: `XDR`,
      D: `SELinux`
    },
    correct: "B",
    explanation: `Group Policy deployed via Active Directory will allow Anita to set security settings across her domain managed systems. EDR and XDR are useful for detecting and responding to malware and malicious actors but not for deploying security configurations. SELinux is a Linux kernel-based security module that provides additional security capabilities and options on top of existing Linux distributions.`
  },
  {
    id: 212,
    domain: "Security Operations",
    domainId: 4,
    chapter: 11,
    question: `Chris wants systems that connect to his network to report their boot processes to a server where they can be validated before being permitted to join the network. What technology should he use to do this on the workstations?`,
    choices: {
      A: `UEFI/Trusted boot`,
      B: `BIOS/Trusted boot`,
      C: `UEFI/Measured boot`,
      D: `BIOS/Measured boot`
    },
    correct: "C",
    explanation: `Chris knows that BIOS-based systems do not support either of these modes, and that trusted boot validates every component before loading it, whereas measured boot logs the boot process and sends it to a server that can validate it before permitting the system to connect to the network or perform other actions.`
  },
  {
    id: 213,
    domain: "Security Operations",
    domainId: 4,
    chapter: 11,
    question: `Elaine wants to securely erase the contents of a tape used for backups in her organization's tape library. What is the fastest secure erase method available to her that will allow the tape to be reused?`,
    choices: {
      A: `Using a degausser`,
      B: `Wiping the tape by writing a random pattern of 1s and 0s to it`,
      C: `Incinerating the tape`,
      D: `Wiping the tape by writing all 1s or all 0s to it Chapter 12 Network Security THE COMPTIA SECURITY+ EXAM OBJECTIVES COVERED IN THIS CHAPTER INCLUDE: Domain 1.0: General Security Concepts`
    },
    correct: "A",
    explanation: `A degausser is a quick and effective way to erase a tape before it is reused. Wiping a tape by writing 1s, 0s, or a pattern of 1s and 0s to it will typically be a slow operation and is not a common method of destroying data on a tape. Incinerating the tape won't allow it to be reused!`
  },
  {
    id: 214,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 12,
    question: `A system that Tony manages sends an SNMP trap. What type of information should Tony expect to receive?`,
    choices: {
      A: `Notification of a vulnerability`,
      B: `Notification of a patch being installed`,
      C: `Notification of an issue`,
      D: `Notification of user being created`
    },
    correct: "C",
    explanation: `SNMP traps can be configured to provide additional information, but typical SNMP traps provide information about issues such as links going down, authentication failures, and reboots.`
  },
  {
    id: 215,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 12,
    question: `Ben wants to observe malicious behavior targeted at multiple systems on a network. He sets up a variety of systems and instruments to allow him to capture copies of attack tools and to document all the attacks that are conducted. What has he set up?`,
    choices: {
      A: `A honeypot`,
      B: `A beartrap`,
      C: `A honeynet`,
      D: `A tarpit`
    },
    correct: "C",
    explanation: `A honeynet is a group of systems that intentionally exposes vulnerabilities so that defenders can observe attacker behaviors, techniques, and tools to help them design better defenses.`
  },
  {
    id: 216,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 12,
    question: `Valerie wants to replace the telnet access that she found still in use in her organization. Which protocol should she use to replace it, and what port will it run on?`,
    choices: {
      A: `SFTP, port 21`,
      B: `SSH, port 22`,
      C: `HTTPS, port 443`,
      D: `RDP, port 3389`
    },
    correct: "B",
    explanation: `Telnet provides remote command-line access but is not secure. SSH is the most common alternative to telnet, and it operates on port 22.`
  },
  {
    id: 217,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 12,
    question: `Jill wants to use DNS filtering to prevent users in her organization from visiting potentially malicious sites. What type of service should she use to obtain this information?`,
    choices: {
      A: `An OSINT service`,
      B: `A STP feed`,
      C: `An ACL monitoring service`,
      D: `A reputation service`
    },
    correct: "D",
    explanation: `DNS reputation services can provide Jill with an automated feed of malicious sites that she can include in her DNS filter. OSINT (open source intelligence) is gathered without scans but typically won't provide DNS block lists. STP (Spanning Tree Protocol) prevents loops in networks and is not relevant to DNS filtering, and an access control monitoring service will not be either.`
  },
  {
    id: 218,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 12,
    question: `Chuck wants to provide access to a protected network from a less trusted network. What type of solution is commonly implemented to provide a secure, monitored access method?`,
    choices: {
      A: `A proxy server`,
      B: `A jump server`,
      C: `A VLAN`,
      D: `An air gap`
    },
    correct: "B",
    explanation: `Jump servers are used to provide secure, monitored access to a protected network. Users log in to the jump server, which then has access to the network. Proxies are used to filter or manage traffic and might be used in this scenario, but jump servers are the preferred answer for most organizations and uses. A VLAN (virtual LAN) is used to logically separate network segments. An air gap is a physical disconnection between networks or devices.`
  },
  {
    id: 219,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 12,
    question: `Kathleen wants to deploy a firewall that can handle large amounts of network traffic while performing advanced firewalling tasks. What type of device should she select?`,
    choices: {
      A: `A NGFW`,
      B: `A WAF`,
      C: `A UTM`,
      D: `A SD-FW`
    },
    correct: "A",
    explanation: `A next-generation firewall (NGFW) device is typically designed and built to be more capable at high speeds and throughput than a universal threat management device. Since UTM devices provide such a wide array of services that consume CPU and memory resources, this performance gap can also sometimes be due to the broad set of services that a UTM device provides. A WAF (web application firewall) is specialized in web traffic, and SD-FW was made up for this question.`
  },
  {
    id: 220,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 12,
    question: `Mark wants to prevent DNS poisoning attacks. What technology should he implement to counter them most effectively?`,
    choices: {
      A: `DNSSEC`,
      B: `SDNS`,
      C: `SASE`,
      D: `SD-WAN`
    },
    correct: "A",
    explanation: `DNSSEC validates both the origin of DNS information and ensures that DNS responses have not been modified, making it the best option to help prevent DNS poisoning attacks. SDNS was made up for this question. SASE is used to secure networks in complex multilocation environments, and SD-WAN allows for dynamic wide area networks defined by software, but neither provides this type of DNS security.`
  },
  {
    id: 221,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 12,
    question: `Casey wants to replace her organization's MPLS-based external connectivity using commodity technologies. What technology should she select to help her manage this?`,
    choices: {
      A: `IPSec VPN`,
      B: `SASE`,
      C: `SD-WAN`,
      D: `TLS VPN`
    },
    correct: "C",
    explanation: `SD-WAN (software-defined wide area network) is commonly used to replace MPLS (Multiprotocol Label Switching) networks, which are typically higher cost than other connectivity options. IPSec and TLS-based VPNs are used to connect through untrusted networks, but they do not provide the functionality required. SASE uses SD-WAN and other technologies to ensure secure connectivity in complex network infrastructures with endpoints in many locations.`
  },
  {
    id: 222,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 12,
    question: `What protocol is used to securely wrap many otherwise insecure protocols?`,
    choices: {
      A: `ISAKMP`,
      B: `SSL`,
      C: `IKE`,
      D: `TLS`
    },
    correct: "D",
    explanation: `Transport Layer Security (TLS) is commonly used to wrap (protect) otherwise insecure protocols. In fact, many of the secure protocols simply add TLS to protect them. ISAKMP and IKE are both used for IPSec and can be used to wrap insecure protocols, but they aren't used alone. SSL is no longer used; TLS has almost entirely replaced it, although SSL is still often casually referred to as TLS.`
  },
  {
    id: 223,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 12,
    question: `Valentine wants to deploy a secure version of DHCP for her organization. What should she implement?`,
    choices: {
      A: `S-DHCP`,
      B: `DHCP over TLS`,
      C: `DHCPS`,
      D: `There is no secured version of DHCP.`
    },
    correct: "D",
    explanation: `While many protocols have a secure version, DHCP does not have a secure option, and protection must be handled by using detection and response mechanisms, rather than an encrypted protocol.`
  },
  {
    id: 224,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 12,
    question: `What component of a zero-trust architecture forwards requests from subjects and acts on whether subjects are allowed to access resources?`,
    choices: {
      A: `Policy administrators`,
      B: `Policy enforcement points`,
      C: `Policy engines`,
      D: `Policy gateways`
    },
    correct: "B",
    explanation: `Policy enforcement points communicate with policy administrators to forward requests from subjects and to receive instructions from them about connections to allow or end. Policy administrators are components that establish or remove the communication path between subjects and resources, including creating session-specific authentication tokens or credentials as needed. Policy engines make policy decisions based on both rules and external systems. Policy gateways are not reference components for zero-trust designs.`
  },
  {
    id: 225,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 12,
    question: `Gary wants to use secure protocols for email access for his end users. Which of the following groups of protocols should he implement to accomplish this task?`,
    choices: {
      A: `DKIM, DMARC, HTTPS`,
      B: `SPF, POPS, IMAPS`,
      C: `POPS, IMAPS, HTTPS`,
      D: `DMARC, DKIM, SPF`
    },
    correct: "C",
    explanation: `End users may use secure POP (POPS), secure IMAP (IMAPS), and secure HTTP (HTTPS) to retrieve email. SPF, DKIM, and DMARC are used to identify and validate email servers, not to access email by end users.`
  },
  {
    id: 226,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 12,
    question: `Gary wants to prevent his organization's most sensitive data from being accessed by network-based attackers at any cost. What solution should he implement to ensure this?`,
    choices: {
      A: `An air gap`,
      B: `Firewall rules`,
      C: `An IPS`,
      D: `IPSec`
    },
    correct: "A",
    explanation: `Physical isolation like an air gap is used when the additional work to manually transfer files is an acceptable trade-off against the potential for a security event caused by potential networkbased attackers. Firewall rules, an IPS, or the use of IPSec to protect traffic will not sufficiently address this issue if any services remain accessible on the system.`
  },
  {
    id: 227,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 12,
    question: `Madhuri is designing a load-balancing configuration for her company and wants to keep a single node from being overloaded. What type of design will meet this need?`,
    choices: {
      A: `A daisy chain`,
      B: `Active/active`,
      C: `Duck-duck-goose`,
      D: `Active/passive`
    },
    correct: "B",
    explanation: `Active/active designs spread traffic among active nodes, helping ensure that a single node will not be overwhelmed. Active/passive designs are useful for disaster recovery and business continuity, but they do not directly address heavy load on a single node. There are many load-balancing schemes, but daisy chains and duck-duck-goose are not among them.`
  },
  {
    id: 228,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 12,
    question: `What type of NAC will provide Isaac with the greatest amount of information about the systems that are connecting while also giving him the most amount of control of systems and their potential impact on other systems that are connected to the network?`,
    choices: {
      A: `Agent-based, preadmission NAC`,
      B: `Agentless, postadmission NAC`,
      C: `Agent-based NAC, postadmission NAC`,
      D: `Agentless, postadmission NAC`
    },
    correct: "A",
    explanation: `Agent-based, preadmission NAC will provide Isaac with the greatest amount of information about a machine and the most control about what connects to the network and what can impact other systems. Since systems will not be connected to the network, even to a quarantine or preadmission zone, until they have been verified, Isaac will have greater control.`
  },
  {
    id: 229,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 12,
    question: `Danielle's organization has implemented a tool that combines SDWAN, a CASB, and Zero Trust, among other security functions, to provide security regardless of where her organization's devices are. What type of solution has her organization implemented?`,
    choices: {
      A: `A UTM`,
      B: `An NGFW`,
      C: `IPSec`,
      D: `SASE`
    },
    correct: "D",
    explanation: `SASE (Secure Access Service Edge) combines network security and device security by leveraging SD-WAN with security tools like Zero Trust, firewalls, and cloud access security brokers (CASBs). Both UTM and NGFW are advanced firewalls but do not provide this full functionality, and IPSec is a protocol used to provide encryption and authentication for network traffic.`
  },
  {
    id: 230,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 12,
    question: `Wayne is concerned that an on-path attack has been used against computers he is responsible for. What artifact is he most likely to find associated with this attack?`,
    choices: {
      A: `A compromised router`,
      B: `A browser plug-in`,
      C: `A compromised server`,
      D: `A modified hosts file`
    },
    correct: "B",
    explanation: `Browser on-path attacks take advantage of malicious browser plug-ins or proxies to modify traffic at the browser level. They do not involve compromised routers or servers, and a modified hosts file is more likely to be involved in an on-path attack.`
  },
  {
    id: 231,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 12,
    question: `Elle has scanned her organization from an external IP address and has identified all of the services that are visible from the public Internet. What does this enable her to describe?`,
    choices: {
      A: `If the organization is a fail-open organization`,
      B: `Her organization's OSINT report`,
      C: `Her organization's attack surface`,
      D: `If the organization is a fail-closed organization`
    },
    correct: "C",
    explanation: `Understanding what services your organization offers to the outside world is an important step in describing the organization's attack surface. Fail open and fail closed describe what happens when devices or systems fail, not vulnerability and service availability information. OSINT is a passive process and scanning is not a passive activity.`
  },
  {
    id: 232,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 12,
    question: `What technique is used to ensure that DNSSEC-protected DNS information is trustworthy?`,
    choices: {
      A: `It is digitally signed.`,
      B: `It is sent via TLS.`,
      C: `It is encrypted using AES256.`,
      D: `It is sent via an IPSec VPN.`
    },
    correct: "A",
    explanation: `DNSSEC does not encrypt data but does rely on digital signatures to ensure that DNS information has not been modified and that it is coming from a server that the domain owner trusts. DNSSEC does not protect confidentiality, which is a key thing to remember when discussing it as a security option. TLS, an IPSec VPN, or encryption via AES are all potential solutions to protect the confidentiality of network data.`
  },
  {
    id: 233,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 12,
    question: `Fred wants to ensure that the administrative interfaces for the switches and routers are protected so that they cannot be accessed by attackers. Which of the following solutions should he recommend as part of his organization's network design?`,
    choices: {
      A: `NAC`,
      B: `Trunking`,
      C: `Out-of-band management`,
      D: `Port security Chapter 13 Wireless and Mobile Security THE COMPTIA SECURITY+ EXAM OBJECTIVES COVERED IN THIS CHAPTER INCLUDE: Domain 2.0: Threats, Vulnerabilities, and Mitigations`
    },
    correct: "C",
    explanation: `Out-of-band management places the administrative interface of a switch, router, or other device on a separate network or requires direct connectivity to the device to access and manage it. This ensures that an attacker who has access to the network cannot make changes to the network devices. NAC and port security help protect the network itself, whereas trunking is used to combine multiple interfaces, VLANs, or ports together.`
  },
  {
    id: 234,
    domain: "Security Operations",
    domainId: 4,
    chapter: 13,
    question: `Alyssa wants to harden iOS devices her organization uses. What set of guidelines can she follow to align to common industry security practices?`,
    choices: {
      A: `OWASP`,
      B: `CIS benchmarks`,
      C: `NIST 800-103`,
      D: `NIST 800-111`
    },
    correct: "B",
    explanation: `The Center for Internet Security (CIS) provides hardening guidelines known as CIS benchmarks that Alyssa can use as a guide to secure her organization's iOS devices. OWASP does not provide these, and NIST provides general guidance, not OS- or device-specific configuration guides.`
  },
  {
    id: 235,
    domain: "Security Operations",
    domainId: 4,
    chapter: 13,
    question: `Fred's company issues devices in a BYOD model. That means that Fred wants to ensure that corporate data and applications are kept separate from personal applications on the devices. What technology is best suited to meet this need?`,
    choices: {
      A: `Biometrics`,
      B: `Full-device encryption`,
      C: `Context-aware authentication`,
      D: `Containerization`
    },
    correct: "D",
    explanation: `Using a containerization system can allow Fred's users to run corporate applications and to use corporate data in a secure environment that cannot be accessed by other applications outside of the container on the device. Containerization schemes for mobile devices typically use encryption and other isolation techniques to ensure that data and applications do not cross over. Biometrics and context-aware authentication are useful for ensuring that the right user is using a device but don't provide this separation. Full-device encryption helps reduce the risk of theft or loss of a device resulting in a data breach.`
  },
  {
    id: 236,
    domain: "Security Operations",
    domainId: 4,
    chapter: 13,
    question: `Michelle has deployed iPads to her staff who work her company's factory floor. She wants to ensure that the devices work only in the factory and that if they are taken home they cannot access business data or services. What type of solution is best suited to her needs?`,
    choices: {
      A: `Context-aware authentication`,
      B: `Geofencing`,
      C: `Geolocation`,
      D: `Unified endpoint management (UEM)`
    },
    correct: "B",
    explanation: `Geofencing will allow Michelle to determine what locations the device should work in. The device will then use geolocation to determine when it has moved and where it is. In this case, the correct answer is therefore geofencing—simply having geolocation capabilities would not provide the solution she needs. Contextaware authentication can help by preventing users from logging in when they aren't in the correct location, but a device that was logged in may not require reauthentication. Finally, UEM, much like mobile device management, can be used to enforce these policies, but the most correct answer is geofencing.`
  },
  {
    id: 237,
    domain: "Security Operations",
    domainId: 4,
    chapter: 13,
    question: `Ivan is running an enterprise wireless network and his heatmap shows that two access points are likely conflicting with each other. What will the enterprise access controller most likely do to handle this conflict?`,
    choices: {
      A: `Increase the broadcast power of one of the access points.`,
      B: `Change the SSID for one of the access points.`,
      C: `Disable one of the access points.`,
      D: `Decrease the broadcast power of the access points.`
    },
    correct: "D",
    explanation: `When access points conflict, enterprise wireless network management tools will typically decrease the power for both access points until the issue is resolved. Simply increasing power will cause more conflicts, changing the SSID would not serve typical enterprise models that use a single SSID to allow roaming, and disabling an access point may leave coverage gaps.`
  },
  {
    id: 238,
    domain: "Security Operations",
    domainId: 4,
    chapter: 13,
    question: `Chris wants to use geolocation technology to find where phones issued by his organization are located. Which of the following is not commonly used as part of geolocation techniques?`,
    choices: {
      A: `Bluetooth`,
      B: `GPS`,
      C: `NFC`,
      D: `Wi-Fi`
    },
    correct: "C",
    explanation: `Nearfield communication (NFC) is not typically used for geolocation because of its extremely short range. Geolocation services may use GPS, Wi-Fi, and Bluetooth to identify areas, access points, Bluetooth beacons, and other items that help with location services.`
  },
  {
    id: 239,
    domain: "Security Operations",
    domainId: 4,
    chapter: 13,
    question: `Daniel knows that WPA3 has added a method to ensure that brute-force attacks against weak preshared keys are less likely to succeed. What is this technology called?`,
    choices: {
      A: `SAE`,
      B: `CCMP`,
      C: `PSK`,
      D: `WPS`
    },
    correct: "A",
    explanation: `Simultaneous Authentication of Equals (SAE) is used to establish a secure peering environment and to protect session traffic. Since the process requires additional cryptographic steps, it causes brute-force attacks to be much slower and thus less likely to succeed while also providing more security than WPA2's preshared key (PSK) mode. WPS is Wi-Fi Protected Setup, a quick setup capability; CCMP is the encryption mode used for WPA2 networks. WPA3 moves to 128-bit encryption for Personal mode and can support 192-bit encryption in Enterprise mode.`
  },
  {
    id: 240,
    domain: "Security Operations",
    domainId: 4,
    chapter: 13,
    question: `Isabelle needs to select the EAP protocol that she will use with her wireless network. She wants to use a secure protocol that does not require client devices to have a certificate, but she does want to require mutual authentication. Which EAP protocol should she use?`,
    choices: {
      A: `EAP-FAST`,
      B: `EAP-TTLS`,
      C: `PEAP`,
      D: `EAP-TLS`
    },
    correct: "C",
    explanation: `Isabelle should select PEAP, which doesn't require client certificates but does provide TLS support. EAP-TTLS provides similar functionality but requires additional software to be installed on some devices. EAP-FAST focuses on quick reauthentication, and EAP-TLS requires certificates to be deployed to the endpoint devices.`
  },
  {
    id: 241,
    domain: "Security Operations",
    domainId: 4,
    chapter: 13,
    question: `Theresa has implemented a technology that keeps data for personal use separate from data for her company on mobile devices used by members of her staff. What is this concept called?`,
    choices: {
      A: `Storage segmentation`,
      B: `Multifactor storage`,
      C: `Full-device encryption`,
      D: `Geofencing`
    },
    correct: "A",
    explanation: `Storage segmentation is the concept of splitting storage between functions or usage to ensure that information that fits a specific context is not shared or used by applications or services outside of that context. Full-device encryption encrypts the entire device, geofencing is used to determine geographic areas where actions or events may be taken by software, and multifactor storage was made up for this question.`
  },
  {
    id: 242,
    domain: "Security Operations",
    domainId: 4,
    chapter: 13,
    question: `A member of Jake's team tells him that he sideloaded applications on his Android-based company owned phone. What has occurred?`,
    choices: {
      A: `Malware was installed on the phone.`,
      B: `The phone was rooted to allow administrative access.`,
      C: `Applications were installed by copying them instead of via an app store.`,
      D: `The organization's MDM was disabled to avoid its management controls.`
    },
    correct: "C",
    explanation: `Sideloading is the process of copying files between two devices like a phone and a laptop, desktop, or storage device. Jake's team member has loaded an application without using the Android application store. Sideloading does not necessarily imply malware, rooting, or disabling an MDM, although an MDM may be configured to prevent sideloading.`
  },
  {
    id: 243,
    domain: "Security Operations",
    domainId: 4,
    chapter: 13,
    question: `Madhuri disables SMS, MMS, and RCS on phones in her organization. What has she prevented from being sent?`,
    choices: {
      A: `Phone calls and texts`,
      B: `Text messages and multimedia messages`,
      C: `Text messages and firmware updates`,
      D: `Phone calls and multimedia messages`
    },
    correct: "B",
    explanation: `SMS (Short Message Service) is used to send text messages, and MMS and RCS provide additional multimedia features. Neither provides phone calls or firmware updates.`
  },
  {
    id: 244,
    domain: "Security Operations",
    domainId: 4,
    chapter: 13,
    question: `What is the most frequent concern that leads to GPS tagging being disabled by some companies via an MDM tool?`,
    choices: {
      A: `Chain of custody`,
      B: `The ability to support geofencing`,
      C: `Privacy`,
      D: `Context-aware authentication`
    },
    correct: "C",
    explanation: `Geotagging places a location stamp in documents and pictures that can include position, time, and date. This can be a serious privacy issue when pictures or other information are posted, and many individuals and organizations disable GPS tagging. Organizations may want to enforce GPS tagging for some work products, meaning that the ability to enable or disable it in an MDM tool is quite useful. Chain of custody is a forensic concept, the ability to support geofencing does not require GPS tagging, and context-aware authentication may need geolocation but not GPS tagging.`
  },
  {
    id: 245,
    domain: "Security Operations",
    domainId: 4,
    chapter: 13,
    question: `Bart wants to use a cellular hotspot to provide Internet connectivity via Wi-Fi. What type of network has he set up for his laptop and phone to connect to?`,
    choices: {
      A: `Ad-hoc`,
      B: `NFC`,
      C: `Point-to-point`,
      D: `RFID`
    },
    correct: "A",
    explanation: `This is an ad-hoc network set up to allow devices to connect to the access point provided by the cellular modem. NFC is a short range, low bandwidth connection method used for payments and similar purposes. Point-to-point connections are used to bridge two networks together or for single connections, this is a multidevice network. RFID uses tags and readers.`
  },
  {
    id: 246,
    domain: "Security Operations",
    domainId: 4,
    chapter: 13,
    question: `Susan wants to ensure that the threat of a lost phone creating a data breach is minimized. What two technologies should she implement to do this?`,
    choices: {
      A: `Wi-Fi and NFC`,
      B: `Remote wipe and FDE`,
      C: `Containerization and NFC`,
      D: `Geofencing and remote wipe`
    },
    correct: "B",
    explanation: `Susan's best options are to use a combination of full-device encryption (FDE) and remote wipe. If a device is stolen and continues to be connected to the cellular network, or reconnects at any point, the remote wipe will occur. If it does not, or if attackers attempt to get data from the device and it is locked, the encryption will significantly decrease the likelihood of the data being accessed. Of course, cracking a passcode, PIN, or password remains a potential threat. NFC and Wi-Fi are wireless connection methods and have no influence on data breaches due to loss of a device. Geofencing may be useful for some specific organizations that want to take action if devices leave designated areas, but it is not a general solution. Containerization may shield data, but use of containers does not immediately imply encryption or other protection of the data but simply that the environments are separated.`
  },
  {
    id: 247,
    domain: "Security Operations",
    domainId: 4,
    chapter: 13,
    question: `What are the two most commonly deployed biometric authentication solutions for mobile devices?`,
    choices: {
      A: `Voice recognition and face recognition`,
      B: `Fingerprint recognition and gait recognition`,
      C: `Face recognition and fingerprint recognition`,
      D: `Voice recognition and fingerprint recognition`
    },
    correct: "C",
    explanation: `Current mobile device implementations have focused heavily on facial recognition via services like Apple's Face ID and fingerprint recognition like Android's fingerprint scanning and Apple's Touch ID. Gait recognition is not a widely deployed biometric technology and would be difficult for most mobile device users to use. Voice recognition as a biometric authenticator has not been broadly deployed for mobile devices, whereas voiceactivated services are in wide usage.`
  },
  {
    id: 248,
    domain: "Security Operations",
    domainId: 4,
    chapter: 13,
    question: `Alaina wants to modify operating system settings and features on her iOS device and to install applications that are not permitted or available via the Apple App Store. What would she need to do to accomplish this?`,
    choices: {
      A: `Deploy an MDM tool to the phone.`,
      B: `Jailbreak the phone.`,
      C: `Keymod the phone.`,
      D: `Install a third-party operating system.`
    },
    correct: "B",
    explanation: `Jailbreaking will allow Alaina to obtain administrator access to the underlying phone operating system and to modify operating system settings and options as well as to install applications that are not available via the App Store. Deploying an MDM does not permit all of this, keymodding is not a term used in this context, and installing a third-party OS would allow access but would change the OS.`
  },
  {
    id: 249,
    domain: "Security Operations",
    domainId: 4,
    chapter: 13,
    question: `Jerome wants to allow guests to use his organization's wireless network, but he does not want to provide a preshared key. What solution can he deploy to gather information such as email addresses or other contact information before allowing users to access his open network?`,
    choices: {
      A: `WPS capture mode`,
      B: `Kerberos`,
      C: `WPA2`,
      D: `A captive portal`
    },
    correct: "D",
    explanation: `Jerome should deploy a captive portal that requires users to provide information before being moved to a network segment that allows Internet access. WPS capture mode was made up for this question, Kerberos is used for enterprise authentication, and WPA2 supports open, enterprise, or PSK modes but does not provide the capability Jerome needs by itself.`
  },
  {
    id: 250,
    domain: "Security Operations",
    domainId: 4,
    chapter: 13,
    question: `Amanda wants to create a view of her buildings that shows Wi-Fi signal strength and coverage. What is this type of view called?`,
    choices: {
      A: `A channel overlay`,
      B: `A PSK`,
      C: `A heatmap`,
      D: `A SSID chart`
    },
    correct: "C",
    explanation: `Amanda wants to create a heatmap, which shows the signal strength and coverage for each access point in a facility. Heatmaps can also be used to physically locate an access point by finding the approximate center of the signal. This can be useful to locate rogue access points and other unexpected or undesired wireless devices. PSK stands for preshared key, a channel overlay is not a commonly used term (although channel overlap is a concern for channels that share bandwidth), and SSID chart was made up for this question.`
  },
  {
    id: 251,
    domain: "Security Operations",
    domainId: 4,
    chapter: 13,
    question: `Megan wants to prevent access to phones that are misplaced by members of her organization. Which of the following MDM control options is least likely to help her protect phones that are misplaced?`,
    choices: {
      A: `PINs`,
      B: `Device encryption`,
      C: `Remote wipe`,
      D: `Application management`
    },
    correct: "D",
    explanation: `Managing applications won't help protect a misplaced phone from being accessed. PINs, device encryption, and remote wipe will all help keep her organization's data and devices secure.`
  },
  {
    id: 252,
    domain: "Security Operations",
    domainId: 4,
    chapter: 13,
    question: `Gurvinder wants to select a mobile device deployment method that provides employees with devices that they can use as though they're personally owned to maximize flexibility and ease of use. Which deployment model should he select?`,
    choices: {
      A: `CYOD`,
      B: `COPE`,
      C: `BYOD`,
      D: `MOTD`
    },
    correct: "B",
    explanation: `Gurvinder's requirements fit the COPE (corporate-owned, personally enabled) mobile device deployment model. Choose your own device (CYOD) allows users to choose a device but then centrally manages it. BYOD allows users to use their own device, rather than have the company provide it, and MOTD means message of the day, and is not a mobile device deployment scheme.`
  },
  {
    id: 253,
    domain: "Security Operations",
    domainId: 4,
    chapter: 13,
    question: `Octavia discovers that the contact list from her phone has been acquired via a wireless attack. Which of the following is the most likely culprit?`,
    choices: {
      A: `Bluejacking`,
      B: `An evil maid`,
      C: `Bluesnarfing`,
      D: `An evil twin Chapter 14 Monitoring and Incident Response THE COMPTIA SECURITY+ EXAM OBJECTIVES COVERED IN THIS CHAPTER INCLUDE: Domain 2.0: Threats, Vulnerabilities, and Mitigations`
    },
    correct: "C",
    explanation: `Bluesnarfing is the theft of information from a Bluetooth enabled device. If Octavia left Bluetooth on and had not properly secured her device, then an attacker may have been able to access her contact list and download its contents. A bluejacking attack occurs when unwanted messages are sent to a device via Bluetooth. Evil twins are malicious access points configured to appear to be legitimate access points, and an evil maid attack is an in-person attack where an attacker takes advantage of physical access to hardware to acquire information or to insert malicious software on a device.`
  },
  {
    id: 254,
    domain: "Security Operations",
    domainId: 4,
    chapter: 14,
    question: `The following figure shows the Security+ incident response cycle. What item is missing?`,
    choices: {
      A: `Planning`,
      B: `Reporting`,
      C: `Monitoring`,
      D: `Preparation`
    },
    correct: "D",
    explanation: `The first item in the incident response cycle used by the Security+ exam is preparation.`
  },
  {
    id: 255,
    domain: "Security Operations",
    domainId: 4,
    chapter: 14,
    question: `Michael analyzes network traffic, including packet content, as part of his incident response process. What tool should he use?`,
    choices: {
      A: `Syslog`,
      B: `NetFlow`,
      C: `Packet capture`,
      D: `A SIEM`
    },
    correct: "C",
    explanation: `Packet capture will allow Michael to see all the content of packets that are captured to analyze them. NetFlow simply shows source, destination, protocol, and traffic volume. Syslog and a SIEM don't capture packet content, and instead focus on logs and events.`
  },
  {
    id: 256,
    domain: "Security Operations",
    domainId: 4,
    chapter: 14,
    question: `Susan wants to create a dashboard that shows her aggregated log events related to logins from different geographic regions. Her goal is to identify impossible travel scenarios. Which of the following solutions should she select to accomplish that goal?`,
    choices: {
      A: `IPS`,
      B: `OS logs`,
      C: `SIEM`,
      D: `Vulnerability scan data`
    },
    correct: "C",
    explanation: `A SIEM with correlation rules for geographic IP information as well as user IDs and authentication events will accomplish Susan's goals. An IPS may detect attacks, but it isn't well suited to detecting impossible travel. OS logs would need to be aggregated, and vulnerability scan data won't show this at all.`
  },
  {
    id: 257,
    domain: "Security Operations",
    domainId: 4,
    chapter: 14,
    question: `Selah wants to ensure that users in her organization can only install applications that are evaluated and approved by the organization's security team. What should she use?`,
    choices: {
      A: `A SIEM`,
      B: `An application deny list`,
      C: `An application allow list`,
      D: `sFlow`
    },
    correct: "C",
    explanation: `Application allow lists are used to ensure that only allowed applications are installable on systems. A deny list specifically identifies programs that aren't allowed. A SIEM doesn't provide application management capabilities, and sFlow is a flow tool like NetFlow.`
  },
  {
    id: 258,
    domain: "Security Operations",
    domainId: 4,
    chapter: 14,
    question: `What is the primary concern with sFlow in a large, busy network?`,
    choices: {
      A: `It may allow buffer overflow attacks against the collector host.`,
      B: `sFlow is not designed for large or complex networks.`,
      C: `sFlow puts extreme load on the flow collector host.`,
      D: `sFlow samples only network traffic, meaning that some detail will be lost.`
    },
    correct: "D",
    explanation: `The primary concern for analysts who deploy sFlow is often that it samples only data, meaning some accuracy and nuance can be lost in the collection of flow data. Sampling, as well as the implementation methods for sFlow, means that it scales well to handle complex and busy networks. Although vulnerabilities may exist in sFlow collectors, a buffer overflow is not a primary concern for them.`
  },
  {
    id: 259,
    domain: "Security Operations",
    domainId: 4,
    chapter: 14,
    question: `Mark unplugs the network connection from a system that is part of an incident and places tape over its Ethernet jack with a sign that says, “Do not reconnect without approval from IR team.” How is this method best described?`,
    choices: {
      A: `Containment`,
      B: `Isolation`,
      C: `Segmentation`,
      D: `Zoning`
    },
    correct: "B",
    explanation: `Mark has isolated the system by removing it from the network and ensuring that it cannot communicate with other systems. Containment would limit the impact of the incident and might leave the system connected but with restricted or protected access. Segmentation moves systems or groups of systems into zones that have similar purposes, data classification, or other restrictions on them.`
  },
  {
    id: 260,
    domain: "Security Operations",
    domainId: 4,
    chapter: 14,
    question: `The company that Ben works for wants to test its incident response plan. Ben gathers the incident response team in a room and walks through a scenario to validate the organization's processes and procedures. What type of event has Ben hosted?`,
    choices: {
      A: `A checklist exercise`,
      B: `A simulation`,
      C: `A tabletop exercise`,
      D: `A fail-over exercise`
    },
    correct: "C",
    explanation: `Ben's organization is conducting a tabletop exercise. Tabletop exercises are conducted with more flexibility—team members are given a scenario and asked how they would respond and what they would do to accomplish tasks they believe would be relevant. Checklist exercises are not a specific type of exercise. A simulation exercise attempts to more fully re-create an actual incident to test responses. Fail-over exercises are conducted by actually failing a datacenter over to a hot location.`
  },
  {
    id: 261,
    domain: "Security Operations",
    domainId: 4,
    chapter: 14,
    question: `Madhuri wants to check a PNG-formatted photo for GPS coordinates. Where can she find that information if it exists in the photo?`,
    choices: {
      A: `In the location.txt file appended to the PNG`,
      B: `On the original camera`,
      C: `In the photo's metadata`,
      D: `In the photo as a steganographically embedded data field`
    },
    correct: "C",
    explanation: `If the photo includes GPS data, it will be included in the photo's metadata. Madhuri can use a tool like ExifTool to review the metadata for useful information. None of the other options are places where data is stored for a PNG image as a normal practice.`
  },
  {
    id: 262,
    domain: "Security Operations",
    domainId: 4,
    chapter: 14,
    question: `Alyssa has identified malware on a system. She removes the system from the network to ensure that it cannot impact other systems. What technique has she used to deal with this system?`,
    choices: {
      A: `Quarantine`,
      B: `Segmentation`,
      C: `Converted it to agentless`,
      D: `Deny listing`
    },
    correct: "A",
    explanation: `Alyssa's has quarantined the machine, ensuring it cannot reach other systems or impact the rest of her organization. Segmentation would involve putting the system in protected network zone. Agentless tools are used to send data without a separate program or agent deployed to allow that. Deny lists are used to prevent specific programs or files from being used or deployed to systems.`
  },
  {
    id: 263,
    domain: "Security Operations",
    domainId: 4,
    chapter: 14,
    question: `Kristen discovers missing logs as part of her threat hunting activities. What has most likely happened?`,
    choices: {
      A: `The logs hit the end of their life cycle and were rotated.`,
      B: `The system is a newly deployed system.`,
      C: `An attacker wiped the logs to hide evidence.`,
      D: `An attacker encrypted the logs as part of their process.`
    },
    correct: "C",
    explanation: `Missing logs are often associated with an attacker attempting to hide evidence of their actions. Log rotation will typically remove the oldest log items and replace them with new log items rather than wiping a log, or will archive the old log file and create a new one. A newly deployed system typically has at least some logs from booting and running. Encrypting logs would leave a file in place even if it couldn't be read.`
  },
  {
    id: 264,
    domain: "Security Operations",
    domainId: 4,
    chapter: 14,
    question: `Ian has been receiving hundreds of false positive alerts from his SIEM every night when scheduled jobs run across his datacenter. What should he adjust on his SIEM to reduce the false positive rate?`,
    choices: {
      A: `Trend analysis`,
      B: `Sensitivity`,
      C: `Correlation rules`,
      D: `Dashboard configuration`
    },
    correct: "B",
    explanation: `Ian's first step should be changing the sensitivity for his alerts. Adjusting the alerts to ignore safe or expected events can help reduce false positives. Correlation rules may then need to be adjusted if they are matching unrelated items. Dashboards are used to visualize data, not for alerting, and trend analysis is used to feed dashboards and reports.`
  },
  {
    id: 265,
    domain: "Security Operations",
    domainId: 4,
    chapter: 14,
    question: `Which team member acts as a primary conduit to senior management on an IR team?`,
    choices: {
      A: `Communications and public relations`,
      B: `Information security`,
      C: `Management`,
      D: `Technical expert`
    },
    correct: "C",
    explanation: `Members of management or organizational leadership act as a primary conduit to senior leadership for most incident response teams. They also ensure that difficult or urgent decisions can be made without needing escalated authority. Communications and PR staff focus on internal and external communications but are typically not the direct conduit to leadership. Technical and information security experts do most of the incident response work itself.`
  },
  {
    id: 266,
    domain: "Security Operations",
    domainId: 4,
    chapter: 14,
    question: `Dana is reviewing her system's application logs and notices that a full backup of the application was done at 10 a.m. She knows that the job that runs the backup process is set to run overnight. What indicator should she flag this as?`,
    choices: {
      A: `Unexpected logs`,
      B: `Resource consumption`,
      C: `Resource inaccessibility`,
      D: `Out-of-cycle logging`
    },
    correct: "D",
    explanation: `This is an example of out-of-cycle logging, or logging that occurs at a different time than expected. This may be because an attacker is using the backup tool to acquire data. Unexpected logs are not an indicator found on the Security+ exam outline. There is no indication of resource consumption or inaccessibility in the question.`
  },
  {
    id: 267,
    domain: "Security Operations",
    domainId: 4,
    chapter: 14,
    question: `Jim wants to view log entries that describe actions taken by applications on a Red Hat Linux system. Which of the following tools can he use on the system to view those logs?`,
    choices: {
      A: `logger`,
      B: `syslog-ng`,
      C: `journalctl`,
      D: `tail`
    },
    correct: "C",
    explanation: `Red Hat Enterprise uses journalctl to view journal logs that contain application information. Jim should use journalctl to review the logs for the information he needs. The tool also provides functionality that replicates what head and tail can do for logs. Syslog-ng is a logging infrastructure, and though logs may be sent via syslog-ng, it is not mentioned here. logger is a logging utility used to make entries in the system log.`
  },
  {
    id: 268,
    domain: "Security Operations",
    domainId: 4,
    chapter: 14,
    question: `Megan wants to ensure that logging is properly configured for her organization's Windows workstations. What could she use to ensure that logging best practices are configured?`,
    choices: {
      A: `SIEM`,
      B: `Benchmarks`,
      C: `Syslog`,
      D: `Agents`
    },
    correct: "B",
    explanation: `Benchmarks often include logging settings and configurations. SIEM is used to gather and analyze logs. Syslog is a standard for logging and sending logs. Agents are used to send logs for systems that don't have a logging capability.`
  },
  {
    id: 269,
    domain: "Security Operations",
    domainId: 4,
    chapter: 14,
    question: `Chris has turned on logon auditing for a Windows system. Which log will show them?`,
    choices: {
      A: `The Windows Application log`,
      B: `The Windows Security log`,
      C: `The Windows System log`,
      D: `All of the above`
    },
    correct: "B",
    explanation: `The Windows Security log records logon events when logon auditing is enabled. The Application and System logs do not contain these events.`
  },
  {
    id: 270,
    domain: "Security Operations",
    domainId: 4,
    chapter: 14,
    question: `Jayne wants to determine why a ransomware attack was successful against her organization. She plans to conduct a root cause analysis. Which of the following is not a typical root cause analysis method?`,
    choices: {
      A: `Root/branch review`,
      B: `Five whys`,
      C: `Event analysis`,
      D: `Diagramming`
    },
    correct: "A",
    explanation: `Five whys, event analysis, and diagramming are all common methods of performing root cause analysis. Root/branch review is not a typical process for this.`
  },
  {
    id: 271,
    domain: "Security Operations",
    domainId: 4,
    chapter: 14,
    question: `Hitesh wants to keep a system online but limit the impact of the malware that was found on it while an investigation occurs. What method from the following list should he use?`,
    choices: {
      A: `Containment`,
      B: `Isolation`,
      C: `Segmentation`,
      D: `Black holing`
    },
    correct: "A",
    explanation: `Containment activities focus on preventing further malicious actions or attacks. In this case, Hitesh might opt to prevent the malware from spreading but leave the system online due to a critical need or a desire to preserve memory and other artifacts for investigation. Isolation walls a system or systems off from the rest of the world, whereas segmentation is frequently used before incidents occur to create zones or segments of a network or system with different security levels and purposes.`
  },
  {
    id: 272,
    domain: "Security Operations",
    domainId: 4,
    chapter: 14,
    question: `What phase in the incident response process leverages indicators of compromise and log analysis as part of a review of events?`,
    choices: {
      A: `Preparation`,
      B: `Containment`,
      C: `Eradication`,
      D: `Identification`
    },
    correct: "D",
    explanation: `The Analysis phase focuses on using various techniques to analyze events to identify potential incidents. Preparation focuses on building tools, processes, and procedures to respond to incidents. Eradication involves the removal of artifacts related to the incident, and containment limits the scope and impact of the incident.`
  },
  {
    id: 273,
    domain: "Security Operations",
    domainId: 4,
    chapter: 14,
    question: `Henry wants to check to see if services were installed by an attacker. What commonly gathered organizational data can he use to see if a new service appeared on systems?`,
    choices: {
      A: `Registry dumps from systems throughout his organization`,
      B: `Firewall logs`,
      C: `Vulnerability scans`,
      D: `Flow logs Chapter 15 Digital Forensics THE COMPTIA SECURITY+ EXAM OBJECTIVES COVERED IN THIS CHAPTER INCLUDE: Domain 4.0: Security Operations`
    },
    correct: "C",
    explanation: `Vulnerability scans are the best way to find new services that are offered by systems. In fact, many vulnerability scanners will flag new services when they appear, allowing administrators to quickly notice unexpected new services. Registry information is not regularly dumped or collected in most organizations. Firewall logs and flow logs could show information about the services being used by systems whose traffic passes through them, but this is a less useful and accurate way of identifying new services and would work only if those services were also being used.`
  },
  {
    id: 274,
    domain: "Security Operations",
    domainId: 4,
    chapter: 15,
    question: `Felix wants to make an exact copy of a drive using a Linux command-line tool as part of a forensic acquisition process. What command should he use?`,
    choices: {
      A: `df`,
      B: `cp`,
      C: `dd`,
      D: `ln`
    },
    correct: "C",
    explanation: `dd is a copying and conversion command for Linux and can be used to create a forensic image that can be validated using an MD5sum or SHA1 hash. The other commands are df for disk usage, cp for copying files, and ln to link files.`
  },
  {
    id: 275,
    domain: "Security Operations",
    domainId: 4,
    chapter: 15,
    question: `Greg is preparing a forensic report and needs to describe the tools that were used. What should he report about the tools in addition to their names?`,
    choices: {
      A: `The type of system the tools were installed or run on`,
      B: `The training level or certifications of the team that uses the tools`,
      C: `Any known limitations or issues with the tools`,
      D: `The patch level or installed version of the tools`
    },
    correct: "C",
    explanation: `If there are known limitations or issues with the tools used, this should be included in the report. The type of system the tool was installed on may influence performance but should not influence the report or output. Training and certification may be listed as part of a team description but are not required as part of tool description. Finally, patch levels or installed versions are not critical unless there are known issues that would have been described as such.`
  },
  {
    id: 276,
    domain: "Security Operations",
    domainId: 4,
    chapter: 15,
    question: `Gabby is preparing chain-of-custody documentation and identifies a gap in hand-off documentation for an original source forensic drive. What issue should she expect to encounter due to this gap?`,
    choices: {
      A: `The evidence may not be admissible in court.`,
      B: `The forensic activities may need to be repeated.`,
      C: `The staff involved may have to re-create the missed log.`,
      D: `The chain of custody may need to be edited to note the problem.`
    },
    correct: "A",
    explanation: `If forensic evidence was not properly handled, it may not be admissible in court. Repeating forensic activities won't reverse mishandling, staff can't go back and re-create logs, and noting the issue will not resolve it.`
  },
  {
    id: 277,
    domain: "Security Operations",
    domainId: 4,
    chapter: 15,
    question: `Mike's organization has recently moved to a SaaS cloud service and needs to collect forensic data from the cloud service. What process can Mike use to gather the information he needs?`,
    choices: {
      A: `Install forensic imaging software on the cloud service's servers.`,
      B: `Identify the log information available and request any other desired information from the cloud service provider.`,
      C: `Engage law enforcement to acquire the forensic data.`,
      D: `Request the forensic information from third-party auditors.`
    },
    correct: "B",
    explanation: `Mike's best option is to identify the log information available from the provider and to request any additional information knowing that he may not receive more detail unless there is contractual language that specifies it. SaaS vendors typically won't allow installation of forensic tools, law enforcement does not perform forensic acquisition for third parties upon request, and auditors don't provide forensic data acquisition either.`
  },
  {
    id: 278,
    domain: "Security Operations",
    domainId: 4,
    chapter: 15,
    question: `Charles wants to obtain a forensic copy of a running virtual machine. What technique should he use to capture the image?`,
    choices: {
      A: `Run dd from within the running machine.`,
      B: `Use FTK Imager from the virtual machine host.`,
      C: `Use the VM host to create a snapshot.`,
      D: `Use WinHex to create a copy from within the running machine.`
    },
    correct: "C",
    explanation: `Creating a snapshot will provide a complete copy of the system, including memory state that can then be analyzed for forensic purposes. Copying a running system from a program running within that system can be problematic, since the system itself will change while it is trying to copy itself. FTK Imager can copy drives and files, but it would not handle a running virtual machine.`
  },
  {
    id: 279,
    domain: "Security Operations",
    domainId: 4,
    chapter: 15,
    question: `Melissa wants to capture network traffic for forensic purposes. What tool should she use to capture it?`,
    choices: {
      A: `A forensic suite`,
      B: `Wireshark`,
      C: `dd`,
      D: `WinHex`
    },
    correct: "B",
    explanation: `Even though Wireshark is not a dedicated network forensic tool, since network traffic is ephemeral, capturing it with a packet sniffer like Wireshark is Melissa's best option. Forensic suites are useful for analyzing captured images, not capturing network traffic, and dd and WinHex are both useful for packet capture, but not for network traffic analysis.`
  },
  {
    id: 280,
    domain: "Security Operations",
    domainId: 4,
    chapter: 15,
    question: `Frank is concerned about the admissibility of his forensic data. Which of the following is not an element he should be concerned about?`,
    choices: {
      A: `Whether the forensic source data has remained unaltered`,
      B: `Whether the practices and procedures would survive review by experts`,
      C: `Whether the evidence is relevant to the case`,
      D: `Whether the forensic information includes a time stamp`
    },
    correct: "D",
    explanation: `Forensic information does not have to include a time stamp to be admissible, but time stamps can help build a case that shows when events occurred. Files without a time stamp may still show other information that is useful to the case or may have other artifacts associated with them that can provide context about the time and date.`
  },
  {
    id: 281,
    domain: "Security Operations",
    domainId: 4,
    chapter: 15,
    question: `What is the document that tracks the custody or control of a piece of evidence called?`,
    choices: {
      A: `Evidence log`,
      B: `Audit log`,
      C: `Event report`,
      D: `Chain of custody`
    },
    correct: "D",
    explanation: `Chain-of-custody documentation tracks evidence throughout its life cycle, with information about who has custody or control and when transfers happened, and continues until the evidence is removed from the legal process and disposed of. The other terms are not used for this practice.`
  },
  {
    id: 282,
    domain: "Security Operations",
    domainId: 4,
    chapter: 15,
    question: `Isaac is performing a forensic analysis on two systems that were compromised in the same event in the same facility. As he performs his analysis, he notices that the event appears to have happened almost exactly one hour earlier on one system than the other. What is the most likely issue he has encountered?`,
    choices: {
      A: `The attacker took an hour to get to the second system.`,
      B: `One system is set to an incorrect time zone.`,
      C: `The attacker changed the system clock to throw off forensic practitioners.`,
      D: `The forensic tool is reading the time stamps incorrectly.`
    },
    correct: "B",
    explanation: `The most common cause of an hour of difference between two systems in an environment is an incorrectly set time zone. Isaac should check the time zone settings, and then correct his findings based on the time zones set on the systems if necessary.`
  },
  {
    id: 283,
    domain: "Security Operations",
    domainId: 4,
    chapter: 15,
    question: `What legal concept determines the law enforcement agency or agencies that will be involved in a case based on location?`,
    choices: {
      A: `Nexus`,
      B: `Nonrepudiation`,
      C: `Jurisdiction`,
      D: `Admissibility`
    },
    correct: "C",
    explanation: `Jurisdiction is the legal authority over an area or individuals based on laws that create the jurisdiction. Nexus defines whether a relationship or connection exists, such as a local branch or business location. Non-repudiation ensures that evidence or materials can be connected to their originator. Admissibility determines whether evidence can be used in court.`
  },
  {
    id: 284,
    domain: "Security Operations",
    domainId: 4,
    chapter: 15,
    question: `Michael wants to acquire the firmware from a running device for analysis. What method is most likely to succeed?`,
    choices: {
      A: `Use forensic memory acquisition techniques.`,
      B: `Use disk forensic acquisition techniques.`,
      C: `Remove the firmware chip from the system.`,
      D: `Shut down the system and boot to the firmware to copy it to a removable device.`
    },
    correct: "A",
    explanation: `Firmware can be challenging to access, but both memory forensic techniques and direct hardware interface access are viable means in some cases. Firmware is not typically stored on the disk and instead is stored in a BIOS or UEFI chip. Removing the chip from the system will leave it unable to run and thus this is not a preferred method. Also, many chips are not removable. Shutting down the device and booting it to the firmware does not provide a means of copying the firmware for most devices. Although the firmware is likely to allow updates, most do not allow downloads or copying.`
  },
  {
    id: 285,
    domain: "Security Operations",
    domainId: 4,
    chapter: 15,
    question: `Charles needs to know about actions an individual performed on a PC. What is the best starting point to help him identify those actions?`,
    choices: {
      A: `Review the system log.`,
      B: `Review the event log.`,
      C: `Interview the individual.`,
      D: `Analyze the system's keystroke log.`
    },
    correct: "C",
    explanation: `Although it may be tempting to use a technical answer, interviewing the individual involved is the best starting point when a person performed actions that need to be reviewed. Charles can interview the staff member, and then move on to technical means to validate their responses. System and event logs may have some clues to what occurred, but normal systems do not maintain a keystroke log. In fact, the closest normal element is the command log used by both Windows and Linux to allow command-line input to be recalled as needed.`
  },
  {
    id: 286,
    domain: "Security Operations",
    domainId: 4,
    chapter: 15,
    question: `Maria has acquired a disk image from a hard drive using dd, and she wants to ensure that her process is forensically sound. What should her next step be after completing the copy?`,
    choices: {
      A: `Securely wipe the source drive.`,
      B: `Compare the hashes of the source and target drive.`,
      C: `Securely wipe the target drive.`,
      D: `Update her chain-of-custody document.`
    },
    correct: "B",
    explanation: `Once a copy is made, hashes for the original and target drive should be compared to ensure that the copy was successful. After that, the chain-of-custody document can be updated to note that a copy was made and will be tracked as it is analyzed while the original is preserved. Wiping either drive after a copy is not part of the process, although a target drive may be wiped after a case is complete.`
  },
  {
    id: 287,
    domain: "Security Operations",
    domainId: 4,
    chapter: 15,
    question: `Alex has been handed a flash media device that was quickformatted and has been asked to recover the data. What data will remain on the drive?`,
    choices: {
      A: `No data will remain on the drive.`,
      B: `Files will remain but file indexes will not.`,
      C: `File indexes will remain, but the files will be gone.`,
      D: `Files and file indexes will remain on the drive.`
    },
    correct: "B",
    explanation: `Quick-formatting a drive removes the file indexes but leaves the file content on the drive. Recovery tools look for those files on the drive and piece them back together using metadata, headers, and other clues that help to recover the files.`
  },
  {
    id: 288,
    domain: "Security Operations",
    domainId: 4,
    chapter: 15,
    question: `Naomi is preparing to migrate her organization to a cloud service and wants to ensure that she has the appropriate contractual language in place. Which of the following is not a common item she should include?`,
    choices: {
      A: `Right-to-audit clauses`,
      B: `Right to forensic examination`,
      C: `Choice of jurisdiction`,
      D: `Data breach notification timeframe`
    },
    correct: "B",
    explanation: `Contracts commonly include right to audit, choice of jurisdiction, and data breach notification time frame clauses, but a right to forensically examine a vendor's systems or devices is rarely included. Naomi may want to ask about their incident response process and for examples of previous breach notification and incident documentation shared with customers instead.`
  },
  {
    id: 289,
    domain: "Security Operations",
    domainId: 4,
    chapter: 15,
    question: `Alaina wants to maintain chain-of-custody documentation and has created a form. Which of the following is not a common element on a chain-of-custody form?`,
    choices: {
      A: `Item identifier number`,
      B: `Signature of the person transferring the item`,
      C: `Signature of the person receiving the item`,
      D: `Method of transport`
    },
    correct: "D",
    explanation: `Chain of custody tracks who has an item, how it is collected, where it is stored and how, how it is secured or protected, who collected it, and transfers, but it does not typically include how the items were transported because that is not relevant if the other data is provided.`
  },
  {
    id: 290,
    domain: "Security Operations",
    domainId: 4,
    chapter: 15,
    question: `Henry is following the EDRM model and is preparing to review data. What two key tasks occur during this stage?`,
    choices: {
      A: `Validating that time stamps match between systems and that data is properly hashed to confirm that original data is sent`,
      B: `Validating that the legal hold request is valid and that all documented items are included`,
      C: `Validating that the desired data is included and that information that should not be shared is not included`,
      D: `Validating that chain of custody is ensured and that malicious files are not included`
    },
    correct: "C",
    explanation: `It is important to ensure that data prepared for e-discovery only contains what it is supposed to, and that information that should not be shared is not included. Time stamps, hashing, chain of custody, and ensuring malicious files are not included are not part of the EDRM model. Validating that a legal hold is valid should happen before preservation, but validating that documented items from the hold are included if they exist should occur.`
  },
  {
    id: 291,
    domain: "Security Operations",
    domainId: 4,
    chapter: 15,
    question: `Theresa's organization has received a legal hold notice for their files and documents. Which of the following is not an action she needs to take?`,
    choices: {
      A: `Ensure that changes to existing documents related to the case are tracked and that originals can be provided.`,
      B: `Preserve all existing documents relevant to the case.`,
      C: `Delete all sensitive documents related to the case.`,
      D: `Prevent backups that contain files related to the case from being overwritten on their normal schedule.`
    },
    correct: "C",
    explanation: `Removing information relevant to a legal hold is exactly what the hold is intended to prevent. Theresa's organization could be in serious legal trouble if they were to intentionally purge or change related information.`
  },
  {
    id: 292,
    domain: "Security Operations",
    domainId: 4,
    chapter: 15,
    question: `Gurvinder wants to follow the order of volatility to guide his forensic data acquisition. Which of the following is the least volatile?`,
    choices: {
      A: `RAM`,
      B: `Data on the hard drive`,
      C: `Backups`,
      D: `Remote logs`
    },
    correct: "C",
    explanation: `Backups are the least volatile of these options according to the order of volatility. Backups will be kept until they are aged out, which may be days, weeks, or even months in some cases. From most to least volatile, these are RAM, data on the hard drive, remote logs, and then backups.`
  },
  {
    id: 293,
    domain: "Security Operations",
    domainId: 4,
    chapter: 15,
    question: `What is the key difference between hashing and checksums?`,
    choices: {
      A: `Both can validate integrity, but a hash also provides a unique digital fingerprint.`,
      B: `A hash can be reversed, and a checksum cannot be.`,
      C: `Checksums provide greater security than hashing.`,
      D: `Checksums have fewer message collisions than a hash. Chapter 16 Security Governance and Compliance THE COMPTIA SECURITY+ EXAM OBJECTIVES COVERED IN THIS CHAPTER INCLUDE: Domain 1.0: General Security Concepts`
    },
    correct: "A",
    explanation: `Although both a checksum and a hash can be used to validate message integrity, a hash has fewer collisions than a checksum and will also provide a unique fingerprint for a file. Checksums are primarily used as a quick means of checking that that integrity is maintained, whereas hashes are used for many other purposes such as secure password validation without retaining the original password. A checksum would not be useful for proving a forensic image was identical, but it could be used to ensure that your work had not changed the contents of the drive.`
  },
  {
    id: 294,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 16,
    question: `Joe is authoring a document that explains to system administrators one way in which they might comply with the organization's requirement to encrypt all laptops. What type of document is Joe writing?`,
    choices: {
      A: `Policy`,
      B: `Guideline`,
      C: `Procedure`,
      D: `Standard`
    },
    correct: "B",
    explanation: `The key phrase in this scenario is “one way.” This indicates that compliance with the document is not mandatory, so Joe must be authoring a guideline. Policies, standards, and procedures are all mandatory.`
  },
  {
    id: 295,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 16,
    question: `Which one of the following statements is not true about compensating controls under PCI DSS?`,
    choices: {
      A: `Controls used to fulfill one PCI DSS requirement may be used to compensate for the absence of a control needed to meet another requirement.`,
      B: `Controls must meet the intent of the original requirement.`,
      C: `Controls must meet the rigor of the original requirement.`,
      D: `Compensating controls must provide a similar level of defense as the original requirement.`
    },
    correct: "A",
    explanation: `PCI DSS compensating controls must be “above and beyond” other PCI DSS requirements. This specifically bans the use of a control used to meet one requirement as a compensating control for another requirement.`
  },
  {
    id: 296,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 16,
    question: `What law creates privacy obligations for those who handle the personal information of European Union residents?`,
    choices: {
      A: `HIPAA`,
      B: `FERPA`,
      C: `GDPR`,
      D: `PCI DSS`
    },
    correct: "C",
    explanation: `The General Data Protection Regulation (GDPR) implements privacy requirements for handling the personal information of EU residents. The Health Insurance Portability and Accountability Act (HIPAA) includes security and privacy rules that affect healthcare providers, health insurers, and health information clearinghouses. The Family Educational Rights and Privacy Act (FERPA) applies to educational institutions. The Payment Card Industry Data Security Standard (PCI DSS) applies to credit and debit card information.`
  },
  {
    id: 297,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 16,
    question: `Which one of the following is not one of the five core security functions defined by the NIST Cybersecurity Framework?`,
    choices: {
      A: `Identify`,
      B: `Contain`,
      C: `Respond`,
      D: `Recover`
    },
    correct: "B",
    explanation: `The five security functions described in the NIST Cybersecurity Framework are identify, protect, detect, respond, and recover.`
  },
  {
    id: 298,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 16,
    question: `What ISO standard provides guidance on privacy controls?`,
    choices: {
      A: `27002`,
      B: `27001`,
      C: `27701`,
      D: `31000`
    },
    correct: "C",
    explanation: `The International Organization for Standardization (ISO) publishes ISO 27701, covering privacy controls. ISO 27001 and 27002 cover cybersecurity, and ISO 31000 covers risk management.`
  },
  {
    id: 299,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 16,
    question: `Which one of the following documents must normally be approved by the CEO or similarly high-level executive?`,
    choices: {
      A: `Standard`,
      B: `Procedure`,
      C: `Guideline`,
      D: `Policy`
    },
    correct: "D",
    explanation: `Policies require approval from the highest level of management, usually the CEO. Other documents may often be approved by other managers, such as the CISO.`
  },
  {
    id: 300,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 16,
    question: `Greg would like to create an umbrella agreement that provides the security terms and conditions for all future work that his organization does with a vendor. What type of agreement should Greg use?`,
    choices: {
      A: `BPA`,
      B: `MOU`,
      C: `MSA`,
      D: `SLA`
    },
    correct: "C",
    explanation: `Master service agreements (MSAs) provide an umbrella contract for the work that a vendor does with an organization over an extended period of time. The MSA typically includes detailed security and privacy requirements. Each time the organization enters into a new project with the vendor, they may then create a statement of work (SOW) that contains project-specific details and references the MSA.`
  },
  {
    id: 301,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 16,
    question: `What organization is known for creating independent security benchmarks covering hardware and software platforms from many different vendors?`,
    choices: {
      A: `Microsoft`,
      B: `Center for Internet Security`,
      C: `Cloud Security Alliance`,
      D: `Cisco`
    },
    correct: "B",
    explanation: `All of these organizations produce security standards and benchmarks. However, only the Center for Internet Security (CIS) is known for producing independent benchmarks covering a wide variety of software and hardware.`
  },
  {
    id: 302,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 16,
    question: `What do many organizations use to schedule and coordinate changes for information systems?`,
    choices: {
      A: `Impact analysis`,
      B: `Backout plans`,
      C: `Maintenance windows`,
      D: `Version control`
    },
    correct: "C",
    explanation: `Many organizations use scheduled maintenance windows to coordinate changes to information systems. These windows are preplanned and announced times when all non-emergency changes will take place and often occur on evenings and weekends. A change management process ensures that personnel can perform a security impact analysis. Experts evaluate changes to identify any security impacts before personnel deploy the changes in a production environment. A backout plan allows personnel to undo the change and return the system to its previous state if necessary. Version control ensures that developers and users have access to the latest versions of software and that changes are carefully managed throughout the release process.`
  },
  {
    id: 303,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 16,
    question: `Which one of the following would not normally be found in an organization's information security policy?`,
    choices: {
      A: `Statement of the importance of cybersecurity`,
      B: `Requirement to use AES-256 encryption`,
      C: `Delegation of authority`,
      D: `Designation of responsible executive`
    },
    correct: "B",
    explanation: `Security policies do not normally contain prescriptive technical guidance, such as a requirement to use a specific encryption algorithm. This type of detail would normally be found in a security standard.`
  },
  {
    id: 304,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 16,
    question: `Alice, an IT security manager at Acme Corporation, decides to conduct an exercise to test the employees' ability to recognize phishing emails. She creates fake phishing messages and sends them to the employees. When employees click on the links in the fake messages, they are redirected to a training program. What is the primary purpose of the exercise that Alice is conducting?`,
    choices: {
      A: `To penalize the employees who click on the phishing links`,
      B: `To reward employees who identify the fake phishing messages`,
      C: `To test employees' ability to recognize phishing messages and help them improve`,
      D: `To gather data for a report on the most gullible departments`
    },
    correct: "C",
    explanation: `Alice's exercise is designed to evaluate how well employees can identify phishing messages and, if they fail to do so, redirect them to a training program that is meant to help them get better at recognizing such messages. The exercise is meant for educational purposes and not for penalizing employees. It is intended to help them improve their skills in recognizing phishing emails. While rewarding employees for identifying phishing emails could be a component of a security awareness program, the exercise described is primarily educational and is focused on helping those who fail to recognize the phishing messages. While data might be collected for analysis and understanding areas where improvement is needed, the intention is not to label departments as gullible.`
  },
  {
    id: 305,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 16,
    question: `Tonya discovers that an employee is running a side business from his office, using company technology resources. What policy would most likely contain information relevant to this situation?`,
    choices: {
      A: `NDA`,
      B: `AUP`,
      C: `Data ownership`,
      D: `Data classification`
    },
    correct: "B",
    explanation: `An organization's acceptable use policy (AUP) should contain information on what constitutes allowable and unallowable use of company resources. This policy should contain information to help guide Tonya's next steps.`
  },
  {
    id: 306,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 16,
    question: `What compliance obligation applies to merchants and service providers who work with credit card information?`,
    choices: {
      A: `FERPA`,
      B: `SOX`,
      C: `HIPAA`,
      D: `PCI DSS`
    },
    correct: "D",
    explanation: `The Payment Card Industry Data Security Standard (PCI DSS) provides detailed rules about the storage, processing, and transmission of credit and debit card information. PCI DSS is not a law but rather a contractual obligation that applies to credit card merchants and service providers.`
  },
  {
    id: 307,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 16,
    question: `Mike is an information security manager at TechRise Solutions. The company has been experiencing an increase in security incidents, and senior management is concerned about the security posture of the organization. They have asked Mike to take proactive measures to strengthen the company's security culture. What should be Mike's primary role in enhancing the security awareness and training at TechRise Solutions?`,
    choices: {
      A: `To delegate all security responsibilities to the HR department`,
      B: `To establish, promote, and maintain security training and awareness programs`,
      C: `To create and distribute security awareness posters`,
      D: `To personally conduct security training sessions for all employees`
    },
    correct: "B",
    explanation: `As an information security manager, Mike's primary role would be to establish an effective security training and awareness program, promote it within the organization, and ensure it is maintained effectively to foster a security-conscious culture among employees. This aligns with a proactive approach to reducing security incidents. Mike should take an active role in security training and awareness, rather than delegating all responsibilities to another department. While HR may be involved, Mike's expertise is crucial in establishing effective programs. Although security awareness posters and training sessions are two components of security awareness efforts, Mike's role should be much broader, encompassing the establishment, promotion, and maintenance of comprehensive training and awareness programs.`
  },
  {
    id: 308,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 16,
    question: `Colin would like to implement a security control in his accounting department that is specifically designed to detect cases of fraud that are able to occur despite the presence of other security controls. Which one of the following controls is best suited to meet Colin's need?`,
    choices: {
      A: `Separation of duties`,
      B: `Least privilege`,
      C: `Dual control`,
      D: `Mandatory vacations`
    },
    correct: "D",
    explanation: `Mandatory vacations are designed to force individuals to take time away from the office to allow fraudulent activity to come to light in their absence. The other controls listed here (separation of duties, least privilege, and dual control) are all designed to prevent, rather than detect, fraud.`
  },
  {
    id: 309,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 16,
    question: `Which one of the following security policy framework components does not contain mandatory guidance for individuals in the organization?`,
    choices: {
      A: `Policy`,
      B: `Standard`,
      C: `Procedure`,
      D: `Guideline`
    },
    correct: "D",
    explanation: `Guidelines are the only element of the security policy framework that is optional. Compliance with policies, standards, and procedures is mandatory.`
  },
  {
    id: 310,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 16,
    question: `Rachel is the Head of Security at WebCraft Inc. She wants to create both security training and awareness programs. Which statement best captures the difference between these programs?`,
    choices: {
      A: `Security training requires time to learn new material, whereas awareness efforts use techniques like posters and emails to remind employees of security lessons.`,
      B: `Security training involves giving rewards to employees, whereas awareness efforts involve punishments.`,
      C: `There is no difference; both terms can be used interchangeably.`,
      D: `Security training is for security team members only, whereas security awareness is for all employees.`
    },
    correct: "A",
    explanation: `Security training typically involves structured and formal programs where employees learn new security concepts and practices. In contrast, security awareness efforts are more informal and aim to keep security principles top-of-mind for employees through reminders, without requiring them to engage in formal learning. The idea that security training involves giving rewards to employees and awareness efforts involve punishments is not accurate. Security training is meant to educate employees on security concepts and practices, not to serve as a platform for rewards. Similarly, awareness efforts are not punitive; they serve to remind and reinforce security principles among employees. The statement that there is no difference between security training and awareness efforts and that both terms can be used interchangeably is also incorrect. There is a distinct difference between the two in terms of their structure and purpose, as explained in the correct answer. Lastly, the notion that security training is only for security team members while security awareness is for all employees is not true. Security training is important for all employees, depending on their roles and responsibilities, to ensure they understand the security protocols and policies. Security awareness, on the other hand, is a continual reminder for all employees, including the security team, to stay vigilant and informed about security practices.`
  },
  {
    id: 311,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 16,
    question: `Allan is developing a document that lists the acceptable mechanisms for securely obtaining remote administrative access to servers in his organization. What type of document is Allan writing?`,
    choices: {
      A: `Policy`,
      B: `Standard`,
      C: `Guideline`,
      D: `Procedure`
    },
    correct: "B",
    explanation: `Standards describe specific security controls that must be in place for an organization. Allan would not include acceptable mechanisms in a high-level policy document, and this information is too general to be useful as a procedure. Guidelines are not mandatory, so they would not be applicable in this scenario.`
  },
  {
    id: 312,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 16,
    question: `Which one of the following is not a common use of the NIST Cybersecurity Framework?`,
    choices: {
      A: `Describe the current cybersecurity posture of an organization.`,
      B: `Describe the target future cybersecurity posture of an organization.`,
      C: `Communicate with stakeholders about cybersecurity risk.`,
      D: `Create specific technology requirements for an organization.`
    },
    correct: "D",
    explanation: `The NIST Cybersecurity Framework is designed to help organizations describe their current cybersecurity posture, describe their target state for cybersecurity, identify and prioritize opportunities for improvement, assess progress, and communicate with stakeholders about risk. It does not create specific technology requirements.`
  },
  {
    id: 313,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 16,
    question: `Which one of the following items is not normally included in a request for an exception to security policy?`,
    choices: {
      A: `Description of a compensating control`,
      B: `Description of the risks associated with the exception`,
      C: `Proposed revision to the security policy`,
      D: `Business justification for the exception Chapter 17 Risk Management and Privacy THE COMPTIA SECURITY+ EXAM OBJECTIVES COVERED IN THIS CHAPTER INCLUDE: Domain 3.0: Security Architecture`
    },
    correct: "C",
    explanation: `Requests for an exception to a security policy would not normally include a proposed revision to the policy. Exceptions are documented variances from the policy because of specific technical and/or business requirements. They do not alter the original policy, which remains in force for systems not covered by the exception.`
  },
  {
    id: 314,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 17,
    question: `Jen identified a missing patch on a Windows server that might allow an attacker to gain remote control of the system. After consulting with her manager, she applied the patch. From a risk management perspective, what has she done?`,
    choices: {
      A: `Removed the threat`,
      B: `Reduced the threat`,
      C: `Removed the vulnerability`,
      D: `Reduced the vulnerability`
    },
    correct: "C",
    explanation: `By applying the patch, Jen has removed the vulnerability from her server. This also has the effect of eliminating this particular risk. Jen cannot control the external threat of an attacker attempting to gain access to her server.`
  },
  {
    id: 315,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 17,
    question: `You notice a high number of SQL injection attacks against a web application run by your organization, so you install a web application firewall to block many of these attacks before they reach the server. How have you altered the severity of this risk?`,
    choices: {
      A: `Reduced the magnitude`,
      B: `Eliminated the vulnerability`,
      C: `Reduced the probability`,
      D: `Eliminated the threat`
    },
    correct: "C",
    explanation: `Installing a web application firewall reduces the probability that an attack will reach the web server. Vulnerabilities may still exist in the web application and the threat of an external attack is unchanged. The impact of a successful SQL injection attack is also unchanged by a web application firewall.`
  },
  {
    id: 316,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 17,
    question: `Questions 3–7 refer to the following scenario: Aziz is responsible for the administration of an e-commerce website that generates $100,000 per day in revenue for his firm. The website uses a database that contains sensitive information about the firm’s customers. He expects that a compromise of that database would result in $500,000 of fines against his firm. Aziz is assessing the risk of a SQL injection attack against the database where the attacker would steal all of the customer personally identifiable information (PII) from the database. After consulting threat intelligence, he believes that there is a 5 percent chance of a successful attack in any given year. What is the asset value (AV)?`,
    choices: {
      A: `$5,000`,
      B: `$100,000`,
      C: `$500,000`,
      D: `$600,000`
    },
    correct: "C",
    explanation: `The asset at risk in this case is the customer database. Losing control of the database would result in a $500,000 fine, so the asset value (AV) is $500,000.`
  },
  {
    id: 317,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 17,
    question: `What is the exposure factor (EF)?`,
    choices: {
      A: `5%`,
      B: `20%`,
      C: `50%`,
      D: `100%`
    },
    correct: "D",
    explanation: `The attack would result in the total loss of customer data stored in the database, making the exposure factor (EF) 100 percent.`
  },
  {
    id: 318,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 17,
    question: `What is the single loss expectancy (SLE)?`,
    choices: {
      A: `$5,000`,
      B: `$100,000`,
      C: `$500,000`,
      D: `$600,000`
    },
    correct: "C",
    explanation: `We compute the single loss expectancy (SLE) by multiplying the asset value (AV) ($500,000) and the exposure factor (EF) (100%) to get an SLE of $500,000.`
  },
  {
    id: 319,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 17,
    question: `What is the annualized rate of occurrence (ARO)?`,
    choices: {
      A: `0.05`,
      B: `0.20`,
      C: `2.00`,
      D: `5.00`
    },
    correct: "A",
    explanation: `Aziz's threat intelligence research determined that the threat has a 5 percent likelihood of occurrence each year. This is an ARO of 0.05.`
  },
  {
    id: 320,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 17,
    question: `What is the annualized loss expectancy (ALE)?`,
    choices: {
      A: `$5,000`,
      B: `$25,000`,
      C: `$100,000`,
      D: `$500,000`
    },
    correct: "B",
    explanation: `We compute the annualized loss expectancy (ALE) by multiplying the SLE ($500,000) and the ARO (0.05) to get an ALE of $25,000.`
  },
  {
    id: 321,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 17,
    question: `Questions 8–11 refer to the following scenario: Grace recently completed a risk assessment of her organization’s exposure to data breaches and determined that there is a high level of risk related to the loss of sensitive personal information. She is considering a variety of approaches to managing this risk. Grace's first idea is to add a web application firewall to protect her organization against SQL injection attacks. What risk management strategy does this approach adopt?`,
    choices: {
      A: `Risk acceptance`,
      B: `Risk avoidance`,
      C: `Risk mitigation`,
      D: `Risk transference`
    },
    correct: "C",
    explanation: `Installing new controls or upgrading existing controls is an effort to reduce the probability or magnitude of a risk. This is an example of a risk mitigation activity.`
  },
  {
    id: 322,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 17,
    question: `Business leaders are considering dropping the customer activities that collect and store sensitive personal information. What risk management strategy would this approach use?`,
    choices: {
      A: `Risk acceptance`,
      B: `Risk avoidance`,
      C: `Risk mitigation`,
      D: `Risk transference`
    },
    correct: "B",
    explanation: `Changing business processes or activities to eliminate a risk is an example of risk avoidance.`
  },
  {
    id: 323,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 17,
    question: `Grace's company decided to install the web application firewall and continue doing business. They are still worried about other risks to the information that were not addressed by the firewall and are considering purchasing an insurance policy to cover those risks. What strategy does this use?`,
    choices: {
      A: `Risk acceptance`,
      B: `Risk avoidance`,
      C: `Risk mitigation`,
      D: `Risk transference`
    },
    correct: "D",
    explanation: `Insurance policies use a risk transference strategy by shifting some or all of the financial risk from the organization to an insurance company.`
  },
  {
    id: 324,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 17,
    question: `In the end, Grace's risk managers found that the insurance policy was too expensive and opted not to purchase it. They are taking no additional action. What risk management strategy is being used in this situation?`,
    choices: {
      A: `Risk acceptance`,
      B: `Risk avoidance`,
      C: `Risk mitigation`,
      D: `Risk transference`
    },
    correct: "A",
    explanation: `When an organization decides to take no further action to address remaining risk, they are choosing a strategy of risk acceptance.`
  },
  {
    id: 325,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 17,
    question: `Under the European Union's GDPR, what term is assigned to the individual who leads an organization's privacy efforts?`,
    choices: {
      A: `Data protection officer`,
      B: `Data controller`,
      C: `Data steward`,
      D: `Data processor`
    },
    correct: "A",
    explanation: `Under the GDPR, the data protection officer (DPO) is an individual assigned direct responsibility for carrying out an organization's privacy program.`
  },
  {
    id: 326,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 17,
    question: `Helen's organization maintains medical records on behalf of its customers, who are individual physicians. What term best describes the role of Helen's organization?`,
    choices: {
      A: `Data processor`,
      B: `Data controller`,
      C: `Data owner`,
      D: `Data steward`
    },
    correct: "A",
    explanation: `In this case, the physicians maintain the data ownership role. They have chosen to outsource data processing to Helen's organization, making that organization a data processor.`
  },
  {
    id: 327,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 17,
    question: `Gene recently conducted an assessment and determined that his organization can be without its main transaction database for a maximum of two hours before unacceptable damage occurs to the business. What metric has Gene identified?`,
    choices: {
      A: `MTBF`,
      B: `MTTR`,
      C: `RTO`,
      D: `RPO`
    },
    correct: "C",
    explanation: `The Recovery Time Objective (RTO) is the amount of time that the organization can tolerate a system being down before it is repaired. That is the metric that Gene has identified in this scenario.`
  },
  {
    id: 328,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 17,
    question: `Tina works for a hospital system and manages the system's patient records. What category of personal information best describes the information that is likely to be found in those records?`,
    choices: {
      A: `PCI`,
      B: `PHI`,
      C: `PFI`,
      D: `PII`
    },
    correct: "B",
    explanation: `This is a tricky question, as it is possible that all of these categories of information may be found in patient records. However, they are most likely to contain protected health information (PHI). PHI could also be described as a subcategory of personally identifiable information (PII), but PHI is a better description. It is also possible that the records might contain payment card information (PCI) or personal financial information (PFI), but that is less likely than PHI.`
  },
  {
    id: 329,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 17,
    question: `Asa believes that her organization is taking data collected from customers for technical support and using it for marketing without their permission. What principle is most likely being violated?`,
    choices: {
      A: `Data minimization`,
      B: `Data retention`,
      C: `Purpose limitation`,
      D: `Data sovereignty`
    },
    correct: "C",
    explanation: `Organizations should only use data for the purposes disclosed during the collection of that data. In this case, the organization collected data for technical support purposes and is now using it for marketing purposes. That violates the principle of purpose limitation.`
  },
  {
    id: 330,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 17,
    question: `Which one of the following U.S. government classification levels requires the highest degree of security control?`,
    choices: {
      A: `Secret`,
      B: `Confidential`,
      C: `Top Secret`,
      D: `Unclassified`
    },
    correct: "C",
    explanation: `Top Secret is the highest level of classification under the U.S. system and, therefore, requires the highest level of security control.`
  },
  {
    id: 331,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 17,
    question: `Which type of analysis uses numeric data in the analysis, resulting in assessments that allow the very straightforward prioritization of risk?`,
    choices: {
      A: `Qualitative`,
      B: `One-time`,
      C: `Recurring`,
      D: `Quantitative`
    },
    correct: "D",
    explanation: `Quantitative risk analysis uses numeric data in the analysis, resulting in assessments that allow the very straightforward prioritization of risks. Qualitative risk analysis substitutes subjective judgments and categories for strict numerical analysis, allowing the assessment of risks that are difficult to quantify. A one-time risk assessment offers the organization a point-in-time view of its current risk state. Recurring risk assessments are performed at regular intervals, such as annually or quarterly.`
  },
  {
    id: 332,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 17,
    question: `What term is given to an individual or organization who determines the reasons for processing personal information?`,
    choices: {
      A: `Data steward`,
      B: `Data controller`,
      C: `Data processor`,
      D: `Data custodian`
    },
    correct: "B",
    explanation: `Data controllers are the entities who determine the reasons for processing personal information and direct the methods of processing that data. This term is used primarily in European law, and it serves as a substitute for the term data owner to avoid a presumption that anyone who collects data has an ownership interest in that data.`
  },
  {
    id: 333,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 17,
    question: `Brian recently conducted a risk mitigation exercise and has determined the level of risk that remains after implementing a series of controls. What term best describes this risk?`,
    choices: {
      A: `Inherent risk`,
      B: `Control risk`,
      C: `Risk appetite`,
      D: `Residual risk Appendix Answers to Review Questions`
    },
    correct: "D",
    explanation: `The residual risk is the risk that remains after an organization implements controls designed to mitigate, avoid, and/or transfer the inherent risk. Index 3DES (Triple DES), 208 802.1X, 241 A AAA (authentication, authorization, accounting) systems, 241–242 ABAC (attribute-based access control), 260 access badges, 287 access control schemes ABAC (attribute-based access control), 260 DAC (discretionary access control), 259 filesystem permissions, 260–261 least privilege, 260 MAC (mandatory access control), 259 MIC (Mandatory Integrity Control), 259 RBAC (role-based access control), 259 RuBAC/RBAC (rule-based access control), 260 time-of-day restrictions, 260 access controls, OWASP proactive controls and, 148 access restrictions, 13 accounts administrative accounts, 256 credentials, 256 deprovisioning, 257–258 generic accounts, 256 guest accounts, 257 PAM (privileged access management), 258 permission creep, 257 privileged accounts, 256 provisioning, 257–258 service accounts, 257 shared, 256 user accounts, 256 ACLs (access control lists), 399 administrative accounts, 256 AES (Advanced Encryption Standard), 209 AH (authentication header), 410 AI (artificial intelligence), 345 alarms/alarm systems, 288 algorithms, 201 MD5, 216 SHA (Secure Hash Algorithm), 215 alteration (DAD triad), 4 answers to review questions access management, 605–607 application security, 602–603 cloud computing, 609–611 compliance, 624–626 digital forensics, 621–624 endpoint security, 611–614 governance, 624–626 IR (incident response), 619–621 malicious code, 595–597 mobile devices, 616–619 monitoring, 619–621 network design, 614–616 password attacks, 597–600 physical security, 607–609 privacy, 626–628 resiliency, 607–609 risk management, 626–628 security assessments, 600–601 security professionals, 592–593 social engineering, 597–600 testing, 600–601 threat landscape, 593–595 virtualization, 609–611 wireless networks, 616–619 APIs (application programming interfaces) cloud networking, 325 security, 149 unprotected, 177 application resilience, 173 application security, cloud computing, 327 application testing, 99 applications, security controls code security, 171–173 input validation, 168–169 parameterized queries, 170 sandboxing, 171 WAFs (web application firewalls), 170 architectural considerations, 273–274 artificial intelligence (AI), 345 assessments, 128–129 asset criticality, vulnerability, 88–89 asset inventory, vulnerability, 88 asset management, 365–368 ASV (Approved Scanning Vendor), 95 asymmetric cryptography, 211–214 asymmetric cryptosystems, 197 asymmetric key algorithms communication links, 207 digital signatures, 206 key exchange, 207 key regeneration, 207 key requirements, 206 public key algorithms, 205 symmetric cryptography comparison, 207–208 users, removing, 207 asymmetric key management, 224–225 attacks blackmail, 31 brute-force attacks, 291 chaos, 31 disruptional, 31 environmental attacks, 291 ethical, 31 financial gain, 31 MITRE ATT&CK, 464–466 motivation, 31–32 philosophical beliefs, 31 political beliefs, 31 revenge, 31 RFID cloning attacks, 291 service disruption attacks, 31 surfaces, 32 wired networks, 32–33 war, 31 audits, 129–131 authentication biometrics facial recognition, 255 FAR (false acceptance rate), 255 fingerprints, 254–255 FRR (false rejection rate), 255 gait analysis, 255 IAPMR (Imposter Attack Presentation Match Rate), 255 iris recognition, 255 retina scanning, 255 ROC (receiver operating characteristic), 255 vein recognition, 255 voice recognition, 255 CHAP (Challenge Handshake Authentication Protocol), 241 cryptography and, 190, 200 EAP (Extensible Authentication Protocol), 241 federation, 245–246 FIDO protocols, 252 IdP (identity provider), 245–246 Kerberos, 243 MFA (multifactor authentication), 251–252 passwords, 247–249 OTP (one-time passwords), 252–254 password managers, 249–250 passwordless authentication, 250–251 RADIUS (Remote Authentication Dial-In User Service), 241–242 TACACS+ (Terminal Access Controller Access Control System Plus), 242 authentication vulnerabilities password authentication, 156–157 session attacks, 157–160 authorization vulnerabilities, 160 directory traversal attacks, 161–162 file inclusion attacks, 163 insecure direct object reference, 161 privilege escalation attacks, 163–164 automation. See also SOAR (security orchestration, automation, and response) cloud networking, 324–325 availability (CIA triad), 3 cloud security, 325 cloud storage, 321 AVs (autonomous vehicles), 360 AWS (Amazon Web Services), 304 CloudFormation, 324 Lambda, 305 virtualized server, provisioning, 317 AWS C2S (Commercial Cloud Services), 307–308 AWS Outposts, 308–309 Azure, 304 B background checks, 536 backups, 276–280 bare-metal hypervisors, 314–315 BEC (business email compromise), 74 benchmarks, 549–550 BIA (business impact analysis), 578 biometrics, 254–256 facial recognition, 255 FAR (false acceptance rate), 255 FRR (false rejection rate), 255 gait analysis, 255 IAPMR (Imposter Attack Presentation Match Rate), 255 iris recognition, 255 retina scanning, 255 ROC (receiver operating characteristic), 255 vein recognition, 255 voice recognition, 255 BIOS (Basic Input/Output System), 342 birthday theorem attack, 226–227 black-hat hackers, 25 blackmail, 31 bloatware, 56–57 block ciphers, 202 Rijndael, 209 block storage, cloud computing, 319 blockchain, cryptography and, 229 Bluetooth, 428 bollards, 286 boot integrity, 342–344 boot sector viruses, 57 botnets, 53–54 bots, 53–54 BPDU (Bridge Protocol Data Unit), 389 brand impersonation, 75 breach notification, 585 broadcast storm prevention, 389 brute force attacks, 225 brute-force password attacks, 76 C C&C (command and control) techniques, 53–54 Caesar cipher, 191 CAM (content-addressable memory), 388 cameras, 289–290 capacity planning, 283–284 car as internet-connected device, 360 CAs (certificate authorities), 219–220 CASBs (cloud access security brokers), 329 CCE (Common Configuration Enumeration), 97 CCM (Cloud Controls Matrix), 312–313 CCTV (closed-circuit television), 290 CD (continuous deployment), 147 certificates CAs (certificate authorities), 219–220 certificate pinning, 222 certificate stapling, 223 CRLs (certificate revocation lists), 221, 222 CSR (Certificate Signing Request), 221 DER (Distinguished Encoding Rules), 223 destruction, 220–223 digital certificates, 218–219 DV (Domain Validation), 221 enrollment, 220–221 EV (Extended Validation), 221 formats, 223–224 generating, 220–223 OCSP (Online Certificate Status Protocol), 221, 222 PEM (Privacy Enhanced Mail), 223 PFX (Personal Information Exchange), 224 revocation, 222–223 verification, 221–222 change management, 531 documentation, 535 firewalls and, 531 impact, technical, 534 impact analysis, 532 maintenance windows, 533 SOP (standard operating procedure), 532–534 version control, 534–535 chaos attacks, 31 CHAP (Challenge Handshake Authentication Protocol), 241 chosen plain text attacks, 226 CI (continuous integration), 147 CIA triad, 3 ciphers block ciphers, 202 Rijndael, 209 Caesar cipher, 191 polyalphabetic substitution, 192 Vigenère cipher, 192–193 ROT13 cipher, 191 stream ciphers, 202 substitution, 191–192 transposition, 193–194 ciphertext, 201 CISA (Cybersecurity & Infrastructure Security Agency), 36, 130–131 CLE (Column-level Encryption), 199 clean desk policies, 536 closed-source intelligence, 38–39 cloud backups, 278–280 cloud computing, 300 agility, 302 answers to review questions, 609–611 auditors, 303 benefits, 301–302 carriers, 303 CASBs (cloud access security brokers) API-based solutions, 329 inline solutions, 329 CCM (Cloud Controls Matrix), 312–313 Cloud Reference Architecture, 312 compute resources, 316–318 consumers, 303 CSA (Cloud Security Alliance), 312 deployment models community cloud, 308 hybrid cloud, 308–309 private cloud, 307 public cloud, 307 edge computing, 314 elasticity, 302 flexibility, 302 fog computing, 314 HSMs (hardware security modules), 330–331 infrastructure hardening, 328–331 IoT (Internet of Things), 312–313 measured service, 302 multitenancy, 301 on-demand computing, 301 oversubscription, 301 partners, 303 resource policies, 329–330 roles, 303 scalability, 301–302 self-service computing, 301 service models, 303 FaaS (function as a service), 305 IaaS (infrastructure as a service), 304 PaaS (platform as a service), 304 SaaS (software as a service), 304 service providers, 303 shared responsibility model, 309 PaaS, 311 PCI DSS, 312 responsibility matrix, 309 SaaS, 311 Cloud Controls Matrix (CCM), 312–313 cloud forensics, 496–497 cloud networking APIs (application programming interfaces), 325 automation, 324–325 DevOps, 324–325 IaC (infrastructure as code), 324 SDN (software-defined networking), 322 SDV (software-defined visibility), 322 security groups, 322–323 segmentation, 323 transit gateways, 323 VLANs (virtual LANs), 323 VPC (virtual private cloud), 323 Cloud Reference Architecture, 312 cloud security applications, 327 availability, 325 data sovereignty, 326 third-party vendors, 328 VM (virtual machine) escape, 327 Cloud Security Alliance (CSA), 312 cloud storage, 319–321 CloudFormation, 324 COBIT (Control Objectives for Information and related Technologies), 130–131 code repositories, 172–173 code security, 172–173 coding practices APIs, unprotected, 178 credentials, hard coded, 175 error handling, 174–175 memory management, 176–177 OWASP proactive controls, 148 package monitoring, 175 race conditions, 177 source code, comments, 174 collisions, 208 communications, 363–364 communication links, asymmetric key algorithms, 207 community cloud, 308 compensating security controls, 9, 529–530 competitor attackers, 30–31 compliance acknowledgment, 543 answers to review questions, 624–626 attestation, 543 consequences of noncompliance, 542–543 data breach notification laws, 541 due care, 543 due diligence, 543 FERPA (Family Educational Rights and Privacy Act), 541 GDPR (General Data Protection Regulation), 541 GLBA (Gramm-Leach-Bliley Act), 541 HIPAA (Health Insurance Portability and Accountability Act), 541 monitoring, 542–543 PCI DSS (Payment Card Industry Data Security Standard), 541 reporting, 541–542 SOX (Sarbanes-Oxley), 541 compliance risk, data breach, 6–7 compute resources (cloud computing), 316–318 confidentiality, cryptography and, 190 asymmetric cryptosystems, 197 data at rest, 198–199 data in transit, 198 data in use, 198 obfuscation, 198 symmetric cryptosystems, 197 confidentiality (CIA triad), 3 continuity of operations, 272 continuous monitoring, CI/CD and, 147 continuous validation, CI/CD and, 147 control objectives, 7 corporate governance, 518–519 corrective security controls, 9 CPE (Common Platform Enumeration), 98 credentials accounts, 256 hard coded, 175 CRLs (certificate revocation lists), 221, 222 CRM (customer relationship management), 304 cryptanalysis, 202 cryptocurrency, 229 cryptographic attacks birthday theorem, 226–227 brute force, 225 chosen plain text, 226 downgrade attack, 227 frequency analysis, 225 human error, exploiting, 228–229 key stretching, 228 keys, weak, 228 known plain text, 226 rainbow table, 227–228 related key attack, 226 salting, 228 cryptographic secrecy, 202–203 cryptography, 190 algorithms, 201 answers to review questions, 604–605 asymmetric, 211–214 asymmetric key algorithms, 205–208 asymmetric key management, 224–225 authentication and, 190, 200 blockchain and, 229 ciphers, 191–194, 202 confidentiality and, 190, 197–199 cryptocurrency, 229 cryptographic secrecy, 202–203 cryptovariables, 201 decryption, 190 digital signatures, 216–218 Enigma machine, 194–195 hash functions, 214–215 hashing algorithms, 208 history, 191–196 homomorphic encryption, 230 integrity and, 190, 199 key length, 201 key space, 201 keys, 201 lightweight, 230 MD5, 216 non-repudiation and, 190, 200 open public ledger, 229 perfect forward secrecy, 229 public key cryptosystems, 211 quantum computing, 230–231 SHA (Secure Hash Algorithm), 215 steganography, 195–196 symmetric, 208–211 symmetric key algorithms, 204–205 Tor and, 229 cryptology, 202 cryptosystems, 202 cryptovariables, 201 CSA (Cloud Security Alliance), 312 CSR (Certificate Signing Request), 221 CSRF/XSRF (cross-site request forgery), 167 CVE (Common Vulnerabilities and Exposures), 35, 98 CVSS (Common Vulnerability Score System), 98, 104 A (availability metric), 106 AV (attack vector metric), 104 base score, 109–110 C (confidentiality metric), 105 CVSS vector interpretation, 107–108 exploitability score, 109 I (integrity metric), 106 impact score, 109 ISS (Impact Sub-Score), 108 PR (privileges required metric), 104–105 S (scope metric), 107 UI (user interaction metric), 105 cybersecurity, objectives, 2–3 D DAC (discretionary access control), 259 dark web, 30, 37 data at rest, 10 encryption, 198–199 data breaches, 3 compliance risk, 6–7 DAD triad, 4–5 financial risk, 5 identity theft, 6 notification laws, 541 operational risk, 6 reputational risk, 5–6 strategic risk, 6 data controllers, 582 data custodians, 582 data encoding, OWASP proactive controls and, 148 data exfiltration, 4 motivation, 31 data in transit, 10, 198 data in use, 11, 198 data inventory, 579 data loss, 4 data loss prevention (DLP), 347–348 data masking, 584 data minimization, 12–13 data processors, 582 data protection, 10–13 data sovereignty, cloud security, 326 data stewards, 582 data subjects, 582 databases access, OWASP proactive controls and, 148 encryption, 199 CLE (Column-level Encryption), 199 record-level, 199 TDE (Transparent Data Encryption), 199 vulnerability databases, 35 DDoS (distributed denial-of-service), 415 network DDoS, 415–418 decryption, 190 defensive penetration testing, 122 denial (DAD triad), 4 deprovisioning accounts, 257–258 DER (Distinguished Encoding Rules), 223 DES (Data Encryption Standard), 208 3DES (Triple DES), 208 detective security controls, 9 deterrent security controls, 9 development environment (SDLC), 145 development phases (SDLC), 144–145 DevOps, 146 cloud networking, 324–325 DevSecOps, 146 DHCP (Dynamic Host Configuration Protocol), 390 dictionary password attacks, 76 digital certificates, 218–219 digital forensics, 490–491 answers to review questions, 621–624 case example, 503–507 data acquisitions, 493–499 data integrity validation, 500–502 data recovery, 502–503 e-discovery, 491–492 forensic suites, 503–507 intelligence and, 508 legal holds, 491–492 reports, 507 digital identity, OWASP proactive controls and, 148 digital signatures, 199 asymmetric key algorithms, 206 HMAC (Hash-Based Message Authentication Code), 217–218 directive security controls, 9 directory traversal attacks, 161–162 disaster recovery, 283–284 disclosure (DAD triad), 4 disinformation, social engineering, 72–73 disk backups, 278 disruptional attacks, 31 DKIM (DomainKeys Identified Mail), 401 DLLs (dynamically linked libraries), injection attacks, 155 DLP (data loss prevention), 347–348, 395 agent-based, 11 pattern matching, 12 watermarking, 12 DMARC (Domain-based Message Authentication Reporting and Conformance), 401 DNS (Domain Name System), 401 documentation, change management, 535 downgrade attack, 227 DRM (digital rights management), 12, 55 drones, 286, 360 DRP (disaster recovery planning), 577–578 durability, cloud storage, 321 DV (Domain Validation), certificates, 221 dynamic code analysis, 150 E e-discovery, 491–492 EAP (Extensible Authentication Protocol), 241, 440–441 EAP-TLS, 241 EAP-TTLS, 241 edge computing, 314 EDR (endpoint detection and response) tools, 346–347 EDRM (Electronic Discovery Reference Model), 491–492 elasticity, 173 cloud computing, 302 elliptic curve cryptography, 213–214 email security, 401–403 email viruses, 57 embedded systems, 358–359 encryption, 11 CLE (Column-level Encryption), 199 cloud computing, 321 data at rest, 198–199 database, 199 homomorphic, 230 operating system hardening, 357–358 record-level, 199 SED (self-encrypting drive), 358 TDE (Transparent Data Encryption), 199 vulnerabilities, 117–118 end-of-life hardware, 341 endpoints, 341 allow lists, 346 answers to review questions, 611–614 antimalware, 344–346 antivirus software, 344–346 boot integrity and, 342–344 deny lists, 346 DLP (data loss prevention), 347–348 EDR (endpoint detection and response) tools, 346–347 hardening, 350–352 HIDS (host-based intrusion detection system), 349 network defenses, 348–349 security tools, 344–349 XDR (extended detection and responsive) tools, 347 Enigma machine, 194–195 enrollment, certificates, 220–221 enterprise resource planning (ERP), 304 EOL (end of life), product, 540 EOSL (end of service life), 540 ephemeral accounts, 258 ephemeral keys, 403–404 ERM (enterprise risk management), 563 ERP (enterprise resource planning), 304 error handling, 174–175 OWASP proactive controls and, 148 ESP (Encapsulating Security Payload), 410 espionage, 31 ethical attacks, 31 EUROPOL (European Union Agency for Law Enforcement Cooperation), 28 EV (Extended Validation) certificates, 221 exception handling, OWASP proactive controls and, 148 exception processes, 529–530 exploitation frameworks, 126 exposed key pairs, 240 extended detection and responsive (XDR), 347 external audits, 129–130 F FaaS (function as a service), 305 facial recognition, 255 failover exercises, resilience testing, 285 FAR (false acceptance rate), biometrics, 255 FDE (full-disk encryption), 198 operation system hardening, 357–358 fences, 286 FERPA (Family Educational Rights and Privacy Act), 541 FIDO (Fast IDentity Online), 252 file and code repositories, 35 file inclusion attacks, 163 file integrity monitors, 405 file-level encryption, 198 filesystem permissions, 260–261 financial gain attacks, 31 financial risk of data breach, 5 fire suppression systems, 288 firewalls change management and, 531 host-based, 348 NGFW (next-generation firewall), 397 stateful, 397 stateless, 397 UTM (unified threat management), 397–398 WAFs (web application firewalls), 170 firmware attacks, 340 UEFI (Unified Extensible Firmware Interface) firmware, 342 fitness trackers, 363 flash media backups, 278 fog computing, 314 frameworks benchmarks, 549–550 ISO (International Organization for Standardization), 547–549 NIST (National Institute of Standards and Technology), 544–547 OWASP proactive controls and, 148 secure configuration guides, 549–550 frequency analysis attacks, 225 FRR (false rejection rate), biometrics, 255 FTP (File Transfer Protocol), vulnerabilities, 116–117 FTPS (FTP-Secure), 116–117 fuzz testing, 151 G gait analysis, 255 gap analysis, 7–8 GCP (Google Cloud Platform), 304 GDPR (General Data Protection Regulation), 541 generic accounts, 256 geographic restrictions, 13 GLBA (Gramm-Leach-Bliley Act), 541 Google Cloud Platform (GCP), 304 governance answers to review questions, 624–626 centralized models, 521 compensating controls, 529–530 corporate, 518–520 decentralized models, 521 exceptions, 529–530 GRC (governance, risk, and compliance) program, 520 guidelines, 528–529 information security, 520–521 policy documents, 521–531 policy monitoring, 530–531 procedures, 526–528 standards, 524–526 GPOs (Group Policy Objects), 354 GPS (Global Positioning System), 430 gray-hat hackers, 25 guest accounts, 257 guidelines, 528–529 H hackers black hats, 25 gray hats, 25 white hats, 24 hactivists, 26–27 hardening endpoints, 350–352 mobile devices, 444 network devices, 405 operating system, 353–358 hashing, 77, 584 hashing algorithms, 208 HathiTrust digital library, 308 HIDS (host-based intrusion detection system), 349 HIPAA (Health Insurance Portability and Accountability Act), 541 HIPS (host-based intrusion prevention system), 348–349 HMAC (Hash-Based Message Authentication Code), 217–218 homomorphic encryption, cryptography, 230 honeyfiles, 400 honeypots, 399–400 honeytokens, 400 horizontal scalability, 281 host-based firewalls, 348 HOTP (HMAC-based one-time password), 252–253 HSMs (hardware security modules), 330–331, 343–344 asymmetric key management, 225 human error, exploiting, 228–229 hybrid cloud, 308–309 hypervisors Type I (bare-metal), 314–315 Type II, 315 I IaaS (infrastructure as a service), 304 IaC (infrastructure as code), 324 IAPMR (Imposter Attack Presentation Match Rate), biometrics, 255 ICSs (industrial controls systems), 361–362 identity, 239–240, 605–607 identity proofing, 257 identity theft, 6 IdP (identity provider), 245–246 IDSs (intrusion detection systems), 94, 395–397 IM (instant messaging), 32 images, 277 IMAP (Internet MEssage Access Protocol), 409 impact analysis, 532 impersonation, social engineering, 73–74 incident response. See IR (incident response) information classification Confidential, 580 Secret, 580 Top Secret, 580 Unclassified, 580 information life cycle, 583 infrared sensors, 290 injection vulnerabilities code injection attacks, 155 command injection attacks, 155–156 SQL injection (SQLi) attacks, 151–155 input validation, 168–169 insecure direct object reference attacks, 161 insider attacks, 29–30 integrated penetration testing, 122 integrity, cryptography and, 190 digital signatures, 199 integrity (CIA triad), 3 integrity measurement, 173 intelligence community, private cloud model, 307–308 internal audits, 129 interoperability, 246 IoCs (indicators of compromise), 35 keyloggers, 59 ransomware, 51 rootkits, 61 spyware, 56 Trojans, 53 IOCTA (Internet Organized Crime Threat Assessment), 28 IoT (Internet of Things), 312–313, 362–363 IPSec (Internet Protocol Security), 410 IPSs (intrusion prevention systems), 94, 395–397 IPv6, 403–404 IR (incident response), 457 answers to review questions, 619–621 attacks, MITRE ATT&CK, 464–466 benchmarks, 478 building response plans, 461–462 computing resources monitoring, 466 containment, 479–482 exercises, 460–461 IR team, 459–460 logging, 478 metadata, 476–478 policies, 462 process, 458–459 analysis, 459 containment, 459 detection, 458 eradication, 459 preparation, 459–462 recovery, 459 reporting, 478 SIEM, 466–467 alarms, 469–470 alerts, 469–470 dashboards, 467 log files, 471–475 logging protocols, 475–476 logs, 470 rules, 471 sensitivity, 468 sensors, 467–468 thresholds, 468 trends, 469 SOAR, 479 threat hunting, 463–464 training, 462–463 IR (infrared), 431 iris recognition, 255 ISACs (Information Sharing and Analysis Centers), 41–42 isolation, 13 J JIT (just-in-time) permissions, 258 job rotation, 536 journaling, 276 JSON (JavaScript Object Notation), 324 K KDCs (key distribution centers), 243 Kerberos, 243 KDCs (key distribution centers), 243 TGT (ticket-granting ticket), 243 key escrow, 211 key exchange asymmetric key algorithms, 207 symmetric cryptography, 204 key management practices, 209, 344 key pairs, 240 key recovery, 211 key regeneration, asymmetric key algorithms, 207 key requirements, asymmetric key algorithms, 206 key stretching, 228 keyloggers, 59 keys, weak, 228 known environment tests, 122 known plain text attacks, 226 L Lambda, 305 LDAP (Lightweight Directory Access Protocol), 244 injection attack, 155 LEAP, 241 least privilege, 535 legacy hardware, 341 legal holds, 491–492 libraries, OWASP proactive controls and, 148 lighting, 286 lightweight cryptography, 230 LM (LAN Manager), 249 locks, 289 logging, OWASP proactive controls and, 148 logic bombs, 60 logical segmentation, 381 loop prevention, 389 lost key pairs, 240 M MAC (mandatory access control), 259 machine learning (ML), 345 macro viruses, 57 maintenance windows, 533 malicious code, answers to review questions, 595–597 malicious updates, code signing and, 172 malware, 50 analyzing, 60 antimalware, 344–346 bloatware, 56–57 C&C techniques, 53–54 keyloggers, 59 logic bombs, 60 ransomware, 51 rootkits, 60–61 spyware, 55–56 stalkerware, 55 Trojans, 52–54 viruses, 57–58 worms, 54–55 MAM (mobile application management) tools, 445–448 managed security service providers (MSSPs), 306 managed service providers (MSP), 305–306 managerial security controls, 8 mandatory vacations, 536 mantraps, 287–288 masking, 12 MD5 algorithm, 216 MDM (mobile device management), 445–448 measured service, cloud computing, 302 memory injection, 176 memory management, 176–177 memory-resident viruses, 57 message-based threat vectors, 32 MFA (multifactor authentication), 251–252 MFPs (multifunction printers), 360 MIC (Mandatory Integrity Control), 259 microSD cards, 278 Microsoft Azure, 304 microwave sensors, 291 misinformation, social engineering, 72–73 mitigation and recovery, 479–482 MITRE ATT&CK, 464–466 ML (machine learning), 345 mobile devices answers to review questions, 616–619 BYOD (bring your device), 442–444 CYOD (choose your device), 442–444 deployment methods, 442–444 hardening, 444 MAM (mobile application management) tools, 445–448 MDM (mobile device management), 445–448 monitoring answers to review questions, 619–621 OWASP proactive controls and, 148 motion recognition cameras, 290 MSP (managed service providers), 34, 305–306 MSSPs (managed security service providers), 306 multitenancy, cloud computing, 301 N NAC (network access control), 802.1X, 387–388 NAS (network-attached storage) device, 278 nation-state attackers, 28–29 NDAs (nondisclosure agreements), 537, 540 nearline backups, 278 network attacks, 410 credential replay, 414–415 DDoS (distributed denial-of-service), 415–418 domain name system, 412–414 malicious code, 415 on-path, 411–412 network design, 377–378 ACLs (access control lists), 399 answers to review questions, 614–616 attack surface, 380 connectivity considerations, 380 deception technology, 399–400 device placement, 380 devices, hardening, 405 disruption technology, 399–400 DLP (data loss prevention), 395 DNS (Domain Name System), 401 email security, 401–403 failure modes, 380 file integrity monitors, 405 firewalls, 397–398 HA (high availability), 381 honey pots, 399–400 honeyfiles, 400 honeytokens, 400 IDSs (intrusion detection systems), 395–397 infrastructure considerations, 380 inline network devices, 396 IPSs (intrusion prevention systems), 395–397 jump servers, 392 load balancing, 393–394 management, 400–401 monitoring services, 404–405 NAC (network access control), 802.1X, 387–388 network taps, 380 OSI (Open Systems Interconnection) model, 378–380 out-of-band management, 400–401 physical isolation, 381 port security, 388–390 protocols email-related, 409 file transfer, 410 implementing, 381–382 proxy servers, 394 reputation services, 382 SASE (Secure Access Service Edge), 383 SD-WAN (software-defined wide area network), 383 SDN (software-defined networking), 382 security, 400–401 security zones, 380 segmentation, 383–384 logical, 381 selection of effective controls, 377 services, 400–401 SNMP (Simple Network Management Protocol), 404 taps, 396 TLS (Transport Layer Security), 403–404 VPNs (virtual private networks), 390–391 web filters, 394–395 zero trust, 385–387 network hardening, 352 networks, protocols, secure, using, 406–407 NFC (near-field communication), 430–431 NIST (National Institute of Standards and Technology), 209 non-repudiation, 3 cryptography and, 190, 200 symmetric cryptography, 204 O OAuth, 245 obfuscation, 198 object recognition cameras, 290 object storage, cloud computing, 320 OCSP (Online Certificate Status Protocol), 221, 222 OEM (original equipment manufacturer), 342 off-site storage of backups, 279 considerations, 279–280 offboarding, 536 offensive penetration testing, 122 on-demand computing, cloud, 301 on-path attacks, 159 onboarding, 536 open public ledger, cryptography, 229 OpenID, 245 operating system hardening, 353–358 vulnerabilities, 339–340 operational risk of data breach, 6 operational security controls, 8 optical media backups, 278 orchestration. See SOAR (security orchestration, automation, and response) organized crime attackers, 27–28 OSI (Open Systems Interconnection) model, 378–380 OSINT (open source threat intelligence), 35–37 OTP (one-time passwords), 252–254 OVAL (Open Vulnerability and Assessment Language), 98 oversubscription, cloud computing, 301 OWASP (Open Worldwide Application Security Project), proactive controls, 148 P PaaS (platform as a service), 304 package monitoring, 175 PAM (privileged access management), 258 parallel processing exercises, resilience testing, 284–285 parameter pollution, 169 parameterized queries, 170–171 partially known environment tests, 123 partition encryption, 198 password spraying password attacks, 76 passwords, 247–249 attacks, 76–78, 597–600 endpoint hardening, 352 OTP (one-time passwords), 252–254 password managers, 249–250 passwordless authentication, 250–251 vaulting, 258 pattern matching, 12 PCI DSS (Payment Card Industry Data Security Standard), 9–10, 541 PEM (Privacy Enhanced Mail), 223 penetration testing, 118–119 benefits, 120–121 cleanup, 126 defensive, 122 hacker mindset, 119–120 integrated, 122 known environment tests, 122 offensive, 122 partially known environment tests, 123 physical, 121–122 reasons for, 120 reconnaissance, 125 RoE (rules of engagement), 123–124 running test, 125–126 threat hunting, 121 unknown environment tests, 122 perfect forward secrecy, cryptography, 229 permission creep, 257 permission restrictions, 13 permissions, cloud storage, 321 persistent XSS (cross-site scripting), 165–167 personnel management, 535–537 PFX (Personal Information Exchange), 224 philosophical belief attacks, 31 phishing, 72 physical penetration testing, 121–122 physical security controls, 8 answers to review questions, 607–609 attack detection, 291 site security, 285–291 PKI (public key infrastructure) answers to review questions, 604–605 CAs (certificate authorities), 219–220 certificates certificate pinning, 222 certificate stapling, 223 CRLs (certificate revocation lists), 222 CSR (Certificate Signing Request), 221 DER (Distinguished Encoding Rules), 223 destruction, 220–223 DV (Domain Validation), 221 enrollment, 220–221 EV (Extended Validation), 221 formats, 223–224 generating, 220–223 OCSP (Online Certificate Status Protocol), 222 PEM (Privacy Enhanced Mail), 223 PFX (Personal Information Exchange), 224 revocation, 222–223 verification, 221–222 digital certificates, 218–219 plain-text messages, 200 policies, 522–524 monitoring, 530–531 policy administrators, 385 policy documents, 521 policies, 522–524 policy of enforcement point, 385 political belief attacks, 31 polyalphabetic substitution cipher, 192 Vigènere cipher, 192–193 POP (Post Office Protocol), 409 pressure sensors, 290–291 pretexting, social engineering, 74 preventive security controls, 9 printers, 360 privacy, 578–579 answers to review questions, 626–628 breach notification, 585 data inventory, 579–580 data roles and responsibilities, 581–582 enhancing techniques, 584 information classification, 580–581 information life cycle, 583–584 private cloud model, 307 AWS C2S (Commercial Cloud Services), 307–308 intelligence community and, 307–308 private key cryptography, 204 privilege escalation attacks, 163–164 privileged accounts, 256 procedures, 526–528 production environment (SDLC), 146 proprietary threat intelligence, 38–39 protocols DNSSEC (Domain Name System Security Extension), 408 email-related, 409 file transfer, 410 HTTPS (Hypertext Transfer Protocol over SSL), 409 implementing, 381–382 IPSec (Internet Protocol Security), 410 LDAPS (Secure Lightweight Directory Access Protocol), 409 secure, using, 406–407 SNMPv3 (Simple Network Management Protocol version 3), 408 SRTP (Secure Real-Time Protocol), 409 SSH (Secure Shell), 408 provisioning accounts, 257–258 proxy servers, 394 PTZ (pan/tilt/zoom), cameras, 290 public cloud model, 307, 308 public key algorithms, asymmetric key algorithms, 205 public key cryptosystems, 211 public key encryption. See PKI (public key infrastructure) Q qualitative risk analysis, 568–570 quantitative risk analysis, 567 quantum computing, 230–231 queries, parameterized queries, 170–171 R race conditions, 177 RADIUS (Remote Authentication Dial-In User Service), 241–242 RAID (redundant arrays of inexpensive disks), 274–275 rainbow table attacks, 227–228, 584 rainbow tables, 77 ransomware, IoCs (indicators of compromise), 51 RBAC (role-based access control), 259 RBAC/RuBAC (rule-based access control), 260 RCA (root cause analysis), 482 RDP (Remote Desktop Protocol), 316 reconnaissance, penetration testing, 125 record-level encryption, 199 recovery. See disaster recovery redirect attacks, unvalidated, 160 redundancy geographic dispersion, 272 high availability designs, 273 multipath solutions, 272 network devices, 272 PDUs (power distribution units), 273 platform diversity, 273 separation of servers, 272 UPS (uninterruptible power supply), 273 reflected XSS (cross-site scripting), 164–165 related key attack, 226 replication, 275–276 reporting forensic reports, 507 risk reporting, 576–577 repositories, file and code repositories, 35 reputation services, 382 reputational risk of data breach, 5–6 request forgery CSRF/XSRF (cross-site request forgery), 167 SSRF (server-side request forgery), 168 resilience answers to review questions, 607–609 capacity planning, 283–284 disaster recovery sites and, 282 RAID, 274–275 site considerations, 282 testing resilience, 284–285 response and recovery controls, 280 scalability, 281 restoration, 282 retina scanning, 255 revenge attacks, 31 revocation, certificates, 220–221 RFID (radio frequency identification), 429 access systems, 287 Rijndael block cipher, 209 risk acceptance, 573 risk analysis, 563 qualitative, 568–570 quantitative, 567–568 risks, 563 threats, 563 vulnerabilities, 563 risk assessment, 565–566, 570 risk avoidance, 572 risk identification, 564–565 risk management, 570–573 answers to review questions, 626–628 third-party, 538–540 third-party vendors, selection, 537 risk mitigation, 571–572 risk tracking inherent risk, 574 KRI (Key Risk Indicators), 574 residual risk, 574 risk appetite, 574–575 risk owner, 574 risk register, 575–576 risk reporting, 576–577 risk threshold, 574 risk tolerance, 574 risk transference, 572 ROC (receiver operating characteristic), biometrics, 255 rootkits, 60–61 ROT13 cipher, 191 RP (relying party), 246 RPOs (recovery point objectives), 276–277 RSA public key algorithm, 212–213 RTOS (real-time operating system), 359 RTOs (recovery time objectives), 276–277 RuBAC (rule-based access control), 260 S S/MIME (Secure/Multipurpose Internet Mail Extensions), 409 SaaS (software as a service), 304 salting, 228 SAML (Security Assertion Markup Language), 245 SAN (storage area network) device, 278 sandboxing, 171, 345 SASE (Secure Access Service Edge), 383 SCADA (Supervisory Control and Data Acquisition), 361–362 scalability, 173 cloud computing, 301–302 horizontal, 281 symmetric cryptography, 205 vertical, 281 SCAP (Security Content Automation Protocol), 97–98 script kiddies, 25–26 scripting, 178 SD-WAN (software-defined wide area network), 383 SDKs (software development kits), 172 SDLC (software development life cycle), 143–144 development environment, 145 development phases coding phase, 145 decommissioning phase, 145 design phase, 145 operations and maintenance phase, 145 planning phase, 144 requirements definition phase, 144 testing phase, 145 training and transition phase, 145 high-level view, 144 production environment, 146 staging environment, 146 test environment, 146 QA (quality assurance), 146 SDN (software-defined networking), 382 cloud computing, 322 SDV (software-defined visibility), cloud computing, 322 secret key cryptography, 204 Secure Enclave, 343 security assessments, 128–129 answers to review questions, 600–601 security audits, 129 security controls applications code security, 171–173 input validation, 168–169 parameterized queries, 170–171 sandboxing, 171 WAFs (web application firewalls), 170 compensating, 9 corrective, 9 detective, 9 deterrent, 9 directive, 9 gap analysis, 7–8 managerial controls, 8 operational controls, 8 physical controls, 8 preventive, 9 technical controls, 8 security groups, cloud networking, 322–323 security guards, 289 security incidents, 3 SED (self-encrypting drive), 358 segmentation, 13, 323 logical, 381 self-service computing, cloud, 301 SELinux, hardening, 355–356 sensors, 289 infrared, 290 microwave sensors, 291 pressure sensors, 290–291 ultrasonic sensors, 291 separation of duties, 535–536 serverless computing, 305 service accounts, 257 service disruption attacks, 31 service hardening, endpoints, 350–352 session attacks cookies and, 157–160 on-path attacks, 159 redirects, unvalidated, 160 session hijacking, 157 session replay attacks, 159 SFTP (Secure File Transfer Protocol), 116–117 SHA (Secure Hash Algorithm), 215 shadow IT, 29–30 shared accounts, 256 SIEM (security information and event management), 466–470, 530– 531 simulation exercises, resilience testing, 284 site security, 285–286 access badges, 287 alarms/alarm systems, 288 bollards, 286 cameras, 289–290 drones, 286 fences, 286 fire suppression systems, 288 lighting, 286 locks, 289 mantraps, 287–288 RFID access systems, 287 security guards, 289 sensors, 289–291 UAVs (unmanned aerial vehicles), 286 video surveillance, 289–290 visitor logs, 289 water-based sprinkler systems, 288 smishing, 72 SMS (Short Message Service), 32 snapshots, 277 SNMP (Simple Network Management Protocol), 404 SOAR (security orchestration, automation, and response), 178, 479 benefits, 179–180 use cases, 179 SOC (service organization controls), 130 social engineering, 70 answers to review questions, 597–600 authority and, 70 BEC (business email compromise), 74 brand impersonation, 75 consensus-based, 70 disinformation, 72–73 familiarity-based, 71 impersonation, 73–74 intimidation and, 70 misinformation, 72–73 passwords, 156 phishing, 72 pretexting, 74 scarcity, 71 smishing, 72 trust and, 71 typosquatting, 75–76 urgency and, 71 vishing, 72 watering hole attacks, 74 social media, 537 software diversity, 172 software security testing, 149–151 SOP (standard operating procedures), change management and, 532– 534 source code, comments, 174 SOX (Sarbanes-Oxley), 541 spear phishing, 72 SPF (Sender Policy Framework), 401 split knowledge, 211 spyware, 55–56 SSH (Secure Shell), 116 SSL (secure sockets layer), 403–404 SSO (single sign-on), 241 OAuth, 245 OpenID, 245 SAML (Security Assertion Markup Language), 245 systems, 244–245 SSRF (server-side request forgery), 168 staging environment (SDLC), 146 stalkerware, 55 standards, 524–526 static code analysis, 150 steganography, 195–196 STIX (Structured Threat Information eXpression), 41 storage cloud, 319–321 resiliency, 274–280 stored procedures, parameterized queries and, 171 stored XSS (cross-site scripting), 165–167 strategic risk of data breach, 6 stream ciphers, 202 Stuxnet attack, 54 substitution cipher, 191–192 sufficient entropy, asymmetric key management and, 224 surveillance systems, 360 SWGs (secure web gateways), 327 symmetric cryptography AES (Advanced Encryption Standard), 209 algorithms, asymmetric key algorithms comparison, 207–208 DES (Data Encryption Standard), 208 key management practices, 209 symmetric key management destruction, 211 Diffie-Hellman, 210 key escrow, 211 key exchange, 209 key recovery, 211 offline distribution, 209 public key encryption, 210 storage, 211 symmetric cryptosystems, 197 T tabletop exercises, resilience testing, 284 TACACS+ (Terminal Access Controller Access Control System Plus), 242 tape backups, 278 TAXII (Trusted Automated eXchange of Intelligence), 41 TDE (Transparent Data Encryption), 199 technical security controls, 8 test environment (SDLC), 146 QA (quality assurance), 146 testing answers to review questions, 600–601 penetration testing, 118–119 benefits, 120–121 cleanup, 126 defensive, 122 exploitation frameworks, 126 hacker mindset, 119–120 initial access, 126 integrated, 122 known environment tests, 122 lateral movement, 126 offensive, 122 partially known environment tests, 123 persistence, 126 physical, 121–122 pivoting, 126 privilege escalation, 126 reasons for, 120 reconnaissance, 125 RoE (rules of engagement), 123–125 running test, 125–126 unknown environment tests, 122 resilience failover exercises, 285 parallel processing exercises, 284–285 simulation exercises, 284 tabletop exercises, 284 security tests, 127–128 software security, 149 dynamic code analysis, 150 fuzzing, 151 static code analysis, 150 third-party audits, 130 third-party backups, considerations, 279–280 third-party vendors agreements, 538–539 assessment, 538 monitoring, 539–540 relationship end, 540 selection, 537 threat hunting, 121, 463–464 threat indicators, 40–41 threat intelligence assessing, 39–40 closed-source, 38–39 confidence level, 40 information sharing organizations, 41–42 open source (OSINT), 35–37 proprietary, 38–39 threat vectors cloud services, 34 files, 33 images, 33 message-based, 32 removable devices, 33–34 systems, 33 threats, 23, 563 actors competitors, 30–31 hactivists, 26–27 insider attacks, 29–30 nation-state attackers, 28–29 organized crime, 27–28 script kiddies, 25–26 unskilled, 25–26 answers to review questions, 594–595 attack surfaces, 32 supply chain, 34 wired networks, 32–33 wireless networks, 33 attacks, motivations, 31–32 capability, 24 external, 24 funding, 24 intent, 24 internal, 24 motivation, 24 resources, 24 sophistication, 24 zero-day attacks, 29 Titan USB security key, 251 TLS (Transport Layer Security), 403–404 tokenization, 12, 584 Tor, cryptography and, 229 TOTP (time-based one-time passwords), 252 TPM (Trusted Platform Module), 342–343 training and awareness, 550–554 transit gateways, 323 transposition cipher, 193–194 Trojans, 52–54 Trusted Platform Module (TPM), 342–343 TTPs (tactics, techniques, and procedures), 42 Type I (bare-metal) hypervisors, 314–315 Type II hypervisors, 315 typosquatting, 75–76 U UAVs (unmanned aerial vehicles), 286 UEFI (Unified Extensible Firmware Interface) firmware, 342 ultrasonic sensors, 291 unknown environment tests, 122 unskilled attackers, 25–26 unvalidated redirect, 160 URL (Uniform Resource Locator), 395 USB thumb drives, 278 user accounts, 256 users, removing, asymmetric key algorithms, 207 V variables, cryptovariables, 201 VDI (virtual desktop infrastructure), 277 vein recognition, 255 verification, certificates, 220–221 version control, 534–535 vertical scalability, 281 video surveillance, 289–290 Vigènere cipher, 192–193 virtualization, 316 answers to review questions, 609–611 hypervisors, 314–315 provisioning with AWS, 317 virtualization systems, 277 viruses antivirus software, 344–346 boot sector, 57 email, 57 fileless attacks, 57, 58 macro, 57 memory-resident, 57 payloads, 57 triggers, 57 vishing, 72 visitor logs, 289 VLANs (virtual LANs), 323 VMs (virtual machines), 277 escape, cloud security, 327 resource reuse, 327 sprawl, 327 voice recognition, 255 VoIP systems, 360 volume encryption, 199 VPC (virtual private cloud), 323 VPNs (virtual private networks), 390–391 vulnerabilities, 563 authentication password authentication, 156–157 session attacks, 157–160 authorization, 160 directory traversal attacks, 161–162 file inclusion attacks, 163 insecure direct object reference, 161 privilege escalation attacks, 163–164 debugging, 115–116 encryption, weak, 117–118 error messages, 115–116 exposure factor, 132 hardware, 340–341 injection vulnerabilities code injection attacks, 155 command injection attacks, 155–156 SQL injection (SQLi) attacks, 151–155 legacy platforms, 113–114 life cycle, 131–132 operating system, 339–340 patch management, 112–113 protocols, insecure, 116–117 weak configurations, 115 web applications request forgery, 167–168 XSS (cross-site scripting), 164–167 vulnerability databases, 35 vulnerability management asset criticality, 88–89 asset inventory, 88 scan frequency, 89–90 scan reports, 101–103 CVSS, 103–110 scan results false-positives, 111 reconciling, 111–112 scan targets, 87–89 scanner maintenance, 95–98 scanning tools, 98 application testing, 99 infrastructure vulnerability, 99 web application scanning, 99–101 vulnerability scans agent-based scanning, 94 scan perspective, 94 sensitivity levels, 91–92 server-based scanning, 94 supplementing, 93–94 vulnerability scanning, 87 ASV (Approved Scanning Vendor), 95 vulnerability scans scan perspective, 94 sensitivity levels, 91–92 supplementing, 93–94 W WAFs (web application firewalls), 170 war, cyberattacks, 31 war driving, 125 water-based sprinkler systems, 288 watering hole attacks, 74 watermarking, 12 web application vulnerabilities request forgery CSRF/XSRF, 167 SSRF, 168 XSS (cross-site scripting), 165–167 whaling, 72 white-hat hackers, 24 Wi-Fi, 427–428 Windows Group Policy, 354–355 Windows Registry, operating system hardening and, 354 wired networks, threats, 32–33 wireless networks, 426 access point security, 438 answers to review questions, 616–619 attacks Bluejacking, 433–434 Bluesnarfing, 433–434 disassociation, 434 evil twin, 432–433 jailbreaks, 435 jamming, 434 protocol attacks, 434–435 RF, 434–435 rogue access points, 432–433 sideloading, 435 authentication, protocols, 440–442 Bluetooth, 428 cellular, 427 controllers, 438 design, 435–438 EAP (Extensible Authentication Protocol), 440–441 GPS (Global Positioning System), 430 IR (infrared), 431 models, 431–432 NFC (near-field communication), 430–431 RFID (radio frequency identification), 429 Wi-Fi, 427–428 security standards, 438–440 WPA2, 438–440 worms Raspberry Robin, 55 Stuxnet, 54 WPA2, 439–440 WPA3, 439–440 X XCCDF (Extensible Configuration Checklist Description Format), 98 XDR (extended detection and responsive) tools, 347 XML (Extensible Markup Language), injection attack, 155 XSS (cross-site scripting), 165–167 Y YAML (YAML Ain't Markup Language), 324 Z zero trust, 385–387 zero-day attacks, 29 ZTA (zero-trust architecture), 385 Online Test Bank To help you study for your CompTIA Security+ certification exam, register to gain one year of FREE access after activation to the online interactive test bank—included with your purchase of this book! All of the chapter review questions and the practice tests in this book are included in the online test bank so you can practice in a timed and graded setting. Register and Access the Online Test Bank To register your book and get access to the online test bank, follow these steps: 1. Go to www.wiley.com/go/sybextestprep. You'll see the “How to Register Your Book for Online Access” instructions. 2. Click “here to register” and then select your book from the list. 3. Complete the required registration information, including answering the security verification to prove book ownership. You will be emailed a pin code. 4. Follow the directions in the email or go to www.wiley.com/go/sybextestprep. 5. Find your book on that page and click the “Register or Login” link with it. Then enter the pin code you received and click the “Activate PIN” button. 6. On the Create an Account or Login page, enter your username and password, and click Login or, if you don't have an account already, create a new account. 7. At this point, you should be in the test bank site with your new test bank listed at the top of the page. If you do not see it there, please refresh the page or log out and log back in. WILEY END USER LICENSE AGREEMENT Go to www.wiley.com/go/eula to access Wiley’s ebook EULA.`
  },
  {
    id: 334,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam A",
    question: `A company has hired a third-party to gather information about the company’s servers and data. This third-party will not have direct access to the company's internal network, but they can gather information from any other source. Which of the following would BEST describe this approach?`,
    choices: {
      A: `Vulnerability scanning`,
      B: `Passive reconnaissance`,
      C: `Supply chain analysis`,
      D: `Regulatory audit`
    },
    correct: "B",
    explanation: `Passive reconnaissance focuses on gathering as much information from open sources such as social media, corporate websites, and business organizations. Incorrect answers — A. Vulnerability scanning Some active reconnaissance tests will query systems directly to see if a vulnerability currently exists. C. Supply chain analysis A supply chain analysis will examine the security associated with a supplier, and the analysis will not provide any information regarding a company's own servers and data. D. Regulatory audit A regulatory audit is a detailed security analysis based on existing laws or private guidelines. A regulatory audit commonly requires access to internal systems and data.`
  },
  {
    id: 335,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam A",
    question: `A company's email server has received an email from a third-party, but the origination server does not match the list of authorized devices. Which of the following would determine the disposition of this message?`,
    choices: {
      A: `SPF`,
      B: `NAC`,
      C: `DMARC`,
      D: `DKIM`
    },
    correct: "C",
    explanation: `DMARC (Domain-based Message Authentication Reporting and Conformance) specifies the disposition of spam emails. The legitimate owner of the originating email domain can choose to have these messages accepted, sent to a spam folder, or rejected. Incorrect answers — A. SPF SPF (Sender Policy Framework) is a list of all authorized mail servers for a specific domain. All legitimate emails would be sent from one of the servers listed in the SPF configuration. B. NAC NAC (Network Access Control) is a way to limit network access to only authorized users. NAC is not commonly used to manage the transfer of email messages. D. DKIM DKIM (Domain Keys Identified Mail) provides a way to validate all digitally signed messages from a specific email server. DKIM does not determine how the receiving server categorizes these digitally signed messages.`
  },
  {
    id: 336,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam A",
    question: `Which of these threat actors would be MOST likely to attack systems for direct financial gain?`,
    choices: {
      A: `Organized crime`,
      B: `Hacktivist`,
      C: `Nation state`,
      D: `Shadow IT`
    },
    correct: "A",
    explanation: `An organized crime actor is motivated by money, and their hacking objectives are usually based around objectives that can be easily exchanged for financial capital. Incorrect answers — B. Hacktivist A hacktivist is focused on a political agenda and not commonly on a financial gain. C. Nation state Nation states are already well funded, and their primary objective is not usually based on revenue or income. D. Shadow IT Shadow IT describes part of the organization that works around the existing IT department to build their own applications and infrastructure.`
  },
  {
    id: 337,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam A",
    question: `A security administrator has examined a server recently compromised by an attacker, and has determined the system was exploited due to a known operating system vulnerability. Which of the following would BEST describe this finding?`,
    choices: {
      A: `Root cause analysis`,
      B: `E-discovery`,
      C: `Risk appetite`,
      D: `Data subject`
    },
    correct: "A",
    explanation: `The goal of a root cause analysis is to explain the ultimate cause of an incident. Once the cause is known, it becomes easier to protect against similar attacks in the future. Incorrect answers — B. E-discovery E-discovery relates to the collection, preparation, review, interpretation, and production of electronic documents. E-discovery itself is not involved with the research and determination of an attack's root cause. C. Risk appetite A risk appetite describes the amount of risk an organization is willing to take before taking any action to reduce that risk. Risk appetite is not part of a root cause analysis. D. Data subject A data subject describes any information relating to an identified or identifiable natural person, especially when describing or managing private information about the subject.`
  },
  {
    id: 338,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam A",
    question: `A city is building an ambulance service network for emergency medical dispatching. Which of the following should have the highest priority?`,
    choices: {
      A: `Integration costs`,
      B: `Patch availability`,
      C: `System availability`,
      D: `Power usage`
    },
    correct: "C",
    explanation: `Requests to emergency services are often critical in nature, and it's important for a dispatching system to always be available when a call is made. Incorrect answers — A. Integration costs When lives are on the line, the cost is not commonly the most important aspect of a system integration. B. Patch availability Although it's important to always keep systems patched, it's more important that a life saving service be available to those who might need it. D. Power usage Power usage is not usually the most important consideration when building a critical healthcare and emergency service infrastructure.`
  },
  {
    id: 339,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam A",
    question: `A system administrator receives a text alert when access rights are changed on a database containing private customer information. Which of the following would describe this alert?`,
    choices: {
      A: `Maintenance window`,
      B: `Attestation and acknowledgment`,
      C: `Automation`,
      D: `External audit`
    },
    correct: "C",
    explanation: `Automation ensures that compliance checks can be performed on a regular basis without the need for human intervention. This can be especially useful to provide alerts when a configuration change causes an organization to be out of compliance. Incorrect answers — A. Maintenance window A maintenance window describes the scheduling associated with the change control process. Systems and services generally have limited availability during a maintenance window. B. Attestation and acknowledgment With compliance, the process of attestation and acknowledgment is the final verification of the formal compliance documentation. An alert from an automated process would not qualify as attestation. D. External audit An external audit can be a valuable tool for verifying the compliance process, but an automated alert from a monitoring system would not be part of an external audit.`
  },
  {
    id: 340,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam A",
    question: `A security administrator is concerned about the potential for data exfiltration using external storage drives. Which of the following would be the BEST way to prevent this method of data exfiltration?`,
    choices: {
      A: `Create an operating system security policy to block the use of removable media`,
      B: `Monitor removable media usage in host-based firewall logs`,
      C: `Only allow applications that do not use removable media`,
      D: `Define a removable media block rule in the UTM`
    },
    correct: "A",
    explanation: `the use of removable media Removable media uses hot-pluggable interfaces such as USB to connect storage drives. A security policy in the operating system can prevent any files from being written to a removable drive. Incorrect answers — B. Monitor removable media usage in host-based firewall logs A host-based firewall monitors traffic flows and does not commonly log hardware or USB drive access. C. Only allow applications that do not use removable media File storage access options are not associated with applications, so it’s not possible to allow based on external storage drive usage. D. Define a removable media block rule in the UTM A UTM (Unified Threat Manager) watches traffic flows across the network and does not commonly manage the storage options on individual computers.`
  },
  {
    id: 341,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam A",
    question: `A company creates a standard set of government reports each calendar quarter. Which of the following would describe this type of data?`,
    choices: {
      A: `Data in use`,
      B: `Obfuscated`,
      C: `Trade secrets`,
      D: `Regulated`
    },
    correct: "D",
    explanation: `Reports and information created for governmental use are regulated by laws regarding the disclosure of certain types of data. Incorrect answers — A. Data in use Data in use describes information actively processing in the memory of a system, such as system RAM, CPU registers, or CPU cache. Government reports are static documents and are not actively being processed. B. Obfuscated Obfuscation describes the modification of data to make something understandable into something very difficult to understand. Information contained in a government report is relatively easy to understand and would not be considered obfuscated data. C. Trade secrets Trade secrets are the private details a company uses as part of their normal business processes, and these trade secrets are not shared with any other organization or business.`
  },
  {
    id: 342,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam A",
    question: `An insurance company has created a set of policies to handle data breaches. The security team has been given this set of requirements based on these policies: • Access records from all devices must be saved and archived • Any data access outside of normal working hours must be immediately reported • Data access must only occur inside of the country • Access logs and audit reports must be created from a single database Which of the following should be implemented by the security team to meet these requirements? (Select THREE)`,
    choices: {
      A: `Restrict login access by IP address and GPS location`,
      B: `Require government-issued identification during the onboarding process`,
      C: `Add additional password complexity for accounts that access data`,
      D: `Conduct monthly permission auditing ❍ E. Consolidate all logs on a SIEM ❍ F. Archive the encryption keys of all disabled accounts ❍ G. Enable time-of-day restrictions on the authentication server`
    },
    correct: "A",
    explanation: `E. Consolidate all logs on a SIEM, and G. Enable time-of-day restrictions on the authentication server Adding location-based policies will prevent direct data access from outside of the country. Saving log information from all devices and creating audit reports from a single database can be implemented through the use of a SIEM (Security Information and Event Manager). Adding a check for the time-of-day will report any access that occurs during non-working hours. 51 Incorrect answers — B. Require government-issued identification during the onboarding process Requiring proper identification is always a good idea, but it’s not one of the listed requirements. C. Add additional password complexity for accounts that access data Additional password complexity is another good best practice, but it’s not part of the provided requirements. D. Conduct monthly permission auditing No requirements for ongoing auditing were included in the requirements, but ongoing auditing is always an important consideration. F. Archive the encryption keys of all disabled accounts If an account is disabled, there may still be encrypted data that needs to be recovered later. Archiving the encryption keys will allow access to that data after the account is no longer in use.`
  },
  {
    id: 343,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam A",
    question: `A security engineer, is viewing this record from the firewall logs: UTC 04/05/2023 03:09:15809 AV Gateway Alert 136.127.92.171 80 -> 10.16.10.14 60818 Gateway Anti-Virus Alert: XPACK.A_7854 (Trojan) blocked. Which of the following can be observed from this log information?`,
    choices: {
      A: `The victim's IP address is 136.127.92.171`,
      B: `A download was blocked from a web server`,
      C: `A botnet DDoS attack was blocked`,
      D: `The Trojan was blocked, but the file was not`
    },
    correct: "B",
    explanation: `A traffic flow from a web server port number (80) to a device port (60818) indicates that this traffic flow originated on port 80 of the web server. A file download is one of the most common ways to deliver a Trojan, and this log entry shows that the file containing the XPACK.A_7854 Trojan was blocked. Incorrect answers — A. The victim’s IP address is 136.127.92.171 The format for this log entry uses an arrow to differentiate between the attacker and the victim. The attacker IP address is 136.127.92.171, and the victim’s IP address is 10.16.10.14. C. A botnet DDoS attack was blocked A botnet attack would not commonly include a Trojan horse as part of a distributed denial of service (DDoS) attack. D. The Trojan was blocked, but the file was not A Trojan horse attack involves malware that is disguised as legitimate software. The Trojan malware and the file are the same entity, so there isn’t a way to decouple the malware from the file.`
  },
  {
    id: 344,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam A",
    question: `A user connects to a third-party website and receives this message: Your connection is not private. NET::ERR_CERT_INVALID Which of the following attacks would be the MOST likely reason for this message?`,
    choices: {
      A: `Brute force`,
      B: `DoS`,
      C: `On-path`,
      D: `Deauthentication`
    },
    correct: "C",
    explanation: `An on-path attack is often associated with a third-party who is actively intercepting network traffic. This entity in the middle would not be able to provide a valid SSL certificate for a third-party website, and this error would appear in the browser as a warning. Incorrect answers — A. Brute force A brute force attack is commonly associated with password hacks. Brute force attacks would not cause the certificate on a website to be invalid. B. DoS A DoS (Denial of Service) attack would prevent communication to a server and most likely provide a timeout error. This error is not related to a service availability issue. D. Deauthentication Deauthentication attacks are commonly associated with wireless networks, and they usually cause disconnects and lack of connectivity. The error message in this example does not appear to be associated with a network outage or disconnection.`
  },
  {
    id: 345,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam A",
    question: `Which of the following would be the BEST way to provide a website login using existing credentials from a third-party site?`,
    choices: {
      A: `Federation`,
      B: `802.1X`,
      C: `EAP`,
      D: `SSO`
    },
    correct: "A",
    explanation: `Federation would allow members of one organization to authenticate using the credentials of another organization. Incorrect answers — B. 802.1X 802.1X is a useful authentication protocol, but it needs additional functionality to authenticate across multiple user databases. C. EAP EAP (Extensible Authentication Protocol) is an authentication framework commonly associated with network access control. EAP by itself does not provide the federation needed to authenticate users to a third-party access database. D. SSO SSO (Single Sign-On) describes the process of enabling a single authentication to grant access to many different network services. Obtaining login credentials from a third-party access database does not describe the process used by SSO.`
  },
  {
    id: 346,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam A",
    question: `A system administrator is working on a contract that will specify a minimum required uptime for a set of Internet-facing firewalls. The administrator needs to know how often the firewall hardware is expected to fail between repairs. Which of the following would BEST describe this information?`,
    choices: {
      A: `MTBF`,
      B: `RTO`,
      C: `MTTR`,
      D: `RPO`
    },
    correct: "A",
    explanation: `The MTBF (Mean Time Between Failures) is a prediction of how often a repairable system will fail. Incorrect answers — B. RTO RTO (Recovery Time Objectives) define a timeframe needed to restore a particular service level. C. MTTR MTTR (Mean Time to Restore) is the amount of time it takes to repair a component. D. RPO RPO (Recovery Point Objective) describes the minimum data or operational state required to categorize a system as recovered.`
  },
  {
    id: 347,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam A",
    question: `An attacker calls into a company’s help desk and pretends to be the director of the company’s manufacturing department. The attacker states that they have forgotten their password and they need to have the password reset quickly for an important meeting. What kind of attack would BEST describe this phone call?`,
    choices: {
      A: `Social engineering`,
      B: `Supply chain`,
      C: `Watering hole`,
      D: `On-path`
    },
    correct: "A",
    explanation: `This social engineering attack uses impersonation to take advantage of authority and urgency principles in an effort to convince someone else to circumvent normal security controls. Incorrect answers — B. Supply chain A supply chain attack focuses on the equipment or raw materials used to deliver products or services to an organization or user. A call to the help desk would not be categorized as part of the supply chain. C. Watering hole A watering hole attack uses a third-party site to perform attacks outside of a user's local (and usually more secure) network. D. On-path An on-path attack commonly occurs without any knowledge to the parties involved, and there’s usually no additional notification that an attack is underway. In this question, the attacker contacted the help desk engineer directly.`
  },
  {
    id: 348,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam A",
    question: `Two companies have been working together for a number of months, and they would now like to qualify their partnership with a broad formal agreement between both organizations. Which of the following would describe this agreement?`,
    choices: {
      A: `SLA`,
      B: `SOW`,
      C: `MOA`,
      D: `NDA`
    },
    correct: "C",
    explanation: `An MOA (Memorandum of Agreement) is a formal document where both sides agree to a broad set of goals and objectives associated with the partnership. Incorrect answers — A. SLA An SLA (Service Level Agreement) is commonly provided as a formal contract between two parties that documents the minimum terms for services provided. The SLA often provides very specific requirements and expectations between both parties. B. SOW An SOW (Statement of Work) is a detailed list of items to be completed as part of overall project deliverables. For example, a list of expected job tasks associated with a firewall installation would be documented in an SOW. D. NDA An NDA (Non-Disclosure Agreement) is a confidentiality agreement between parties. This question did not mention any requirement for privacy or confidentiality.`
  },
  {
    id: 349,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam A",
    question: `Which of the following would explain why a company would automatically add a digital signature to each outgoing email message?`,
    choices: {
      A: `Confidentiality`,
      B: `Integrity`,
      C: `Authentication`,
      D: `Availability`
    },
    correct: "B",
    explanation: `Integrity refers to the trustworthiness of data. A digital signature allows the recipient to confirm that none of the data has been changed since the digital signature was created. Incorrect answers — A. Confidentiality Confidentiality describes the privacy of data. Encrypting traffic sent over a VPN or encrypting files stored on a flash drive would be an example of data confidentiality. C. Authentication Authentication refers to the process of verifying the identity of an individual or system. A username and password is a common method of authentication, but digital signatures are not commonly used as an authentication method. D. Availability Availability describes the ability of an authorized user to access data. A digital signature does not provide any features associated with the availability of the data.`
  },
  {
    id: 350,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam A",
    question: `The embedded OS in a company’s time clock appliance is configured to reset the file system and reboot when a file system error occurs. On one of the time clocks, this file system error occurs during the startup process and causes the system to constantly reboot. Which of the following BEST describes this issue?`,
    choices: {
      A: `Memory injection`,
      B: `Resource consumption`,
      C: `Race condition`,
      D: `Malicious update`
    },
    correct: "C",
    explanation: `A race condition occurs when two processes occur at similar times, and usually with unexpected results. The file system problem can often be fixed before a reboot, but the reboot is occurring before the fix can be applied. This has created a race condition that results in constant reboots. Incorrect answers — A. Memory injection A memory injection is commonly used by malicious software to add code to the memory of an existing process. The issue in this question was related to a file system error and was not part of a malicious data injection. B. Resource consumption If the time clock was running out of storage space or memory, it would most likely be unusable. In this example, the issue isn’t based on a lack of resources. D. Malicious update A malicious update occurs when a software patch installs unwanted or unauthorized code. Many attackers will use software patches to install their own malicious code during a software update.`
  },
  {
    id: 351,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam A",
    question: `A recent audit has found that existing password policies do not include any restrictions on password attempts, and users are not required to periodically change their passwords. Which of the following would correct these policy issues? (Select TWO)`,
    choices: {
      A: `Password complexity`,
      B: `Password expiration`,
      C: `Password reuse`,
      D: `Account lockout ❍ E. Password managers`
    },
    correct: "B",
    explanation: `Password expiration would require a password change after the expiration date. An account lockout would disable an account after a predefined number of unsuccessful login attempts. Incorrect answers — A. Password complexity A complex password would make the password more difficult to brute force, but it would not solve the issues listed in this question. C. Password reuse Maintaining a password history would prevent the reuse of any previous passwords. Restricting password reuse would ensure that a different password is used each time a password change is processed. E. Password managers A password manager would provide a way to securely store and retrieve passwords, but it would not resolve any issues relating to password expirations or account lockouts.`
  },
  {
    id: 352,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam A",
    question: `What kind of security control is associated with a login banner?`,
    choices: {
      A: `Preventive`,
      B: `Deterrent`,
      C: `Corrective`,
      D: `Detective ❍ E. Compensating ❍ F. Directive`
    },
    correct: "B",
    explanation: `A deterrent control does not directly stop an attack, but it may discourage an action. Incorrect answers — A. Preventive A preventive control physically limits access to a device or area. C. Corrective A corrective control can actively work to mitigate any damage. D. Detective A detective control may not prevent access, but it can identify and record any intrusion attempts. E. Compensating A compensating security control doesn’t prevent an attack, but it does restore from an attack using other means. F. Directive A directive control is relatively weak control which relies on security compliance from the end users.`
  },
  {
    id: 353,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam A",
    question: `An internal audit has discovered four servers that have not been updated in over a year, and it will take two weeks to test and deploy the latest patches. Which of the following would be the best way to quickly respond to this situation in the meantime?`,
    choices: {
      A: `Purchase cybersecurity insurance`,
      B: `Implement an exception for all data center services`,
      C: `Move the servers to a protected segment`,
      D: `Hire a third-party to perform an extensive audit`
    },
    correct: "C",
    explanation: `Segmenting the servers to their own protected network would allow for additional security controls while still maintaining the uptime and availability of the systems. Incorrect answers — A. Purchase cybersecurity insurance Cybersecurity insurance can help plan for financial issues during a significant attack, but it wouldn't provide any assistance for mitigating potential vulnerabilities during this two week period. B. Implement an exception for all data center services Security exceptions should be rare, and they should be very specific to a small number of systems. It would be risky to create a broad security exception for systems which are not in-scope for the identified vulnerability. D. Hire a third-party to perform an extensive audit Audits take time, and hiring a third-party to perform an audit takes even longer. By the time a third-party audit was underway, the problematic systems would have already been tested and patched.`
  },
  {
    id: 354,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam A",
    question: `A business manager is documenting a set of steps for processing orders if the primary Internet connection fails. Which of these would BEST describe these steps?`,
    choices: {
      A: `Platform diversity`,
      B: `Continuity of operations`,
      C: `Cold site recovery`,
      D: `Tabletop exercise`
    },
    correct: "B",
    explanation: `It's always useful to have an alternative set of processes to handle any type of outage or issue. Continuity of operations planning ensures that the business will continue to operate when these issues occur. Incorrect answers — A. Platform diversity Using different operating systems and platforms can help mitigate issues associated with a single OS, but it wouldn't provide any mitigation if the primary Internet connection was no longer available. C. Cold site recovery A cold site takes time to build, and the time and expense associated with a disaster recovery switchover would be extensive. By the time a cold site was enabled, the primary Internet connection may already be restored and many alternative recovery options could have potentially been deployed. D. Tabletop exercise A tabletop exercise usually consists of a meeting where members of a recovery team or disaster recovery talk through a disaster scenario.`
  },
  {
    id: 355,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam A",
    question: `A company would like to examine the credentials of each individual entering the data center building. Which of the following would BEST facilitate this requirement?`,
    choices: {
      A: `Access control vestibule`,
      B: `Video surveillance`,
      C: `Pressure sensors`,
      D: `Bollards`
    },
    correct: "A",
    explanation: `An access control vestibule is a room designed to restrict the flow of individuals through an area. These are commonly used in high security areas where each person needs to be evaluated and approved before access can be provided. Incorrect answers — B. Video surveillance Although video surveillance can assist with monitoring access to a building or room, it doesn't provide a way to validate the credentials of each visitor. C. Pressure sensors Pressure sensors are commonly used on doors or windows to detect movement in those devices. However, pressure sensors would not be used to check visitor credentials. D. Bollards Bollards and barricades are often used on the exterior of a facility to prevent access to motorized vehicles and channel people through a specific access location.`
  },
  {
    id: 356,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam A",
    question: `A company stores some employee information in encrypted form, but other public details are stored as plaintext. Which of the following would BEST describe this encryption strategy?`,
    choices: {
      A: `Full-disk`,
      B: `Record`,
      C: `Asymmetric`,
      D: `Key escrow`
    },
    correct: "B",
    explanation: `Record-level encryption is commonly used with databases to encrypt individual columns within the database. This would store some information in the database as plaintext and other information as encrypted data. Incorrect answers — A. Full-disk Full-disk encryption ensures that all data on a storage drive is protected. Full-disk encryption protects all data on the drive, and none of the information would remain as the original plaintext. C. Asymmetric Asymmetric encryption uses a public and private key pair to encrypt data. Asymmetric encryption does not store some information as plaintext and other information as encrypted data. D. Key escrow Key escrow describes the storage and management of decryption keys by a third-party. Key escrow does not determine which data is selected for encryption or the method of encryption.`
  },
  {
    id: 357,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam A",
    question: `A company would like to minimize database corruption if power is lost to a server. Which of the following would be the BEST strategy to follow?`,
    choices: {
      A: `Encryption`,
      B: `Off-site backups`,
      C: `Journaling`,
      D: `Replication`
    },
    correct: "C",
    explanation: `Journaling writes data to a temporary journal before writing the information to the database. If power is lost, the system can recover the last transaction from the journal when power is restored. Incorrect answers — A. Encryption Encryption would provide confidentiality of the data, but it would not provide any additional integrity features if power was lost. B. Off-site backups Off-site backups can be used to recover a corrupted database, but this does not minimize or prevent database corruption from occurring. D. Replication Replication is used to create a duplicate copy of data. Although this process does provide a backup, it doesn't add any additional integrity and could still potentially corrupt data if power is lost.`
  },
  {
    id: 358,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam A",
    question: `A company is creating a security policy for corporate mobile devices: • All mobile devices must be automatically locked after a predefined time period. • The location of each device needs to be traceable. • All of the user’s information should be completely separate from company data. Which of the following would be the BEST way to establish these security policy rules?`,
    choices: {
      A: `Segmentation`,
      B: `Biometrics`,
      C: `COPE`,
      D: `MDM`
    },
    correct: "D",
    explanation: `An MDM (Mobile Device Manager) provides a centralized management system for all mobile devices. From this central console, security administrators can set policies for many different types of mobile devices. Incorrect answers — A. Segmentation Segmentation describes the separation of user data from company data, but the implementation all policies is managed by the MDM. B. Biometrics Biometrics can be used as another layer of device security, but you need more than biometrics to implement the required security policies in this question. C. COPE A device that is COPE (Corporately Owned and Personally Enabled) is commonly purchased by the corporation and allows the use of the mobile device for both business and personal use. The use of a COPE device does not provide any policy management of the device.`
  },
  {
    id: 359,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam A",
    question: `A security engineer runs a monthly vulnerability scan. The scan doesn’t list any vulnerabilities for Windows servers, but a significant vulnerability was announced last week and none of the servers are patched yet. Which of the following best describes this result?`,
    choices: {
      A: `Exploit`,
      B: `Compensating controls`,
      C: `Zero-day attack`,
      D: `False negative`
    },
    correct: "D",
    explanation: `A false negative is a result that fails to detect an issue when one actually exists. Incorrect answers — A. Exploit An exploit is an attack against a vulnerability. Vulnerability scans do not commonly attempt to exploit the vulnerabilities that they identify. B. Compensating controls Compensating controls are used to mitigate a vulnerability when an optimal security response may not be available. For example, if a company can't deploy a patch for a vulnerability, they can revoke or limit application access until a patch is provided. C. Zero-day attack A zero-day attack focuses on previously unknown vulnerabilities. In this example, the vulnerability scan isn’t an attack, and the vulnerabilities are already known and patches are available.`
  },
  {
    id: 360,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam A",
    question: `An IT help desk is using automation to improve the response time for security events. Which of the following use cases would apply to this process?`,
    choices: {
      A: `Escalation`,
      B: `Guard rails`,
      C: `Continuous integration`,
      D: `Resource provisioning`
    },
    correct: "A",
    explanation: `Automation can recognize security events and escalate a security-related ticket to the incident response team without any additional human interaction. Incorrect answers — B. Guard rails Guard rails are used by application developers to provide a set of automated validations to user input and behavior. Guard rails are not used by the help desk team. C. Continuous integration Continuous integration and testing provides an automated method of constantly developing, testing, and deploying code. The continuous integration process is not used by the help desk. D. Resource provisioning Resource provisioning can be automated during the on-boarding and off-boarding process to quickly create or remove rights and permissions. Resource provisioning is not commonly part of the automation associated with security event notification.`
  },
  {
    id: 361,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam A",
    question: `A network administrator would like each user to authenticate with their corporate username and password when connecting to the company's wireless network. Which of the following should the network administrator configure on the wireless access points?`,
    choices: {
      A: `WPA3`,
      B: `802.1X`,
      C: `PSK`,
      D: `MFA`
    },
    correct: "B",
    explanation: `802.1X uses a centralized authentication server, and this allows all users to use their corporate credentials during the login process. Incorrect answers — A. WPA3 WPA3 (Wi-Fi Protected Access 3) is an encryption protocol for 802.11 wireless networking. The WPA3 encryption itself does not include the centralized authentication process described in this question. C. PSK PSK (Pre-Shared Key) is a wireless configuration option that allows everyone on the network to use the same access key or password when connecting to the wireless network. This question requires each person to use unique authentication credentials. D. MFA MFA (Multifactor Authentication) describes the use of multiple types of authentication checks. A username and password is a single factor (something you know), and the use of MFA does not itself require unique username and password credentials for each user.`
  },
  {
    id: 362,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam A",
    question: `A company's VPN service performs a posture assessment during the login process. Which of the following mitigation techniques would this describe?`,
    choices: {
      A: `Encryption`,
      B: `Decommissioning`,
      C: `Least privilege`,
      D: `Configuration enforcement`
    },
    correct: "D",
    explanation: `A posture assessment evaluates the configuration of a system to ensure all configurations and applications are up to date and secure as possible. If a configuration does not meet these standards, the user is commonly provided with options for resolving the issue before proceeding. Incorrect answers — A. Encryption Encryption is an important part of a VPN (Virtual Private Network), but the encryption of network data is not related to the posture assessment process. B. Decommissioning It's important to properly manage data during any decommissioning process, but the decommissioning isn't part of the VPN login process. C. Least privilege Least privilege describes the minimum rights and permissions that would allow an individual to perform their job function. Least privilege is not part of a posture assessment.`
  },
  {
    id: 363,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam A",
    question: `A user has assigned individual rights and permissions to a file on their network drive. The user adds three additional individuals to have readonly access to the file. Which of the following would describe this access control model?`,
    choices: {
      A: `Discretionary`,
      B: `Mandatory`,
      C: `Attribute-based`,
      D: `Role-based`
    },
    correct: "A",
    explanation: `Discretionary access control is used in many operating systems, and this model allows the owner of the resource to control who has access. Incorrect answers — B. Mandatory Mandatory access control allows access based on the security level assigned to an object. Only users with the object’s assigned security level or higher may access the resource. C. Attribute-based Attribute-based access control combines many different parameters to determine if a user has access to a resource. D. Role-based Role-based access control assigns rights and permissions based on the role of a user. These roles are usually assigned by group.`
  },
  {
    id: 364,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam A",
    question: `A remote user has received a text message with a link to login and confirm their upcoming work schedule. Which of the following would BEST describe this attack?`,
    choices: {
      A: `Brute force`,
      B: `Watering hole`,
      C: `Typosquatting`,
      D: `Smishing`
    },
    correct: "D",
    explanation: `Smishing, or SMS (Short Message Service) phishing, is a social engineering attack that asks for sensitive information using SMS or text messages. Incorrect answers — A. Brute force A brute force attack tries multiple password combinations in an effort to identify the correct authentication details. B. Watering hole A watering hole attack will infect a third-party site visited by the victim. Watering hole attacks are not commonly associated with received text messages. C. Typosquatting Typosquatting uses a misspelling of a domain name to convince victims they are visiting a legitimate website. The information provided in this question does not provide any specific domain names or links.`
  },
  {
    id: 365,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam A",
    question: `A company is formalizing the design and deployment process used by their application programmers. Which of the following policies would apply?`,
    choices: {
      A: `Business continuity`,
      B: `Acceptable use policy`,
      C: `Incident response`,
      D: `Development lifecycle`
    },
    correct: "D",
    explanation: `A formal software development lifecycle defines the specific policies associated with the design, development, testing, deployment, and maintenance of the application development process. Incorrect answers — A. Business continuity Business continuity plans define the procedures used when the primary business systems are unavailable. The business continuity process is not commonly associated with the application development process. B. Acceptable use policy An acceptable use policy formally defines the proper use of company assets and technology devices. C. Incident response Incident response policies define the procedures to follow when a security incident is identified. Incident response is not part of the application development process`
  },
  {
    id: 366,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam A",
    question: `A security administrator has copied a suspected malware executable from a user's computer and is running the program in a sandbox. Which of the following would describe this part of the incident response process?`,
    choices: {
      A: `Eradication`,
      B: `Preparation`,
      C: `Recovery`,
      D: `Containment`
    },
    correct: "D",
    explanation: `The isolation and containment process prevents malware from spreading and allows the administrator to analyze the operation of the malware without putting any other devices at risk. Incorrect answers — A. Eradication The eradication phase is associated with completely removing malware from a system. This process usually involves removing all data from a system and installing or re-imaging with a known-good operating system. B. Preparation The preparation process occurs before a security incident is discovered, and it can include the documentation of communication methods, the compiling of mitigation software, or gathering network and application documentation. C. Recovery The recovery phase is associated with the recovery of a system after a security incident. Running malware in a sandbox is not part of the recovery process.`
  },
  {
    id: 367,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam A",
    question: `A server administrator at a bank has noticed a decrease in the number of visitors to the bank's website. Additional research shows that users are being directed to a different IP address than the bank's web server. Which of the following would MOST likely describe this attack?`,
    choices: {
      A: `Deauthentication`,
      B: `DDoS`,
      C: `Buffer overflow`,
      D: `DNS poisoning`
    },
    correct: "D",
    explanation: `A DNS poisoning can modify a DNS server to modify the IP address provided during the name resolution process. If an attacker modifies the DNS information, they can direct client computers to any destination IP address. Incorrect answers — A. Deauthentication Deauthentication attacks are commonly associated with wireless networks. The deauthentication attack is used to remove devices from the wireless network, and it does not commonly redirect clients to a different website. B. DDoS A DDoS (Distributed Denial of Service) is used by attackers to cause services to be unavailable. In this example, the bank's website is operational but clients are not resolving the correct IP address. C. Buffer overflow Buffer overflows are associated with application attacks and can cause applications to crash or act in unexpected ways. A buffer overflow would not commonly redirect clients to a different website IP address.`
  },
  {
    id: 368,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam A",
    question: `Which of the following considerations are MOST commonly associated with a hybrid cloud model?`,
    choices: {
      A: `Microservice outages`,
      B: `IoT support`,
      C: `Network protection mismatches`,
      D: `Containerization backups`
    },
    correct: "C",
    explanation: `A hybrid cloud includes more than one private or public cloud. This adds additional complexity to the overall infrastructure, and it's common to inadvertently apply different authentication options and user permissions across multiple cloud providers. Incorrect answers — A. Microservice outages Microservices are used to create a scalable and resilient application instance. However, the availability of a microservice is not specific to a hybrid cloud model. B. IoT support IoT (Internet of Things) support is available in many cloud infrastructure models, and this would not be specific to a hybrid cloud. D. Containerization backups Containerization provides an efficient method of deploying application instances, but the use and backup of these containers is not specific to a hybrid cloud infrastructure.`
  },
  {
    id: 369,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam A",
    question: `A company hires a large number of seasonal employees, and their system access should normally be disabled when the employee leaves the company. The security administrator would like to verify that their systems cannot be accessed by any of the former employees. Which of the following would be the BEST way to provide this verification?`,
    choices: {
      A: `Confirm that no unauthorized accounts have administrator access`,
      B: `Validate the account lockout policy`,
      C: `Validate the offboarding processes and procedures`,
      D: `Create a report that shows all authentications for a 24-hour period`
    },
    correct: "C",
    explanation: `The disabling of an employee account is commonly part of the offboarding process. One way to validate an offboarding policy is to perform an audit of all accounts and compare active accounts with active employees. Incorrect answers — A. Confirm that no unauthorized accounts have administrator access It’s always a good idea to periodically audit administrator accounts, but this audit won’t provide any validation that all former employee accounts have been disabled. B. Validate the account lockout policy Account lockouts occur when a number of invalid authentication attempts have been made to a valid account. Disabled accounts would not be locked out because they are not currently valid accounts. D. Create a report that shows all authentications for a 24-hour period A list of all authentications would be quite large, and it would not be obvious to see which authentications were made with valid accounts and which authentications were made with former employee accounts.`
  },
  {
    id: 370,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam A",
    question: `Which of the following is used to describe how cautious an organization might be to taking a specific risk?`,
    choices: {
      A: `Risk appetite`,
      B: `Risk register`,
      C: `Risk transfer`,
      D: `Risk reporting`
    },
    correct: "A",
    explanation: `A risk appetite is a broad description of how much risk-taking is deemed acceptable. An organization's risk appetite posture might be conservative, or they might be more expansionary and willing to take additional risks. Incorrect answers — B. Risk register A risk register identifies and documents the risks associated with each step of a project plan. A risk register is not designed to describe an organization's level of caution associated with each risk. C. Risk transfer Some organizations will transfer their risk to a third-party. For example, many organizations will purchase cybersecurity insurance to minimize the financial impact of a cybersecurity event. D. Risk reporting Risk reporting is the formal process of identifying risk and documenting all details associated with the risk. These reports are commonly designed for the decision making process by the senior management of an organization.`
  },
  {
    id: 371,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam A",
    question: `A technician is applying a series of patches to fifty web servers during a scheduled maintenance window. After patching and rebooting the first server, the web service fails with a critical error. Which of the following should the technician do NEXT?`,
    choices: {
      A: `Contact the stakeholders regarding the outage`,
      B: `Follow the steps listed in the backout plan`,
      C: `Test the upgrade process in the lab`,
      D: `Evaluate the impact analysis associated with the change`
    },
    correct: "B",
    explanation: `The backout plan associated with the change control process provides information on reverting to the previous configuration if an unrecoverable error is found during the change. Incorrect answers — A. Contact the stakeholders regarding the outage The stakeholders don't commonly require a detailed notification of every step during the maintenance window. The final disposition of the change can be communicated to the stakeholders after the maintenance window has concluded. C. Test the upgrade process in the lab The testing phase of the change control process takes place prior to the maintenance window. Once the maintenance window has started, it's too late to perform any additional tests in the lab. D. Evaluate the impact analysis associated with the change An impact analysis determines the risk for making the proposed change. This analysis is created prior to the change control approval, and it would not be very useful when troubleshooting during the maintenance window.`
  },
  {
    id: 372,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam A",
    question: `An attacker has discovered a way to disable a server by sending specially crafted packets from many remote devices to the operating system. When the packet is received, the system crashes and must be rebooted to restore normal operations. Which of the following would BEST describe this attack?`,
    choices: {
      A: `Privilege escalation`,
      B: `SQL injection`,
      C: `Replay attack`,
      D: `DDoS`
    },
    correct: "D",
    explanation: `A DDoS (Distributed Denial of Service) is an attack that overwhelms or disables a service to prevent the service from operating normally. Packets from multiple devices that disable a server would be an example of a DDoS attack. Incorrect answers — A. Privilege escalation A privilege escalation attack allows a user to exceed their normal rights and permissions. In this example, user permission escalations were not required to perform this attack. B. SQL injection A SQL (Structured Query Language) injection is used to circumvent an application and communicate directly to the application's database. In this question, there was no mention of application vulnerabilities or specific SQL statements. C. Replay attack A replay attack captures information and then replays that information as the method of attack. In this question, no mention was made of a prior data capture.`
  },
  {
    id: 373,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam A",
    question: `A data breach has occurred in a large insurance company. A security administrator is building new servers and security systems to get all of the financial systems back online. Which part of the incident response process would BEST describe these actions?`,
    choices: {
      A: `Lessons learned`,
      B: `Containment`,
      C: `Recovery`,
      D: `Analysis`
    },
    correct: "C",
    explanation: `The recovery after a breach can be a phased approach that may take months to complete. Incorrect answers — A. Lessons learned Once the event is over, it’s useful to revisit the process to learn and improve for next time. B. Containment During an incident, it’s useful to separate infected systems from the rest of the network. D. Analysis The analysis phase can include the analysis of log files and alerts. These data source can help warn of a potential attack or evidence an attack is underway.`
  },
  {
    id: 374,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam A",
    question: `A network team has installed new access points to support an application launch. In less than 24 hours, the wireless network was attacked and private company information was accessed. Which of the following would be the MOST likely reason for this breach?`,
    choices: {
      A: `Race condition`,
      B: `Jailbreaking`,
      C: `Impersonation`,
      D: `Misconfiguration`
    },
    correct: "D",
    explanation: `There are many different configuration options when installing an access point, and it's likely one of those options allowed an attacker to gain access to the internal network. Incorrect answers — A. Race condition A race condition occurs when two different application processes are executing simultaneously. If the two processes are not aware of each other, the application may have unexpected results. In this example, there's no evidence the access points were experiencing a race condition. B. Jailbreaking Jailbreaking replaces the firmware on a mobile device to gain access to features not normally available in the operating system. Jailbreaking is not commonly associated with wireless access points. C. Impersonation Impersonation is an attacker pretending to be someone or something they are not. In this example, there's no evidence that impersonation was used to breach the wireless network.`
  },
  {
    id: 375,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam A",
    question: `An organization has identified a significant vulnerability in an Internetfacing firewall. The firewall company has stated the firewall is no longer available for sale and there are no plans to create a patch for this vulnerability. Which of the following would BEST describe this issue?`,
    choices: {
      A: `End-of-life`,
      B: `Improper input handling`,
      C: `Improper key management`,
      D: `Incompatible OS`
    },
    correct: "A",
    explanation: `Because the firewall is no longer available for sale, the firewall company has decided to stop supporting and updating the device. A product no longer supported by the manufacturer is consider to be end-of-life. Incorrect answers — B. Improper input handling A best practice for application security is to provide the proper handling of invalid or unnecessary input. A missing patch for the firewall firmware would not be related to input handling. C. Improper key management Cryptographic keys can be used for many security purposes, but managing those keys isn’t part of the patching process from a vendor. D. Incompatible OS The operating system in the firewall would normally be supported by the manufacturer, and the operating systems are not commonly modified on a purpose-built device such as a firewall.`
  },
  {
    id: 376,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam A",
    question: `A company has decided to perform a disaster recovery exercise during an annual meeting with the IT directors and senior directors. A simulated disaster will be presented, and the participants will discuss the logistics and processes required to resolve the disaster. Which of the following would BEST describe this exercise?`,
    choices: {
      A: `Capacity planning`,
      B: `Business impact analysis`,
      C: `Continuity of operations`,
      D: `Tabletop exercise`
    },
    correct: "D",
    explanation: `A tabletop exercise allows a disaster recovery team to evaluate and plan disaster recovery processes without performing a full-scale drill. Incorrect answers — A. Capacity planning Capacity planning is used to determine how many resources would be required for a particular task. A formal tabletop exercise would not commonly include a capacity planning analysis. B. Business impact analysis A business impact analysis is usually created during the disaster recovery planning process. Once the disaster has occurred, it becomes much more difficult to complete an accurate impact analysis. C. Continuity of operations If an outage occurs, it's common to have a backup plan to provide continuity of operations. This plan can be used for any significant outage and is not specific to disaster recovery testing.`
  },
  {
    id: 377,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam A",
    question: `A security administrator needs to block users from visiting websites hosting malicious software. Which of the following would be the BEST way to control this access?`,
    choices: {
      A: `Honeynet`,
      B: `Data masking`,
      C: `DNS filtering`,
      D: `Data loss prevention`
    },
    correct: "C",
    explanation: `DNS filtering uses a database of known malicious websites to resolve an incorrect or null IP address. If a user attempts to visit a known malicious site, the DNS resolution will fail and the user will not be able to visit the website. Incorrect answers — A. Honeynet A honeynet is a non-production network created to attract attackers. A honeynet is not used to block traffic to known malicious Internet sites. B. Data masking Data masking provides a way to hide data by substitution, shuffling, encryption, and other methods. Data masking does not provide a method of blocking communication to malicious websites. D. Data loss prevention Data Loss Prevention (DLP) systems can identify and block private information from being transferred between systems. DLP does not provide any direct method of blocking network traffic to known malware repositories.`
  },
  {
    id: 378,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam A",
    question: `A system administrator has been called to a system with a malware infection. As part of the incident response process, the administrator has imaged the operating system to a known-good version. Which of these incident response steps is the administrator following?`,
    choices: {
      A: `Lessons learned`,
      B: `Recovery`,
      C: `Detection`,
      D: `Containment`
    },
    correct: "B",
    explanation: `The recovery phase describes the process of returning the system and data to the state prior to the malware infection. With a malware infection, this often requires deleting all data and reinstalling a known-good operating system. Incorrect answers — A. Lessons learned A post-incident meeting can help the incident response participants discuss the phases of the incident that went well and which processes can be improved for future events. C. Detection The detection of the malware is an early phase in the incident response process. If the administrator is imaging a system, the malware was previously detected and any critical documents were already recovered. D. Containment The containment phase isolates the system from any other devices to prevent the spread of any malicious software. The containment phase generally occurs immediately after`
  },
  {
    id: 379,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam A",
    question: `A company has placed a SCADA system on a segmented network with limited access from the rest of the corporate network. Which of the following would describe this process?`,
    choices: {
      A: `Load balancing`,
      B: `Least privilege`,
      C: `Data retention`,
      D: `Hardening`
    },
    correct: "D",
    explanation: `The hardening process for an industrial SCADA (Supervisory Control and Data Acquisition) system might include network segmentation, additional firewall controls, and the implementation of access control lists. Incorrect answers — A. Load balancing A load balancer is used to distribute transactions across multiple systems. A single system was the only device referenced in this question, so a load balancing option would not be available. B. Least privilege Least privilege defines the minimum rights and permissions for completing a specific task. In this example, there was no mention of specific tasks or their necessary permissions. C. Data retention Data retention is important for long-term storage of important information. In this example, the mandated storage of data was not a consideration.`
  },
  {
    id: 380,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam A",
    question: `An administrator is viewing the following security log: Dec 30 08:40:03 web01 Failed password for root from 10.101.88.230 port 26244 ssh2 Dec 30 08:40:05 web01 Failed password for root from 10.101.88.230 port 26244 ssh2 Dec 30 08:40:09 web01 445 more authentication failures; rhost=10.101.88.230 user=root Which of the following would describe this attack?`,
    choices: {
      A: `Spraying`,
      B: `Downgrade`,
      C: `Brute force`,
      D: `DDoS`
    },
    correct: "C",
    explanation: `A brute force attack discovers password by attempting a large combination of letters, numbers, and special characters until a match is found. In this example, the notification of over four hundred attempts would qualify as a brute force attack. Incorrect answers — A. Spraying A spraying attack is similar to a brute force attack, but spraying limits the number of attempts to prevent alerts or an account lockout. A spraying attack often uses accounts passwords stolen from other sites or a short list of the most common passwords. B. Downgrade A downgrade attack is often used to force an insecure encryption algorithm or the disabling of encryption entirely. In this example, no evidence of a downgrade attack is contained in the security log. D. DDoS A DDoS (Distributed Denial of Service) would involve many different devices to cause a system outage. In this example, a single IP address was logged and there was no evidence of a service outage.`
  },
  {
    id: 381,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam A",
    question: `During a morning login process, a user's laptop was moved to a private VLAN and a series of updates were automatically installed. Which of the following would describe this process?`,
    choices: {
      A: `Account lockout`,
      B: `Configuration enforcement`,
      C: `Decommissioning`,
      D: `Sideloading`
    },
    correct: "B",
    explanation: `Many organizations will perform a posture assessment during the login process to verify the proper security controls are in place. If the device does not pass the assessment, the system can be quarantined and any missing security updates can then be installed. Incorrect answers — A. Account lockout In this example, there were no errors or notifications regarding the account or authentication status. C. Decommissioning The decommissioning process is often used to permanently remove devices from the network. In this example, the laptop mitigation would allow the device to return to the network once the updates were complete. D. Sideloading Sideloading describes the installation of software on a mobile device through the use of third-party operating systems or websites.`
  },
  {
    id: 382,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam A",
    question: `Which of the following describes two-factor authentication?`,
    choices: {
      A: `A printer uses a password and a PIN`,
      B: `The door to a building requires a fingerprint scan`,
      C: `An application requires a pseudo-random code`,
      D: `A Windows Domain requires a password and smart card`
    },
    correct: "D",
    explanation: `The multiple factors of authentication for this Windows Domain are a password (something you know), and a smart card (something you have). Incorrect answers — A. A printer uses a password and a PIN A password and a PIN (Personal Identification Number) are both something you know, so only one authentication factor is used. B. The door to a building requires a fingerprint scan A biometric scan (something you are) is a single factor of authentication. C. An application requires a pseudo-random code Pseudo-random authentication codes are often provided using a hardware dongle or mobile app. This single factor of authentication is something you have.`
  },
  {
    id: 383,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam A",
    question: `A company is deploying a new application to all employees in the field. Some of the problems associated with this roll out include: • The company does not have a way to manage the devices in the field • Team members have many different kinds of mobile devices • The same device needs to be used for both corporate and private use Which of the following deployment models would address these concerns?`,
    choices: {
      A: `CYOD`,
      B: `SSO`,
      C: `COPE`,
      D: `BYOD`
    },
    correct: "C",
    explanation: `A COPE (Corporate-owned, Personally Enabled) device would solve the issue of device standardization and would allow the device to be used for both corporate access and personal use. Incorrect answers — A. CYOD CYOD (Choose Your Own Device) allows the user to pick the make and model of their device. This would not solve the issue of different kinds of mobile devices used in the field. B. SSO SSO (Single Sign-On) is used to authenticate once when accessing multiple resources. SSO would not resolve any of the listed issues. D. BYOD With BYOD (Bring Your Own Device), the employee uses their personal device at work. This would not address the issue of mobile device management or standardization of mobile devices.`
  },
  {
    id: 384,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam A",
    question: `An organization is installing a UPS for their new data center. Which of the following would BEST describe this control type?`,
    choices: {
      A: `Compensating`,
      B: `Directive`,
      C: `Deterrent`,
      D: `Detective`
    },
    correct: "A",
    explanation: `A compensating security control doesn’t prevent an attack, but it does restore from an attack using other means. In this example, the UPS (Uninterruptible Power Supply) does not stop a power outage, but it does provide alternative power if an outage occurs. Incorrect answers — B. Directive A directive control provides security controls using instructions and guidance. A UPS is not categorized as a directive control. C. Deterrent A deterrent control discourages an intrusion attempt. A UPS is used after power has been lost, so it would not be categorized as a deterrent. D. Detective A detective control may not prevent access, but it can identify and record intrusion attempts.`
  },
  {
    id: 385,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam A",
    question: `A manufacturing company would like to track the progress of parts used on an assembly line. Which of the following technologies would be the BEST choice for this task?`,
    choices: {
      A: `Secure enclave`,
      B: `Blockchain`,
      C: `Hashing`,
      D: `Asymmetric encryption`
    },
    correct: "B",
    explanation: `The ledger functionality of a blockchain can be used to track or verify components, digital media, votes, and other physical or digital objects. Incorrect answers — A. Secure enclave A secure enclave is a protected area for secret information, and the secure enclave is often implemented as a hardware processor in a device. C. Hashing Cryptographic hashes are commonly used to provide integrity verifications, but they don't necessarily include any method of tracking components on an assembly line. D. Asymmetric encryption Asymmetric encryption uses different keys for encryption and decryption. Asymmetric encryption does not provide any method for tracking objects on an assembly line.`
  },
  {
    id: 386,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam A",
    question: `A company's website has been compromised and the website content has been replaced with a political message. Which of the following threat actors would be the MOST likely culprit?`,
    choices: {
      A: `Insider`,
      B: `Organized crime`,
      C: `Shadow IT`,
      D: `Hacktivist`
    },
    correct: "D",
    explanation: `A hacktivist is motivated by a particular philosophy, and their goal is to spread their message by defacing web sites and releasing private documents. Incorrect answers — A. Insider An insider has access to many company services, but the motivations of an insider threat would not commonly result in the posting of political information. B. Organized crime Organized crime actors are motivated by money. It would be unusual for an organized crime hack to include the posting of political messages. C. Shadow IT A shadow IT group is mostly interested in building their own systems and applications, and they would not commonly deface a website in an attempt to spread a specific political message.`
  },
  {
    id: 387,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam A",
    question: `A Linux administrator is downloading an updated version of her Linux distribution. The download site shows a link to the ISO and a SHA256 hash value. Which of these would describe the use of this hash value?`,
    choices: {
      A: `Verifies that the file was not corrupted during the file transfer`,
      B: `Provides a key for decrypting the ISO after download`,
      C: `Authenticates the site as an official ISO distribution site`,
      D: `Confirms that the file does not contain any malware`
    },
    correct: "A",
    explanation: `the file transfer Once the file is downloaded, the administrator can calculate the file’s SHA256 hash and confirm that it matches the value on the website. Incorrect answers — B. Provides a key for decrypting the ISO after download ISO files containing public information are usually distributed without any encryption, and a hash value would not commonly be used as a decryption key. C. Authenticates the site as an official ISO distribution site Although it’s important to download files from known good sites, providing a hash value on a site would not provide any information about the site’s authentication. D. Confirms that the file does not contain any malware A hash value doesn’t inherently provide any protection against malware.`
  },
  {
    id: 388,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam A",
    question: `A company's security policy requires that login access should only be available if a person is physically within the same building as the server. Which of the following would be the BEST way to provide this requirement?`,
    choices: {
      A: `USB security key`,
      B: `Biometric scanner`,
      C: `PIN`,
      D: `SMS`
    },
    correct: "B",
    explanation: `A biometric scanner would require a person to be physically present to verify the authentication. Incorrect answers — A. USB security key A security key can be used to store a certificate on a USB (Universal Serial Bus) drive. The security key is commonly used as an authentication method for a user or application, and it doesn't provide any information about the location of the security key. C. PIN Although a PIN (Personal Identification Number) can be used as an authentication factor, the use of the PIN does not guarantee that a person is physically present. D. SMS SMS (Short Message Service), or text messages, are commonly used as authentication factors. However, the use of a mobile device to receive the SMS message does not guarantee that the owner of the mobile device is physically present.`
  },
  {
    id: 389,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam A",
    question: `A development team has installed a new application and database to a cloud service. After running a vulnerability scanner on the application instance, a security administrator finds the database is available for anyone to query without providing any authentication. Which of these vulnerabilities is MOST associated with this issue?`,
    choices: {
      A: `Legacy software`,
      B: `Open permissions`,
      C: `Race condition`,
      D: `Malicious update`
    },
    correct: "B",
    explanation: `Just like local systems, proper permissions and security controls are required when applications are installed to a cloud-based system. If permissions are not properly configured, the application data may be accessible by anyone on the Internet. Incorrect answers — A. Legacy software Legacy software often describes an older application with limited support options. The application and database in this example is a new installation and would not normally be categorized as legacy. C. Race condition If two processes occur simultaneously without coordination between the processes, unexpected results could occur. In this example, a single vulnerability scan has identified the issue and other processes do not appear to be involved. D. Malicious update A malicious update involves the installation of unwanted software during a normal update process. In this example, an update was not performed and the resulting public access would not generally be part of a malicious update.`
  },
  {
    id: 390,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam A",
    question: `Employees of an organization have received an email with a link offering a cash bonus for completing an internal training course. Which of the following would BEST describe this email?`,
    choices: {
      A: `Watering hole attack`,
      B: `Cross-site scripting`,
      C: `Zero-day`,
      D: `Phishing campaign`
    },
    correct: "D",
    explanation: `A phishing campaign is an internal process used to test the security habits of the user community. An email with a link from a server not under the control of the company could be an email sent by the IT department as part of a phishing campaign. Incorrect answers — A. Watering hole attack A watering hole attack is used as an alternative to attacking a victim's device directly. With a watering hole attack, an attacker will compromise a site used by the victim and will simply wait for the victim to visit. B. Cross-site scripting Cross-site scripting takes advantage of the trust already existing in a web browser. In this example, there's no evidence of a vulnerable web application or a specific browser-based vulnerability. C. Zero-day A zero-day attack describes a vulnerability where a software patch or similar mitigation is not immediately available. A link in an email by itself does not describe a zero-day attack.`
  },
  {
    id: 391,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam A",
    question: `Which of the following risk management strategies would include the purchase and installation of an NGFW?`,
    choices: {
      A: `Transfer`,
      B: `Mitigate`,
      C: `Accept`,
      D: `Avoid`
    },
    correct: "B",
    explanation: `Mitigation is a strategy that decreases the threat level. This is commonly done through the use of additional security systems and monitoring, such as an NGFW (Next-Generation Firewall). Incorrect answers — A. Transfer Transferring risk would move the risk from one entity to another. Adding an NGFW would not transfer any risk to another party. C. Accept The acceptance of risk is a position where the owner understands the risk and has decided to accept the potential results. D. Avoidance With risk avoidance, the owner of the risk decides to stop participating in a high-risk activity. This effectively avoids the risky activity and prevents any future issues.`
  },
  {
    id: 392,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam A",
    question: `An organization is implementing a security model where all application requests must be validated at a policy enforcement point. Which of the following would BEST describe this model?`,
    choices: {
      A: `Public key infrastructure`,
      B: `Zero trust`,
      C: `Discretionary access control`,
      D: `Federation`
    },
    correct: "B",
    explanation: `Zero trust describes a model where nothing is inherently trusted and everything must be verified to gain access. A central policy enforcement point is commonly used to implement a zero trust architecture. Incorrect answers — A. Public key infrastructure A public key infrastructure (PKI) uses public and private keys to provide confidentiality and integrity. Asymmetric encryption and digital signatures are used as foundational technologies in PKI. C. Discretionary access control. Discretionary access control is an authorization method where the owner of the data determines the scope and type of access. A discretionary access control model does not specifically define how the authorization is implemented. D. Federation Federation provides a way to manage authentication to a third-party database. Federation does not describe the use of a policy enforcement point.`
  },
  {
    id: 393,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam A",
    question: `A company is installing a new application in a public cloud. Which of the following determines the assignment of data security in this cloud infrastructure?`,
    choices: {
      A: `Playbook`,
      B: `Audit committee`,
      C: `Responsibility matrix`,
      D: `Right-to-audit clause`
    },
    correct: "C",
    explanation: `A cloud responsibility matrix is usually published by the provider to document the responsibilities for all cloud-based services. For example, the customer responsibilities for an IaaS (Infrastructure as a Service) implementation will be different than SaaS (Software as a Service). Incorrect answers — A. Playbook A playbook provides conditional steps to follow when managing an organization's processes and procedures. For example, the process of recovering from a virus infection would be documented in a playbook. B. Audit committee An audit committee oversees the risk management activities for an organization. For example, the committee would be responsible for verifying the security implementation documented in the responsibility matrix. D. Right-to-audit clause A right-to-audit clause is often included in a third-party contract to define the terms and conditions around periodic audits. This is often part of a larger product or services contract.`
  },
  {
    id: 394,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam A",
    question: `When decommissioning a device, a company documents the type and size of storage drive, the amount of RAM, and any installed adapter cards. Which of the following describes this process?`,
    choices: {
      A: `Destruction`,
      B: `Sanitization`,
      C: `Certification`,
      D: `Enumeration`
    },
    correct: "D",
    explanation: `Enumeration describes the detailed listing of all parts in a particular device. For a computer, this could include the CPU type, memory, storage drive details, keyboard model, and more. Incorrect answers — A. Destruction Destruction involves physically damaging a device or component to prevent any future use or data access. Although the company may choose to destroy these computers at a later date, this question does not describe the destruction process. B. Sanitization Sanitization deletes data from storage media and allows the storage device to be used in the future. For example, a sector-by-sector format would sanitize a hard drive and allow the drive to be installed into another computer without the concern of a data breach. C. Certification If a third-party is providing destruction services, they often will certify the work and document which device serial numbers were destroyed as part of their service.`
  },
  {
    id: 395,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam A",
    question: `An attacker has sent more information than expected in a single API call, and this has allowed the execution of arbitrary code. Which of the following would BEST describe this attack?`,
    choices: {
      A: `Buffer overflow`,
      B: `Replay attack`,
      C: `Cross-site scripting`,
      D: `DDoS`
    },
    correct: "A",
    explanation: `The results of a buffer overflow can cause random results, but sometimes the actions can be repeatable and controlled. In the best possible case for the hacker, a buffer overflow can be manipulated to execute code on the remote device. Incorrect answers — B. Replay attack A replay attack does not require the sending of more information than expected, and often a replay attack consists of normal traffic and expected application input. C. Cross-site scripting A cross-site scripting attack allows a third party to take advantage of the trust a browser might have with another website. This question involves an API call and does not appear to reference a browser or third-party website. D. DDoS A DDoS (Distributed Denial of Service) renders a service unavailable, and it involves the input of many devices to operate. A DDoS would not require sending more information than expected, and it rarely results in the execution of arbitrary code.`
  },
  {
    id: 396,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam A",
    question: `A company encourages users to encrypt all of their confidential materials on a central server. The organization would like to enable key escrow as a backup option. Which of these keys should the organization place into escrow?`,
    choices: {
      A: `Private`,
      B: `CA`,
      C: `Session`,
      D: `Public`
    },
    correct: "A",
    explanation: `With asymmetric encryption, the private key is used to decrypt information that has been encrypted with the public key. To ensure continued access to the encrypted data, the company must have a copy of each private key. Incorrect answers — B. CA A CA (Certificate Authority) key is commonly used to validate the digital signature from a trusted CA. This is not commonly used for user data encryption. C. Session Session keys are commonly used temporarily to provide confidentiality during a single session. Once the session is complete, the keys are discarded. Session keys are not used to provide long-term data encryption. D. Public In asymmetric encryption, a public key is already available to everyone. It would not be necessary to escrow a public key.`
  },
  {
    id: 397,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam A",
    question: `A company is in the process of configuring and enabling host-based firewalls on all user devices. Which of the following threats is the company addressing?`,
    choices: {
      A: `Default credentials`,
      B: `Vishing`,
      C: `Instant messaging`,
      D: `On-path`
    },
    correct: "C",
    explanation: `Instant messaging is commonly used as an attack vector, and one way to help protect against malicious links delivered by instant messaging is a host-based firewall. Incorrect answers — A. Default credentials Users commonly login with unique credentials that are specific to the user. A host-based firewall would not identify the use of a default username and password. B. Vishing Vishing, or voice phishing, occurs over a phone or other voice communication method. A host-based firewall would not be able to protect against a voice-related attack vector. D. On-path A on-path attack describes a third-party in the middle of a communications path. The victims of an on-path attack are usually not aware an attack is taking place, so a host-based firewall would not be able to detect an on-path attack.`
  },
  {
    id: 398,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam A",
    question: `A manufacturing company would like to use an existing router to separate a corporate network from a manufacturing floor. Both networks use the same physical switch, and the company does not want to install any additional hardware. Which of the following would be the BEST choice for this segmentation?`,
    choices: {
      A: `Connect the corporate network and the manufacturing floor with a VPN`,
      B: `Build an air gapped manufacturing floor network`,
      C: `Use host-based firewalls on each device`,
      D: `Create separate VLANs for the corporate network and the manufacturing floor`
    },
    correct: "D",
    explanation: `the manufacturing floor Creating VLANs (Virtual Local Area Networks) will segment a network without requiring additional switches. Incorrect answers — A. Connect the corporate network and the manufacturing floor with a VPN A VPN (Virtual Private Network) would encrypt all information between the two networks, but it would not provide any segmentation. This process would also commonly require additional hardware to provide VPN connectivity. B. Build an air gapped manufacturing floor network An air gapped network would require separate physical switches on each side of the gap, and this would require the purchase of an additional switch. C. Use host-based firewalls on each device While personal firewalls provide protection for individual devices, they do not segment networks. It’s also uncommon for personal firewalls to be installed on manufacturing equipment.`
  },
  {
    id: 399,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam A",
    question: `An organization needs to provide a remote access solution for a newly deployed cloud-based application. This application is designed to be used by mobile field service technicians. Which of the following would be the best option for this requirement?`,
    choices: {
      A: `RTOS`,
      B: `CRL`,
      C: `Zero-trust`,
      D: `SASE`
    },
    correct: "D",
    explanation: `A SASE (Secure Access Service Edge) solution is a next-generation VPN technology designed to optimize the process of secure communication to cloud services. Incorrect answers — A. RTOS An RTOS (Real-time Operating System) is an OS designed for industrial equipment, automobiles, and other time-sensitive applications. B. CRL A CRL (Certificate Revocation List) is used to determine if a certificate has been administratively revoked. A CRL would not provide any remote access functionality. C. Zero-trust Zero-trust is a security strategy where all devices on the network are verified before connecting to another device. Zero-trust does not provide remote access functions.`
  },
  {
    id: 400,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam A",
    question: `A company is implementing a quarterly security awareness campaign. Which of the following would MOST likely be part of this campaign?`,
    choices: {
      A: `Suspicious message reports from users`,
      B: `An itemized statement of work`,
      C: `An IaC configuration file`,
      D: `An acceptable use policy document`
    },
    correct: "A",
    explanation: `A security awareness campaign often involves automated phishing attempts, and most campaigns will include a process for users to report a suspected phishing attempt to the IT security team. Incorrect answers — B. An itemized statement of work A statement of work (SOW) is commonly used for service engagements. The SOW provides a list of deliverables for the professional services, and this list is often used to determine if the services were completed. C. An IaC configuration file An IaC (Infrastructure as Code) configuration file describes an infrastructure configuration commonly used by cloud-based systems. An IaC configuration file would not be used by a security awareness campaign. D. An acceptable use policy document An acceptable use policy (AUP) is defined by an employer to describe the proper use of technology and systems within an organization. The AUP itself is not part of a security awareness campaign.`
  },
  {
    id: 401,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam A",
    question: `A recent report shows the return of a vulnerability that was previously patched four months ago. After researching this issue, the security team has found a recent patch has reintroduced this vulnerability on the servers. Which of the following should the security administrator implement to prevent this issue from occurring in the future?`,
    choices: {
      A: `Containerization`,
      B: `Data masking`,
      C: `802.1X`,
      D: `Change management`
    },
    correct: "D",
    explanation: `The change management process includes a testing phase that can help identify potential issues relating to an application change or upgrade. Incorrect answers — A. Containerization Containerization is an efficient method of deploying application instances, but it doesn't provide any mitigation for security vulnerabilities. B. Data masking Data masking can be used to limit access to sensitive data, but it does not prevent the implementation of a security vulnerability. C. 802.1X 802.1X is a standard for port-based network access control, and it can help manage the authentication process of network users. 802.1X does not provide any mitigation for security vulnerabilities.`
  },
  {
    id: 402,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam A",
    question: `A security manager would like to ensure that unique hashes are used with an application login process. Which of the following would be the BEST way to add random data when generating a set of stored password hashes?`,
    choices: {
      A: `Salting`,
      B: `Obfuscation`,
      C: `Key stretching`,
      D: `Digital signature`
    },
    correct: "A",
    explanation: `Adding random data, or salt, to a password when performing the hashing process will create a unique hash, even if other users have chosen the same password. Incorrect answers — B. Obfuscation Obfuscation is the process of making something difficult for humans to read or understand. The obfuscation process isn't commonly associated with adding random information to hashes. C. Key stretching Key stretching uses a cryptographic key multiple times for additional protection against brute force attacks. Key stretching by itself does not commonly add random data to the hashing process. D. Digital signature Digital signatures use a hash and asymmetric encryption to provide integrity of data. Digital signatures aren't commonly used for storing passwords.`
  },
  {
    id: 403,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam A",
    question: `Which cryptographic method is used to add trust to a digital certificate?`,
    choices: {
      A: `Steganography`,
      B: `Hash`,
      C: `Symmetric encryption`,
      D: `Digital signature`
    },
    correct: "D",
    explanation: `A certificate authority will digitally sign a certificate to add trust. If you trust the certificate authority, you can therefore trust the certificate. Incorrect answers — A. Steganography Steganography is a technique for hiding information inside of another media type. Steganography is a method of obfuscating data and does not provide a method of adding trust to a certificate. B. Hash A hash can help verify that the certificate has not been altered, but it does not provide additional third-party trust. C. Symmetric encryption Symmetric encryption provides data confidentiality, but it doesn't add any additional trust to the encryption process.`
  },
  {
    id: 404,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam A",
    question: `A company is using SCAP as part of their security monitoring processes. Which of the following would BEST describe this implementation?`,
    choices: {
      A: `Train the user community to better identify phishing attempts`,
      B: `Present the results of an internal audit to the board`,
      C: `Automate the validation and patching of security issues`,
      D: `Identify and document authorized data center visitors`
    },
    correct: "C",
    explanation: `SCAP (Security Content Automation Protocol) focuses on the standardization of vulnerability management across multiple security tools. This allows different tools to identify and act on the same security criteria. Incorrect answers — A. Train the user community to better identify phishing attempts Security awareness training is an important part of an overall security strategy, but the training process does not generally involve SCAP. B. Present the results of an internal audit to the board A presentation of audit results can provide important feedback, but the presentation itself does not generally use SCAP. D. Identify and document authorized data center visitors The identification and documentation process for visitors is an important security policy, but it does not generally require the use of SCAP.`
  },
  {
    id: 405,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam A",
    question: `An organization maintains a large database of customer information for sales tracking and customer support. Which person in the organization would be responsible for managing the access rights to this data?`,
    choices: {
      A: `Data processor`,
      B: `Data owner`,
      C: `Data subject`,
      D: `Data custodian`
    },
    correct: "D",
    explanation: `The data custodian manages access rights and sets security controls to the data. Incorrect answers — A. Data processor The data processor manages the operational use of the data, but not the rights and permissions to the information. B. Data owner The data owner is usually a higher-level executive who makes business decisions regarding the data. C. Data subject The data subjects are the individuals who have their personal information contained in this customer information database.`
  },
  {
    id: 406,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam A",
    question: `An organization’s content management system currently labels files and documents as “Public” and “Restricted.” On a recent update, a new classification type of “Private” was added. Which of the following would be the MOST likely reason for this addition?`,
    choices: {
      A: `Minimized attack surface`,
      B: `Simplified categorization`,
      C: `Expanded privacy compliance`,
      D: `Decreased search time`
    },
    correct: "C",
    explanation: `The labeling of data as private is often associated with compliance and confidentiality concerns. Incorrect answers — A. Minimized attack surface The categorization of data has little impact on the size of the potential attack surface associated with a system. B. Simplified categorization Adding additional categories would not commonly be considered a simplification. D. Decreased search time Adding additional classifications would not necessarily provide any decreased search times.`
  },
  {
    id: 407,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam A",
    question: `A corporate security team would like to consolidate and protect the private keys across all of their web servers. Which of these would be the BEST way to securely store these keys?`,
    choices: {
      A: `Integrate an HSM`,
      B: `Implement full disk encryption on the web servers`,
      C: `Use a TPM`,
      D: `Upgrade the web servers to use a UEFI BIOS`
    },
    correct: "A",
    explanation: `An HSM (Hardware Security Module) is a high-end cryptographic hardware appliance that can securely store keys and certificates for all devices. Incorrect answers — B. Implement full disk encryption on the web servers Full-disk encryption would only protect the keys if someone does not have the proper credentials, and it won’t help consolidate all of the web server keys to a central point. C. Use a TPM A TPM (Trusted Platform Module) is used on individual devices to provide cryptographic functions and securely store encryption keys. Individual TPMs would not provide any consolidation of web server private keys. D. Upgrade the web servers to use a UEFI BIOS A UEFI (Unified Extensible Firmware Interface) BIOS (Basic Input/ Output System) does not provide any additional security or consolidation features for web server private keys.`
  },
  {
    id: 408,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam A",
    question: `A security technician is reviewing this security log from an IPS: ALERT 2023-06-01 13:07:29 [163bcf65118-179b547b] Cross-Site Scripting in JSON Data 222.43.112.74:3332 -> 64.235.145.35:80 URL/index.html - Method POST - Query String "-" User Agent: curl/7.21.3 (i386-redhat-linux-gnu) libcurl/7.21.3 NSS/3.13.1.0 zlib/1.2.5 libidn/1.19 libssh2/1.2.7 Detail: token="<script>" key="key7" value="<script>alert(2)</script>" Which of the following can be determined from this log information? (Select TWO)`,
    choices: {
      A: `The alert was generated from a malformed User Agent header`,
      B: `The alert was generated from an embedded script`,
      C: `The attacker’s IP address is 222.43.112.74`,
      D: `The attacker’s IP address is 64.235.145.35 ❍ E. The alert was generated due to an invalid client port number`
    },
    correct: "B",
    explanation: `C. The attacker’s IP address is 222.43.112.74 The details of the IPS (Intrusion Prevention System) alert show a script value embedded into JSON ( JavaScript Object Notation) data. The IPS log also shows the flow of the attack with an arrow in the middle. The attacker was IP address 222.43.112.74 with port 3332, and the victim was 64.235.145.35 over port 80. Incorrect answers — A. The alert was generated from a malformed User Agent header The user agent information is provided as additional supporting data associated with the alert. The agent itself is not the cause of this alert. D. The attacker’s IP address is 64.235.145.35 The attacker’s IP address is listed first, so the victim's IP address is 64.235.145.35. E. The alert was generated due to an invalid client port number The port number associated with the client, 3332, is a valid port number and not associated with the cause of the alert.`
  },
  {
    id: 409,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam A",
    question: `Which of the following describes a monetary loss if one event occurs?`,
    choices: {
      A: `ALE`,
      B: `SLE`,
      C: `RTO`,
      D: `ARO`
    },
    correct: "B",
    explanation: `SLE (Single Loss Expectancy) describes the financial impact of a single event. Incorrect answers — A. ALE ALE (Annual Loss Expectancy) is the financial loss over an entire 12-month period. C. RTO RTO (Recovery Time Objectives) define a timeframe needed to restore a particular service level. D. ARO The ARO (Annualized Rate of Occurrence) is the number of times an event will occur in a 12-month period.`
  },
  {
    id: 410,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam A",
    question: `A user with restricted access has typed this text in a search field of an internal web-based application: USER77' OR '1'='1 After submitting this search request, all database records are displayed on the screen. Which of the following would BEST describe this search?`,
    choices: {
      A: `Cross-site scripting`,
      B: `Buffer overflow`,
      C: `SQL injection`,
      D: `SSL stripping`
    },
    correct: "C",
    explanation: `SQL (Structured Query Language) injection takes advantage of poor input validation to circumvent the application and allows the attacker to query the database directly. Incorrect answers — A. Cross-site scripting Cross-site scripting takes advantage of a third-party trust to a web application. The attack demonstrated in this question does not use another user's credentials or access rights to obtain information. B. Buffer overflow A buffer overflow uses an application vulnerability to submit more information than an application can properly manage. The attack syntax in this question is specific to SQL injections, and it does not appear to be manipulating a buffer overflow vulnerability. D. SSL stripping SSL stripping is a downgrade attack that modifies web site addresses to allow access to encrypted information. The attack in this question does not appear to include a third-party.`
  },
  {
    id: 411,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam A",
    question: `A user has opened a helpdesk ticket complaining of poor system performance, excessive pop up messages, and the cursor moving without anyone touching the mouse. This issue began after they opened a spreadsheet from a vendor containing part numbers and pricing information. Which of the following is MOST likely the cause of this user's issues?`,
    choices: {
      A: `On-path`,
      B: `Worm`,
      C: `Trojan horse`,
      D: `Logic bomb`
    },
    correct: "C",
    explanation: `Since a Trojan horse is usually disguised as legitimate software, the victim often doesn’t realize they’re installing malware. Once the Trojan is installed, the attacker can install additional software to control the infected system. Incorrect answers — A. On-path An on-path attack commonly occurs without any knowledge to the parties involved, and there’s usually no additional notification that an attack is underway. B. Worm A worm is malware that can replicate itself between systems without any user intervention, so a spreadsheet that requires additional a user to click warning messages would not be categorized as a worm. D. Logic bomb A logic bomb is malware that installs and operates silently until a certain event occurs. Once the logic bomb has been triggered, the results usually involve loss of data or a disabled operating system.`
  },
  {
    id: 412,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam A",
    question: `A web-based manufacturing company processes monthly charges to credit card information saved in the customer's profile. All of the customer information is encrypted and protected with additional authentication factors. Which of the following would be the justification for these security controls?`,
    choices: {
      A: `Chain of custody`,
      B: `Password vaulting`,
      C: `Compliance reporting`,
      D: `Sandboxing`
    },
    correct: "C",
    explanation: `The storage of sensitive information such as customer details and payment information may require additional reporting to ensure compliance with the proper security controls. Incorrect answers — A. Chain of custody Chain of custody describes the control and integrity of collected evidence. Chain of custody would not involve the implementation of encryption and authentication factors in this example. B. Password vaulting Password vaults are used as secure storage and retrieval of authentication credentials. The protection of user data is not associated with password vaulting. D. Sandboxing Sandboxing is the process of running a service or system in a protected environment. This sandbox allows for testing and analysis without affecting other systems that may currently be in production.`
  },
  {
    id: 413,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam A",
    question: `A security manager has created a report showing intermittent network communication from certain workstations on the internal network to one external IP address. These traffic patterns occur at random times during the day. Which of the following would be the MOST likely reason for these traffic patterns?`,
    choices: {
      A: `On-path attack`,
      B: `Keylogger`,
      C: `Replay attack`,
      D: `Brute force`
    },
    correct: "B",
    explanation: `A keylogger captures keystrokes and occasionally transmits this information to the attacker for analysis. The traffic patterns identified by the security manager could potentially be categorized as malicious keylogger transfers. Incorrect answers — A. On-path attack An on-path attack is an exploit often associated with a device monitoring data in the middle of a conversation. This question did not provide any evidence of third-party monitoring. C. Replay attack A replay attack is often used by an attacker to gain access to a service through the use of credentials gathered from a previous authentication. Internal devices communicating to an external server would not be a common pattern for a replay attack. D. Brute force A brute force attack attempts to find authentication credentials by attempting to guess a password. In this example, the source of the traffic and the traffic patterns don't match those seen with common brute force attempts.`
  },
  {
    id: 414,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam A",
    question: `The security policies in a manufacturing company prohibit the transmission of customer information. However, a security administrator has received an alert that credit card numbers were transmitted as an email attachment. Which of the following was the MOST likely source of this alert message?`,
    choices: {
      A: `IPS`,
      B: `DLP`,
      C: `RADIUS`,
      D: `IPsec`
    },
    correct: "B",
    explanation: `DLP (Data Loss Prevention) technologies can identify and block the transmission of sensitive data across the network. Incorrect answers — A. IPS IPS (Intrusion Prevention System) signatures are useful for identifying known vulnerabilities, but they don't commonly provide a way to identify and block PII (Personally Identifiable Information) or sensitive data. C. RADIUS RADIUS (Remote Authentication Dial-In User Service) is an authentication protocol commonly used to validate user credentials. RADIUS would not be used to identify sensitive data transfers. D. IPsec IPsec (Internet Protocol Security) is a protocol suite for authenticating and encrypting network communication. IPsec does not include any features for identifying and alerting on sensitive information.`
  },
  {
    id: 415,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam A",
    question: `A security administrator has configured a virtual machine in a screened subnet with a guest login account and no password. Which of the following would be the MOST likely reason for this configuration?`,
    choices: {
      A: `The server is a honeypot for attracting potential attackers`,
      B: `The server is a cloud storage service for remote users`,
      C: `The server will be used as a VPN concentrator`,
      D: `The server is a development sandbox for third-party programming projects`
    },
    correct: "A",
    explanation: `A screened subnet is a good location to configure services that can be accessed from the Internet, and building a system that can be easily compromised is a common tactic for honeypot systems. Incorrect answers — B. The server is a cloud storage service for remote users Although cloud storage is a useful service, configuring storage on a server with an open guest account is not a best practice. C. The server will be used as a VPN concentrator VPN (Virtual Private Networking) concentrators should be installed on secure devices, and configuring an open guest account would not be considered a secure configuration. D. The server is a development sandbox for third-party programming projects It would not be secure to configure a development sandbox on a system with an open guest account.`
  },
  {
    id: 416,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam A",
    question: `A security administrator is configuring a DNS server with a SPF record. Which of the following would be the reason for this configuration?`,
    choices: {
      A: `Transmit all outgoing email over an encrypted tunnel`,
      B: `List all servers authorized to send emails`,
      C: `Digitally sign all outgoing email messages`,
      D: `Obtain disposition instructions for emails marked as spam`
    },
    correct: "B",
    explanation: `SPF (Sender Policy Framework) is used to publish a list of all authorized email servers for a specific domain. Incorrect answers — A. Transmit all outgoing email over an encrypted tunnel The option to use encrypted protocols for email transfer is configured in the email server and not in the DNS (Domain Name System) server. C. Digitally sign all outgoing email messages DKIM (Domain Keys Identified Mail) is used to publish the public key used for the digital signature for all outgoing email. D. Obtain disposition instructions for emails marked as spam A DMARC (Domain-based Message Authentication, Reporting, and Conformance) record announces the preferred email disposition if a message is identified as spam. DMARC options include accepting the messages, sending them to a spam folder, or simply rejecting the emails.`
  },
  {
    id: 417,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam A",
    question: `A company would like to securely deploy applications without the overhead of installing a virtual machine for each system. Which of the following would be the BEST way to deploy these applications?`,
    choices: {
      A: `Containerization`,
      B: `IoT`,
      C: `Proxy`,
      D: `RTOS`
    },
    correct: "A",
    explanation: `Application containerization uses a single virtual machine to use as a foundation for separate application "containers." These containers are implemented as isolated instances, and an application in one container is not inherently accessible from other containers on the system. Incorrect answers — B. IoT IoT (Internet of Things) is a broad category of embedded devices often installed in our homes and businesses. IoT devices are not commonly associated with the application deployment process. C. Proxy Proxies can be used as security devices, but they aren't commonly used for deploying application instances. D. RTOS RTOS (Real-Time Operating Systems) are designed for time-sensitive applications and services. Manufacturing equipment and transportation systems often incorporate an RTOS.`
  },
  {
    id: 418,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam A",
    question: `A company has just purchased a new application server, and the security director wants to determine if the system is secure. The system is currently installed in a test environment and will not be available to users until the roll out to production next week. Which of the following would be the BEST way to determine if any part of the system can be exploited?`,
    choices: {
      A: `Tabletop exercise`,
      B: `Vulnerability scanner`,
      C: `DDoS`,
      D: `Penetration test`
    },
    correct: "D",
    explanation: `A penetration test can be used to actively exploit potential vulnerabilities in a system or application. This could cause a denial of service or loss of data, so the best practice is to perform the penetration test during nonproduction hours or in a test environment. Incorrect answers — A. Tabletop exercise A tabletop exercise is used to talk through a security event with an incident response team around a conference room table. This is commonly performed as a training device instead of performing a full-scale disaster drill. B. Vulnerability scanner Vulnerability scanners may identify a vulnerability, but they do not actively attempt to exploit the vulnerability. C. DDoS A DDoS (Distributed Denial of Service) attack is often used to disable a service or application, but it doesn't provide any particular information regarding an application vulnerability.`
  },
  {
    id: 419,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam B",
    question: `A security administrator has performed an audit of the organization’s production web servers, and the results have identified default configurations, web services running from a privileged account, and inconsistencies with SSL certificates. Which of the following would be the BEST way to resolve these issues?`,
    choices: {
      A: `Server hardening`,
      B: `Multi-factor authentication`,
      C: `Enable HTTPS`,
      D: `Run operating system updates`
    },
    correct: "A",
    explanation: `Many applications and services include secure configuration guides to assist in hardening the system. These hardening steps will make the system as secure as possible while simultaneously allowing the application to run efficiently. Incorrect answers — B. Multi-factor authentication Although multi-factor authentication is always a good best practice, simply enabling multiple authentication methods would not resolve the issues identified during the audit. C. Enable HTTPS Most web servers will use HTTPS to ensure that network communication is encrypted. However, requiring encrypted network traffic would not correct the issues identified during the audit. D. Run operating system updates Keeping the system updated is another good best practice, but the issues identified during the audit were not related to OS patches. Many of the issues identified in the audit appear to be related to the configuration of the web server, so any resolution should focus on correcting these configuration issues.`
  },
  {
    id: 420,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam B",
    question: `A shipping company stores information in small regional warehouses around the country. The company maintains an IPS at each warehouse to watch for suspicious traffic patterns. Which of the following would BEST describe the security control used at the warehouse?`,
    choices: {
      A: `Deterrent`,
      B: `Compensating`,
      C: `Directive`,
      D: `Detective`
    },
    correct: "D",
    explanation: `An IPS can detect, alert, and log an intrusion attempt. The IPS could also be categorized as a preventive control, since it has the ability to actively block known attacks. Incorrect answers — A. Deterrent A deterrent discourages an intrusion attempt, but it doesn't directly prevent the access. An application splash screen or posted warning sign would be categorized as a deterrent. B. Compensating A compensating control can’t prevent an attack, but it can provide an alternative when an attack occurs. For example, a compensating control would include the re-imaging of a compromised server. C. Directive Directive control types are guidelines offered to help direct a subject towards security compliance. Training users on the proper storage of sensitive files would be an example of a directive control.`
  },
  {
    id: 421,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam B",
    question: `The Vice President of Sales has asked the IT team to create daily backups of the sales data. The Vice President is an example of a:`,
    choices: {
      A: `Data owner`,
      B: `Data controller`,
      C: `Data steward`,
      D: `Data processor`
    },
    correct: "A",
    explanation: `The data owner is accountable for specific data, so this person is often a senior officer of the organization. Incorrect answers — B. Data controller A data controller manages the processing of the data. For example, a payroll department would be a data controller, and a payroll servicing company would be the data processor. C. Data steward The data steward manages access rights to the data. In this example, the IT team would be the data steward. D. Data processor The data processor is often a third-party that processes data on behalf of the data controller.`
  },
  {
    id: 422,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam B",
    question: `A security engineer is preparing to conduct a penetration test of a thirdparty website. Part of the preparation involves reading through social media posts for information about this site. Which of the following describes this practice?`,
    choices: {
      A: `Partially known environment`,
      B: `OSINT`,
      C: `Exfiltration`,
      D: `Active reconnaissance`
    },
    correct: "B",
    explanation: `OSINT (Open Source Intelligence) describes the process of obtaining information from open sources such as social media sites, corporate websites, online forums, and other publicly available locations. Incorrect answers — A. Partially known environment A partially known environment describes how aware an attacker might be about a test. The attacker may have access to some information about the test, but not all information is disclosed. C. Exfiltration Exfiltration describes the theft of data by an attacker. D. Active reconnaissance Active reconnaissance would show some evidence of data gathering. For example, performing a ping scan or DNS query wouldn’t exploit a vulnerability, but it would show that someone was gathering information.`
  },
  {
    id: 423,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam B",
    question: `A company would like to orchestrate the response when a virus is detected on company devices. Which of the following would be the BEST way to implement this function?`,
    choices: {
      A: `Active reconnaissance`,
      B: `Log aggregation`,
      C: `Vulnerability scan`,
      D: `Escalation scripting`
    },
    correct: "D",
    explanation: `Scripting and automation can provide methods to automate or orchestrate the escalation response when a security issue is detected. Incorrect answers — A. Active reconnaissance Active reconnaissance will gather information about a system, but it does not provide any ongoing monitoring or response features. B. Log aggregation Log aggregation provides a method of centralizing evidence and log files for reporting and future analysis. The aggregated log does not inherently provide a response to a security event. C. Vulnerability scan A vulnerability scan will identify any known vulnerabilities that may be associated with a system. However, a vulnerability scan will not identify real-time infections or automate the response.`
  },
  {
    id: 424,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam B",
    question: `A user in the accounting department has received a text message from the CEO. The message requests payment by cryptocurrency for a recently purchased tablet. Which of the following would BEST describe this attack?`,
    choices: {
      A: `Brand impersonation`,
      B: `Watering hole attack`,
      C: `Smishing`,
      D: `Typosquatting`
    },
    correct: "C",
    explanation: `Smishing is phishing using SMS (Short Message Service), and is more commonly referenced as text messaging. A message allegedly from the CEO asking for an unusual payments using cryptocurrency or gift cards would be categorized as smishing. Incorrect answers — A. Brand impersonation Brand impersonation usually involves a third-party pretending to be an employee or representative of another (usually well-known) company. This text message did not claim a particular brand or trademark as part of the attack. B. Watering hole attack A watering hole attack requires users to visit a central website or location. Viewing this text message did not require the user to visit any third-party websites. D. Typosquatting A typosquatting attack commonly uses a misspelling of a domain name to redirect victims to a malicious website.`
  },
  {
    id: 425,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam B",
    question: `A company has been informed of a hypervisor vulnerability that could allow users on one virtual machine to access resources on another virtual machine. Which of the following would BEST describe this vulnerability?`,
    choices: {
      A: `Containerization`,
      B: `Jailbreaking`,
      C: `SDN`,
      D: `Escape`
    },
    correct: "D",
    explanation: `A VM (Virtual Machine) escape is a vulnerability that allows communication between separate VMs. Incorrect answers — A. Containerization Containerization is an application deployment architecture that uses a self-contained group of application code and dependencies. Using containerization, many separate containers can be deployed simultaneously on a single system. B. Jailbreaking Jailbreaking describes the replacement of firmware on a mobile phone or tablet with the goal of enabling or allowing features that would not normally be available. For example, a jailbroken phone or tablet can install software from locations other than the primary app store. C. SDN SDN (Software-Defined Networking) separates the control plane of devices from the data plane. This allows for more automation and dynamic changes to the infrastructure.`
  },
  {
    id: 426,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam B",
    question: `While working from home, users are attending a project meeting over a web conference. When typing in the meeting link, the browser is unexpectedly directed to a different website than the web conference. Users in the office do not have any issues accessing the conference site. Which of the following would be the MOST likely reason for this issue?`,
    choices: {
      A: `Buffer overflow`,
      B: `Wireless disassociation`,
      C: `Amplified DDoS`,
      D: `DNS poisoning`
    },
    correct: "D",
    explanation: `An attacker with access to a DNS (Domain Name System) server can modify the DNS configuration files and redirect users to a different website. Anyone using a different DNS server may not see any problems with connectivity to the original site. Incorrect answers — A. Buffer overflow A buffer overflow vulnerability is associated with application input that exceeds the expected input size. A buffer overflow would cause an application to fail or perform unusually, but a buffer overflow would not appear as a redirected web server from a DNS lookup. B. Wireless deauthentication Wireless deauthentication would cause users on a wireless network to constantly disconnect. Wireless deauthentication would not cause a redirection of a website. C. Amplified DDoS An amplified DDOS (Distributed Denial of Service) would attack a service from many different devices and cause the service to be unavailable. This attack sends specially crafted packets to maximize the amount of traffic seen in the response. In this example, the service did not document any availability problems.`
  },
  {
    id: 427,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam B",
    question: `A company is launching a new internal application that will not start until a username and password is entered and a smart card is plugged into the computer. Which of the following BEST describes this process?`,
    choices: {
      A: `Federation`,
      B: `Accounting`,
      C: `Authentication`,
      D: `Authorization`
    },
    correct: "C",
    explanation: `The process of proving who you say you are is authentication. In this example, the password and smart card are two factors of authentication, and both reasonably prove that the person with the login credentials is authentic. Incorrect answers — A. Federation Federation provides a way to authenticate and authorize between two different organizations. In this example, the authentication process uses internal information without any type of connection or trust to a third-party. B. Accounting Accounting will document information regarding a user’s session, such as login time, data sent and received, files transferred, and logout time. D. Authorization The authorization process assigns users to resources. This process commonly occurs after the authentication process is complete.`
  },
  {
    id: 428,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam B",
    question: `An online retailer is planning a penetration test as part of their PCI DSS validation. A third-party organization will be performing the test, and the online retailer has provided the Internet-facing IP addresses for their public web servers. No other details were provided. What penetration testing methodology is the online retailer using?`,
    choices: {
      A: `Known environment`,
      B: `Passive reconnaissance`,
      C: `Partially known environment`,
      D: `Benchmarks`
    },
    correct: "C",
    explanation: `A partially known environment test is performed when the attacker knows some information about the victim, but not all information is available. Incorrect answers — A. Known environment A known environment test is performed when the attacker has complete details about the victim’s systems and infrastructure. B. Passive reconnaissance Passive reconnaissance is the process of gathering information from publicly available sites, such as social media or corporate websites. D. Benchmarks Security benchmarks describe a set of best practices to apply to an application, operating system, or any other service. A benchmark does not describe the information provided to a vulnerability scanning service.`
  },
  {
    id: 429,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam B",
    question: `A manufacturing company produces radar used by commercial and military organizations. A recently proposed policy change would allow the use of mobile devices inside the facility. Which of the following would be the MOST significant threat vector issue associated with this change in policy?`,
    choices: {
      A: `Unauthorized software on rooted devices`,
      B: `Remote access clients on the mobile devices`,
      C: `Out of date mobile operating systems`,
      D: `Loss of intellectual property`
    },
    correct: "D",
    explanation: `The exfiltration of confidential information and intellectual property is relatively simple with an easily transportable mobile phone. Organizations associated with sensitive products or services must always be aware of the potential for information leaks using files, photos, or video. Incorrect answers — A. Unauthorized software on rooted devices Although unauthorized software use can be a security issue, it isn’t as significant as the exfiltration of intellectual property. B. Remote access clients on the mobile devices It’s sometimes convenient to have a remote access client available, and this type of access can certainly be a concern if the proper security is not in place. However, the much more significant security issue in this list would be associated with the ease of photos and videography when working with confidential information. C. Out of date mobile operating systems Having an outdated operating system can potentially include security vulnerabilities, but these vulnerabilities do not have the significance of an active data exfiltration method.`
  },
  {
    id: 430,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam B",
    question: `Which of the following would be the BEST way for an organization to verify the digital signature provided by an external email server?`,
    choices: {
      A: `Perform a vulnerability scan`,
      B: `View the server's device certificate`,
      C: `Authenticate to a RADIUS server`,
      D: `Check the DKIM record`
    },
    correct: "D",
    explanation: `A DKIM (Domain Keys Identified Mail) record is a DNS (Domain Name System) entry that includes the public key associated with an email server's digital signatures. A legitimate email server will digitally sign all outgoing emails and provide the public key in their DNS for third-party validation. Incorrect answers — A. Perform a vulnerability scan A vulnerability scan can provide information on any unpatched applications or services, but it won't provide digital signature verification for incoming email messages. B. View the server's device certificate A device certificate can validate the trust of a system, but it does not provide digital signature validation for email servers. C. Authenticate to a RADIUS server A RADIUS server can verify account credentials, but it does not provide a method for validating the digital signatures provided by a third-party email server.`
  },
  {
    id: 431,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam B",
    question: `A company is using older operating systems for their web servers and are concerned of their stability during periods of high use. Which of the following should the company use to maximize the uptime and availability of this service?`,
    choices: {
      A: `Cold site`,
      B: `UPS`,
      C: `Redundant routers`,
      D: `Load balancer`
    },
    correct: "D",
    explanation: `A load balancer maintains a pool of servers and can distribute the load across those devices. If a device fails, the other servers will continue to operate and provide the necessary services. Incorrect answers — A. Cold site A cold site is commonly used for disaster recovery and would require building an infrastructure and installing software before the site would be functional. Moving the web services to a cold site would not be an efficient form of server resiliency. B. UPS A UPS (Uninterruptible Power Supply) provides an alternative power source when the main power is no longer available. Although this would provide additional uptime for power faults, it does not provide resiliency if an operating system crashes. C. Redundant routers Maintaining multiple routers is common in highly available networks, but multiple routers will not provide uptime if the server operating system was to fail.`
  },
  {
    id: 432,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam B",
    question: `A user in the accounting department would like to email a spreadsheet with sensitive information to a list of third-party vendors. Which of the following would be the BEST way to protect the data in this email?`,
    choices: {
      A: `Full disk encryption`,
      B: `Key exchange algorithm`,
      C: `Salted hash`,
      D: `Asymmetric encryption`
    },
    correct: "D",
    explanation: `Asymmetric encryption uses a recipient's public key to encrypt data, and this data can only be decrypted with the recipient's private key. This encryption method is commonly used with software such as PGP or GPG. Incorrect answers — A. Full disk encryption Full disk encryption protects all data saved on a storage drive, but it does not provide any data protection for messages or attachments sent between email servers. B. Key exchange algorithm A key exchange algorithm can be used to securely exchange key information between devices, but it does not provide a method of encrypting data. C. Salted hash A salted hash describes a hash value that includes some additional data (the salt) to provide randomization. A salted hash does not provide data confidentiality or encryption.`
  },
  {
    id: 433,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam B",
    question: `A system administrator would like to segment the network to give the marketing, accounting, and manufacturing departments their own private network. The network communication between departments would be restricted for additional security. Which of the following should be configured on this network?`,
    choices: {
      A: `VPN`,
      B: `RBAC`,
      C: `VLAN`,
      D: `SDN`
    },
    correct: "C",
    explanation: `A VLAN (Virtual Local Area Network) is a common method of using a switch to logically segment a network. The devices in each segmented VLAN can only communicate with other devices in the same VLAN. A router is used to connect VLANs, and this router can often be used to control traffic flows between the VLANs. Incorrect answers — A. VPN A VPN (Virtual Private Network) is an encryption technology used to secure network connections between sites or remote end-user communication. VPNs are not commonly used to segment internal network communication. B. RBAC RBAC (Role-Based Access Control) describes a control mechanism for managing rights and permissions in an operating system. RBAC is not used for network segmentation. D. SDN SDN (Software Defined Networking) separates the planes of operation so that infrastructure devices would have a defined control plane and data plane. SDN would not be used when segmenting internal networks.`
  },
  {
    id: 434,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam B",
    question: `A technician at an MSP has been asked to manage devices on third-party private network. The technician needs command line access to internal routers, switches, and firewalls. Which of the following would provide the necessary access?`,
    choices: {
      A: `HSM`,
      B: `Jump server`,
      C: `NAC`,
      D: `Air gap`
    },
    correct: "B",
    explanation: `A jump server is a highly secured device commonly used to access secure areas of another network. The technician would first connect to the jump server using SSH or a VPN tunnel, and then "jump" from the jump server to other devices on the inside of the protected network. This would allow technicians at an MSP (Managed Service Provider) to securely access devices on their customer's private networks. Incorrect answers — A. HSM An HSM (Hardware Security Module) is a secure method of cryptographic key backup and hardware-based cryptographic offloading. C. NAC NAC (Network Access Control) is a broad term describing access control based on a health check or posture assessment. NAC will deny access to devices that don't meet the minimum security requirements. D. Air gap An air gap is a segmentation strategy that separates devices or networks by physically disconnecting them from each other.`
  },
  {
    id: 435,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam B",
    question: `A transportation company is installing new wireless access points in their corporate office. The manufacturer estimates the access points will operate an average of 100,000 hours before a hardware-related outage. Which of the following describes this estimate?`,
    choices: {
      A: `MTTR`,
      B: `RPO`,
      C: `RTO`,
      D: `MTBF`
    },
    correct: "D",
    explanation: `The MTBF (Mean Time Between Failures) is the average time expected between outages. This is usually an estimation based on the internal device components and their expected operational lifetime. Incorrect answers — A. MTTR MTTR (Mean Time to Repair) is the time required to repair a product or system after a failure. B. RPO RPO (Recovery Point Objectives) define how much data loss would be acceptable during a recovery. C. RTO RTO (Recovery Time Objectives) define the minimum objectives required to get up and running to a particular service level.`
  },
  {
    id: 436,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam B",
    question: `A security administrator is creating a policy to prevent the disclosure of credit card numbers in a customer support application. Users of the application would only be able to view the last four digits of a credit card number. Which of the following would provide this functionality?`,
    choices: {
      A: `Hashing`,
      B: `Tokenization`,
      C: `Masking`,
      D: `Salting`
    },
    correct: "C",
    explanation: `Data masking hides data from being viewed. The full credit card numbers are stored in a database, but only a limited view of this data is available when accessing the information from the application. Incorrect answers — A. Hashing Hashing is a method of storing a digital fingerprint of data. In this example, the last four digits displayed are the actual card numbers and not a hash of the card numbers. B. Tokenization Tokenization replaces sensitive data with a non-sensitive placeholder. In this example, the only visible information is part of the actual card number. Tokenization is not used to replace any of the card numbers. D. Salting Salting adds randomized data when performing a hashing function. Salting is often used to add additional randomization when storing passwords.`
  },
  {
    id: 437,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam B",
    question: `A user is authenticating through the use of a PIN and a fingerprint. Which of the following would describe these authentication factors?`,
    choices: {
      A: `Something you know, something you are`,
      B: `Something you are, somewhere you are`,
      C: `Something you have, something you know`,
      D: `Somewhere you are, something you are`
    },
    correct: "A",
    explanation: `A PIN (Personal Identification Number) is something you know, and a fingerprint is something you are. Incorrect answers — B. Something you are, somewhere you are A fingerprint would be categorized as something you are, but a somewhere you are could be a set of GPS coordinates or IP addresses. C. Something you have, something you know Something you have could be an smart ID card or phone app, and something you know could be a PIN or password. D. Somewhere you are, something you are Somewhere you are would be a location, and something you are would be a biometric reading.`
  },
  {
    id: 438,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam B",
    question: `A security administrator is configuring the authentication process used by technicians when logging into wireless access points and switches. Instead of using local accounts, the administrator would like to pass all login requests to a centralized database. Which of the following would be the BEST way to implement this requirement?`,
    choices: {
      A: `COPE`,
      B: `AAA`,
      C: `IPsec`,
      D: `SIEM`
    },
    correct: "B",
    explanation: `Using AAA (Authentication, Authorization, and Accounting) is a common method of centralizing authentication. Instead of having separate local accounts on different devices, users can authenticate with account information maintained in a centralized database. Incorrect answers — A. COPE COPE (Corporate-owned, personally enabled) devices are purchased by the organization and enabled for both business and personal use. A COPE device does not provide any centralized authentication functionality. C. IPsec IPsec is commonly used as an encrypted tunnel between sites or endpoints. It’s useful for protecting data sent over the network, but IPsec isn’t used to centralize the authentication process. D. SIEM A SIEM (Security Information and Event Management) service provides centralized logging and reporting for network infrastructure devices. A SIEM service does not provide any centralized authentication features.`
  },
  {
    id: 439,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam B",
    question: `A recent audit has determined that many IT department accounts have been granted Administrator access. The audit recommends replacing these permissions with limited access rights. Which of the following would describe this policy?`,
    choices: {
      A: `Password vaulting`,
      B: `Offboarding`,
      C: `Least privilege`,
      D: `Discretionary access control`
    },
    correct: "C",
    explanation: `The policy of least privilege limits the rights and permissions of a user account to only the access required to accomplish their objectives. This policy would limit the scope of an attack originating from a user in the IT department. Incorrect answers — A. Password vaulting Password vaulting is a secure way to store and retrieve passwords, but it doesn't include a policy for limiting system access. B. Offboarding The offboarding process describes the policies and procedures associated with someone leaving the organization or someone who is no longer an employee of the company. D. Discretionary access control With discretionary access control (DAC), access and permissions are determined by the owner or originator of the files or resources.`
  },
  {
    id: 440,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam B",
    question: `A recent security audit has discovered usernames and passwords which can be easily viewed in a packet capture. Which of the following did the audit identify?`,
    choices: {
      A: `Weak encryption`,
      B: `Improper patch management`,
      C: `Insecure protocols`,
      D: `Open ports`
    },
    correct: "C",
    explanation: `An insecure authentication protocol will transmit information "in the clear," or without any type of encryption or protection. Incorrect answers — A. Weak encryption A weak encryption cipher will appear to protect data, but instead can be commonly circumvented to reveal the plaintext. In this example, the usernames and passwords were not encrypted in any way and could be viewed in a packet capture. B. Improper patch management Maintaining systems to the latest patch version will protect against vulnerabilities and security issues. Sending information in the clear over the network is not commonly associated with an unpatched system. D. Open ports Open ports are usually associated with a service or application on a device. An open port is not commonly associated with any encryption or protected network communication.`
  },
  {
    id: 441,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam B",
    question: `Before deploying a new application, a company is performing an internal audit to ensure all of their servers are configured with the appropriate security features. Which of the following would BEST describe this process?`,
    choices: {
      A: `Due care`,
      B: `Active reconnaissance`,
      C: `Data retention`,
      D: `Statement of work`
    },
    correct: "A",
    explanation: `Due care describes a duty to act honestly and in good faith. Due diligence is often associated with third-party activities, and due care tends to refer to internal activities. Incorrect answers — B. Active reconnaissance Active reconnaissance refers to the process of collecting information before a penetration test. Active reconnaissance includes activities that will communicate to devices where traffic can be logged. C. Data retention Data retention involves the collection and storage of data over time. For example, many organizations are required to collect and store years of email records or financial documents. D. Statement of work A statement of work is often used during a professional services engagement to detail a list of specific tasks to complete. In this example, all of the work is part of an internal audit and does not include any mention of third-party professional services.`
  },
  {
    id: 442,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam B",
    question: `An organization has previously purchased insurance to cover a ransomware attack, but the costs of maintaining the policy have increased above the acceptable budget. The company has now decided to cancel the insurance policies and address potential ransomware issues internally. Which of the following would best describe this action?`,
    choices: {
      A: `Mitigation`,
      B: `Acceptance`,
      C: `Transference`,
      D: `Risk-avoidance`
    },
    correct: "B",
    explanation: `Risk acceptance is a business decision that places the responsibility of the risky activity on the organization itself. Incorrect answers — A. Mitigation If the organization was to purchase additional backup facilities and update their backup processes to include offline backup storage, they would be mitigating the risk of a ransomware infection. C. Transference Purchasing insurance to cover a risky activity is a common method of transferring risk from the organization to the insurance company. D. Risk-avoidance To avoid the risk of ransomware, the organization would need to completely disconnect from the Internet and disable all methods that ransomware might use to infect a system. This risk response technique would most likely not apply to ransomware.`
  },
  {
    id: 443,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam B",
    question: `Which of these threat actors would be MOST likely to install a company's internal application on a public cloud provider?`,
    choices: {
      A: `Organized crime`,
      B: `Nation state`,
      C: `Shadow IT`,
      D: `Hacktivist`
    },
    correct: "C",
    explanation: `Shadow IT is an internal organization within the company but is not part of the IT department. Shadow IT often circumvents or ignores existing IT policies to build their own infrastructure with company resources. Incorrect answers — A. Organized crime Organized crime is usually motivated by money. An organized crime group is more interested in stealing information than installing company applications in a public cloud. B. Nation state Nation states are highly sophisticated hackers, and their efforts are usually focused on obtaining confidential government information or disrupting governmental operations. D. Hacktivist A hacktivist often has a political statement to make, and their hacking efforts would commonly result in a public display of that information. However, a hacktivist would not install company application on a public cloud provider's network.`
  },
  {
    id: 444,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam B",
    question: `An IPS report shows a series of exploit attempts were made against externally facing web servers. The system administrator of the web servers has identified a number of unusual log entries on each system. Which of the following would be the NEXT step in the incident response process?`,
    choices: {
      A: `Check the IPS logs for any other potential attacks`,
      B: `Create a plan for removing malware from the web servers`,
      C: `Disable any breached user accounts`,
      D: `Disconnect the web servers from the network`
    },
    correct: "D",
    explanation: `The unusual log entries on the web server indicate that the system may have been exploited. In that situation, the servers should be contained to prevent all connectivity to those systems. Incorrect answers — A. Check the IPS logs for any other potential attacks Before looking for additional intrusions, the devices showing a potential exploit should be contained. B. Create a plan for removing malware from the web servers The eradication and recovery processes should occur after the systems have been isolated and contained. C. Disable any breached user accounts Disabling accounts is part of the recovery process, and it should occur after the exploited servers are contained.`
  },
  {
    id: 445,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam B",
    question: `A security administrator is viewing the logs on a laptop in the shipping and receiving department and identifies these events: 8:55:30 AM | D:\\Downloads\\ChangeLog-5.0.4.scr | Quarantine Success 9:22:54 AM | C:\\Program Files\\Photo Viewer\\ViewerBase.dll | Quarantine Failure 9:44:05 AM | C:\\Sales\\Sample32.dat | Quarantine Success Which of the following would BEST describe the circumstances surrounding these events?`,
    choices: {
      A: `The antivirus application identified three viruses and quarantined two viruses`,
      B: `The host-based firewall blocked two traffic flows`,
      C: `A host-based allow list has blocked two applications from executing`,
      D: `A network-based IPS has identified two known vulnerabilities`
    },
    correct: "A",
    explanation: `quarantined two viruses The logs are showing the name of files on the local device and a quarantine disposition, which indicates that two of the files were moved (quarantined) to a separate area of the drive. This will prevent the malicious files from executing and will safely store the files for any future investigation. The second file in the list failed the quarantine process, and was most likely because the library was already in use by the operating system and could not be moved. Incorrect answers — B. The host-based firewall blocked two traffic flows A host-based firewall will allow or deny traffic flows based on IP address, port number, application, or other criteria. A host-based firewall does not block traffic flows based on the name of an existing file, and the firewall process would not quarantine or move files to other folders. C. A host-based allow list has blocked two applications from executing The “quarantine” disposition refers to a file that has been moved from one location to another. An allow list function would simply stop the application from executing without changing the location of an application file. D. A network-based IPS has identified two known vulnerabilities The logs from a network-based IPS (Intrusion Prevention System) would not commonly be located on a user’s laptop, and those logs would display allow or deny dispositions based on the name of a known vulnerability. A network-based IPS would also not commonly move (quarantine) files on an end-user’s computer.`
  },
  {
    id: 446,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam B",
    question: `In the past, an organization has relied on the curated Apple App Store to avoid issues associated with malware and insecure applications. However, the IT department has discovered an iPhone in the shipping department with applications not available on the Apple App Store. How did the shipping department user install these apps on their mobile device?`,
    choices: {
      A: `Side loading`,
      B: `Malicious update`,
      C: `VM escape`,
      D: `Cross-site scripting`
    },
    correct: "A",
    explanation: `If Apple’s iOS has been circumvented using jailbreaking, a user can install apps without using the Apple App Store. Circumventing a curated app store to install an app manually is called side loading. Incorrect answers — B. Malicious update A malicious update would patch an existing app and would not commonly install a different app onto a mobile device. C. VM escape VM (Virtual Machine) escape describes the unauthorized access of one VM from a different VM on the same hypervisor. An app installation on a phone is not related to virtual machines. D. Cross-site scripting Cross-site scripting is an attack that uses the trust in a browser to gain access to a third-party site. The installation of an app isn't commonly associated with cross-site scripting.`
  },
  {
    id: 447,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam B",
    question: `A company has noticed an increase in support calls from attackers. These attackers are using social engineering to gain unauthorized access to customer data. Which of the following would be the BEST way to prevent these attacks?`,
    choices: {
      A: `User training`,
      B: `Next-generation firewall`,
      C: `Internal audit`,
      D: `Penetration testing`
    },
    correct: "A",
    explanation: `Many social engineering attacks do not involve technology, so the best way to prevent the attack is to properly train users to watch for these techniques. Incorrect answers — B. Next-generation firewall A next-generation firewall can provide extensive protection against attacks involving technology, but a firewall can't stop a phone conversation or similar type of social engineering. C. Internal audit An internal audit may be able to recognize and report on the increase in social engineering attacks, but an audit does not provide a method of stopping the attack from originally occurring. D. Penetration testing Penetration testing can identify vulnerabilities and can attempt to exploit those vulnerabilities. Penetration testing does not block an attack from occurring.`
  },
  {
    id: 448,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam B",
    question: `As part of an internal audit, each department of a company has been asked to compile a list of all devices, operating systems, and applications in use. Which of the following would BEST describe this audit?`,
    choices: {
      A: `Attestation`,
      B: `Self-assessment`,
      C: `Regulatory compliance`,
      D: `Vendor monitoring`
    },
    correct: "B",
    explanation: `A self-assessment describes an organization performing their own security checks. Incorrect answers — A. Attestation Attestation is commonly one of the last steps when performing an audit. This attestation is an opinion of the truth or accuracy of a company’s security position. C. Regulatory compliance Regulatory compliance is often required to validate a specific security posture. For example, an organization storing credit card information may be required by regulation to ensure the confidentiality of that data. This question does not mention any type of regulation as the reason for this information gathering. D. Vendor monitoring When working with a third-party, it's often important to maintain an ongoing audit and monitoring processes with the vendor. In this example, all of the information gathering is with internal company departments.`
  },
  {
    id: 449,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam B",
    question: `A company is concerned about security issues at their remote sites. Which of the following would provide the IT team with more information of potential shortcomings?`,
    choices: {
      A: `Gap analysis`,
      B: `Policy administrator`,
      C: `Change management`,
      D: `Dependency list`
    },
    correct: "A",
    explanation: `A gap analysis is a formal process comparing the current security posture with where the company would like to be. This often examines many different aspects of the overall security environment. Incorrect answers — B. Policy administrator The Policy Administrator is used in a zero-trust environment to generate access tokens or credentials. C. Change management The change management process is important for the controlled deployment of system changes, but it doesn't help provide an overview of security shortcomings. D. Dependency list A list of dependencies is often used during technical change management to plan for any potential changes. Before a change can occur, all of the dependencies associated with that change must be addressed.`
  },
  {
    id: 450,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam B",
    question: `An attacker has identified a number of devices on a corporate network with the username of “admin” and the password of “admin.” Which of the following describes this situation?`,
    choices: {
      A: `Open service ports`,
      B: `Default credentials`,
      C: `Unsupported systems`,
      D: `Phishing`
    },
    correct: "B",
    explanation: `When a device is first installed, it will often have a default set of credentials such as admin/password or admin/admin. If these default credentials are never changed, they would allow access by anyone who knows the default configuration. Incorrect answers — A. Open service ports Service ports are commonly opened when an inbound connection needs to be made to a service. For example, a web server will open ports 80 and 443 to allow all incoming traffic requests by the service. C. Unsupported systems Unsupported systems describe devices or services no longer supported by the manufacturer. An unsupported system may not receive ongoing security patches or updates. D. Phishing Phishing uses social engineering to obtain sensitive or private information. A device using the default credentials would not require a phishing attack to determine the valid username and password.`
  },
  {
    id: 451,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam B",
    question: `A security administrator attends an annual industry convention with other security professionals from around the world. Which of the following attacks would be MOST likely in this situation?`,
    choices: {
      A: `Smishing`,
      B: `Supply chain`,
      C: `SQL injection`,
      D: `Watering hole`
    },
    correct: "D",
    explanation: `A watering hole attack infects a third-party visited by the intended victims. An industry convention would be a perfect location to attack security professionals. Incorrect answers — A. Smishing Smishing, or SMS phishing, is a phishing attack over text messaging. A security administrator attending an industry event would not be the best possible scenario for smishing. B. Supply chain A supply chain attack infects part of the product manufacturing process in an attempt to also infect everything further down the chain. An industry trade event would not be a common vector for a supply chain attack. C. SQL injection A SQL (Structured Query Language) injection attack takes advantage of a software vulnerability to allow direct access to a SQL database. A SQL injection is not commonly directed towards an individual or an event.`
  },
  {
    id: 452,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam B",
    question: `An organization has developed an in-house mobile device app for order processing. The developers would like the app to identify revoked server certificates without sending any traffic over the corporate Internet connection. Which of the following must be configured to allow this functionality?`,
    choices: {
      A: `CSR generation`,
      B: `OCSP stapling`,
      C: `Key escrow`,
      D: `Wildcard`
    },
    correct: "B",
    explanation: `The use of OCSP (Online Certificate Status Protocol) requires communication between the client and the issuing CA (Certificate Authority). If the CA is an external organization, then validation checks will communicate across the Internet. The certificate holder can verify their own status and avoid client Internet traffic by storing the status information on an internal server and “stapling” the OCSP status into the SSL/TLS handshake. Incorrect answers — A. CSR generation A CSR (Certificate Signing Request) is used during the key creation process. The certificate is sent to the CA to be signed as part of the CSR. C. Key escrow Key escrow will provide a third-party with access to decryption keys. The escrow process is not involved in real-time server revocation updates. D. Wildcard A wildcard certificate can be used across many different systems matching the fully qualified domain name associated with the wildcard.`
  },
  {
    id: 453,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam B",
    question: `A security administrator has been asked to build a network link to secure all communication between two remote locations. Which of the following would be the best choice for this task?`,
    choices: {
      A: `SCAP`,
      B: `Screened subnet`,
      C: `IPsec`,
      D: `Network access control`
    },
    correct: "C",
    explanation: `IPsec (Internet Protocol Security) is commonly used to create a VPN (Virtual Private Network) protected tunnel between devices or locations. Incorrect answers — A. SCAP The SCAP (Security Content Automation Protocol) is used as a common protocol across multiple security tools. SCAP is not used to provide an encrypted tunnel between two locations. B. Screened subnet A screened subnet is a protected area commonly used to host public services without allowing access to an organization's internal private network. D. Network access control Network access control (NAC) describes the authentication and authorization process when devices connect to a network. NAC is not used to connect two sites over an encrypted channel.`
  },
  {
    id: 454,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam B",
    question: `A Linux administrator has received a ticket complaining of response issues with a database server. After connecting to the server, the administrator views this information: Filesystem /dev/xvda1 Size 158G Used Avail Use% Mounted on 158G 0 100% / Which of the following would BEST describe this information?`,
    choices: {
      A: `Buffer overflow`,
      B: `Resource consumption`,
      C: `SQL injection`,
      D: `Race condition`
    },
    correct: "B",
    explanation: `The available storage on the local filesystem has been depleted, and the information shows 0 bytes available. More drive space would need to be available for the server to return to normal response times. Incorrect answers — A. Buffer overflow A buffer overflow allows an attacker to manipulate the contents of memory. A filesystem at 100% utilization does not describe the contents in memory. C. SQL injection A SQL injection is a network attack type used to access database information directly. A SQL injection would not cause significant storage drive utilization. D. Race condition A race condition is a programming issue where a portion of the application is making changes not seen by other parts of the application. A race condition does not commonly use all available storage space on the device.`
  },
  {
    id: 455,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam B",
    question: `Which of the following can be used for credit card transactions from a mobile device without sending the actual credit card number across the network?`,
    choices: {
      A: `Tokenization`,
      B: `Hashing`,
      C: `Steganography`,
      D: `Masking`
    },
    correct: "A",
    explanation: `Tokenization replaces sensitive data with a non-sensitive placeholder. Tokenization is commonly used for NFC (Near-Field Communication) payment systems, and sends a single-use token across the network instead of the actual credit card information. Incorrect answers — B. Hashing Hashing creates a digital "fingerprint" of data, but hashing isn't used to transfer card numbers or other financial details from one device to another. C. Steganography Steganography describes hiding data within other media types. For example, it's common to use steganography to hide text documents within an image file. However, steganography is not commonly used to transfer credit card transactions across the network. D. Masking Data masking hides some of the original data to protect sensitive information. Credit card transfers cannot omit or hide data necessary to complete the transaction.`
  },
  {
    id: 456,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam B",
    question: `A security administrator receives a report each week showing a Linux vulnerability associated with a Windows server. Which of the following would prevent this information from appearing in the report?`,
    choices: {
      A: `Alert tuning`,
      B: `Application benchmarking`,
      C: `SIEM aggregation`,
      D: `Data archiving`
    },
    correct: "A",
    explanation: `Our monitoring systems are not always perfect, and many require ongoing tuning to properly configure alerts and notifications of important events. Incorrect answers — B. Application benchmarking Creating an application benchmark can help with the planning and implementation of security monitoring. However, the creation of an application benchmark does not change the alert messages created by a third-party monitoring system. C. SIEM aggregation A SIEM (Security Information and Event Manager) can be used to aggregate all log files to a centralized reporting system. Creating a centralized log repository does not remove invalid alerts from a weekly report. D. Data archiving Many organizations are required to archive data for long-term security monitoring. Simply archiving the data does not change the alert notification in a weekly report.`
  },
  {
    id: 457,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam B",
    question: `Which of the following would a company use to calculate the loss of a business activity if a vulnerability is exploited?`,
    choices: {
      A: `Risk tolerance`,
      B: `Vulnerability classification`,
      C: `Environmental variables`,
      D: `Exposure factor`
    },
    correct: "D",
    explanation: `An exposure factor describes a loss of value to the organization. For example, a network throughput issue might limit access to half of the users, creating a 50% exposure factor. A completely disabled service would calculated as a 100% exposure factor. Incorrect answers — A. Risk tolerance Risk tolerance describes the amount of risk that would be acceptable to an organization. For example, an organization may tolerate the risk involved with a delay so that patches can be tested prior to deployment. B. Vulnerability classification Most vulnerabilities are classified into categories and are often assigned a score to designate the severity of the known vulnerability. C. Environmental variables An environmental variable is considered when prioritizing patches and security responses. For example, a device in the production network environment will probably have priority over the devices in a test lab environment.`
  },
  {
    id: 458,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam B",
    question: `An administrator is designing a network to be compliant with a security standard for storing credit card numbers. Which of the following would be the BEST choice to provide this compliance?`,
    choices: {
      A: `Implement RAID for all storage systems`,
      B: `Connect a UPS to all servers`,
      C: `DNS should be available on redundant servers`,
      D: `Perform regular audits and vulnerability scans`
    },
    correct: "D",
    explanation: `A focus of credit card storage compliance is to keep credit card information private. The only option matching this requirement is scheduled audits and ongoing vulnerability scans. Incorrect answers — A. Implement RAID for all storage systems RAID (Redundant Array of Independent Disks) is an important consideration for any project that stores data, but using a RAID array is not part of this compliance requirement. Although compliance may include backups, RAID is not a backup technology. B. Connect a UPS to all servers Integrating a UPS (Uninterruptible Power Supply) is an important way to maintain power during an outage, but it's not required for security compliance for data storage. C. DNS should be available on redundant servers Name resolution can be an important service on the network, but maintaining redundant DNS servers isn't required for compliance with sensitive data storage.`
  },
  {
    id: 459,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam B",
    question: `A company is accepting proposals for an upcoming project, and one of the responses is from a business owned by a board member. Which of the following would describe this situation?`,
    choices: {
      A: `Due diligence`,
      B: `Vendor monitoring`,
      C: `Conflict of interest`,
      D: `Right-to-audit`
    },
    correct: "C",
    explanation: `A conflict of interest occurs when a personal interest in a business transaction could compromise the judgment of the people involved. Personal and family relationships between organizations may potentially be a conflict of interest. Incorrect answers — A. Due diligence Due diligence is the process of investigating and verifying information before doing business with an organization. B. Vendor monitoring Vendor monitoring involves ongoing management of the vendor relationship, including ongoing reviews, periodic audits, and other checks and balances. D. Right-to-audit A right-to-audit clause is commonly added to business contracts to ensure access to periodic audits when working with a third-party.`
  },
  {
    id: 460,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam B",
    question: `A company has rolled out a new application that requires the use of a hardware-based token generator. Which of the following would be the BEST description of this access feature?`,
    choices: {
      A: `Something you know`,
      B: `Somewhere you are`,
      C: `Something you are`,
      D: `Something you have`
    },
    correct: "D",
    explanation: `The use of the hardware token generator requires the user be in possession of the device during the login process. Incorrect answers — A. Something you know The number, or token, created by the token generator isn’t previously known by the user, and there’s no requirement to remember the tokens once the authentication process is complete. B. Somewhere you are The location of an individual can be a useful authentication factor when evaluating the validity of a login request. Someone authenticating from an unexpected location or country may be subject to additional authentication checks. C. Something you are Something you are describes a biometric factor, such as a fingerprint or facial scan. The token generator works without any type of biometric scan.`
  },
  {
    id: 461,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam B",
    question: `A company has signed an SLA with an Internet service provider. Which of the following would BEST describe the requirements of this SLA?`,
    choices: {
      A: `The customer will connect to remote sites over an IPsec tunnel`,
      B: `The service provider will provide 99.99% uptime`,
      C: `The customer applications use HTTPS over tcp/443`,
      D: `Customer application use will be busiest on the 15th of each month`
    },
    correct: "B",
    explanation: `An SLA (Service Level Agreement) is a contract specifying the minimum terms for provided services. It’s common to include uptime, response times, and other service metrics in an SLA. Incorrect answers — A. The customer will connect to remote sites over an IPsec tunnel A service level agreement describes the minimum service levels provided to the customer. You would not commonly see descriptions of how the service will be used in the SLA contract. C. The customer applications use HTTPS over tcp/443 The protocols used by the customer’s applications aren’t part of the service requirements from the ISP. D. Customer application use will be busiest on the 15th of each month The customer’s application usage isn’t part of the service requirements from the ISP.`
  },
  {
    id: 462,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam B",
    question: `An attacker has created multiple social media accounts and is posting information in an attempt to get the attention of the media. Which of the following would BEST describe this attack?`,
    choices: {
      A: `On-path`,
      B: `Watering hole`,
      C: `Misinformation campaign`,
      D: `Phishing`
    },
    correct: "C",
    explanation: `Misinformation campaigns are carefully crafted attacks that exploit social media and traditional media. Incorrect answers — A. On-path An on-path attack uses an attacker in the middle of a conversation to capture or modify information as it traverses the network. B. Watering hole A watering hole attack uses a carefully selected attack location to infect visitors to a specific website. D. Phishing A phishing attack uses social engineering to convince the victim to disclose private or sensitive information.`
  },
  {
    id: 463,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam B",
    question: `Which of the following would be the BEST way to protect credit card account information when performing real-time purchase authorizations?`,
    choices: {
      A: `Masking`,
      B: `DLP`,
      C: `Tokenization`,
      D: `NGFW`
    },
    correct: "C",
    explanation: `Tokenization is a technique that replaces user data with a non-sensitive placeholder, or token. Tokenization is commonly used on mobile devices during a purchase to use a credit card without transmitting the physical credit card number across the network. Incorrect answers — A. Masking Data masking hides sensitive data by replacing the information with a non-sensitive alternative. An example of masking would be replacing an account number on a receipt with hash marks or asterisks. B. DLP DLP (Data Loss Prevention) solutions can identify and block sensitive data from being sent over the network. DLP does not provide any additional security or protection for real-time financial transactions. D. NGFW An NGFW (Next-Generation Firewall) is an application-aware security technology. NGFW solutions can provide additional controls for specific applications, but they won't provide any additional account protections when sending financial details.`
  },
  {
    id: 464,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam B",
    question: `A company must comply with legal requirements for storing customer data in the same country as the customer's mailing address. Which of the following would describe this requirement?`,
    choices: {
      A: `Geographic dispersion`,
      B: `Least privilege`,
      C: `Data sovereignty`,
      D: `Exfiltration`
    },
    correct: "C",
    explanation: `Data sovereignty laws can mandate how data is handled and stored. Data residing in a country is usually subject to the laws of that country, and compliance regulations may not allow the data to be moved outside of the country. Incorrect answers — A. Geographic dispersion Geographic dispersion describes a data resiliency technique for distributing data to different locations to maintain uptime and availability. B. Least privilege Least privilege refers to a set of rights and permissions that would limit access based on a user's job requirements. Least privilege does not describe the storage of information based on a geographic location. D. Exfiltration Exfiltration describes the removal or theft of data by a third-party. Exfiltration is not associated with the geographic storage of information.`
  },
  {
    id: 465,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam B",
    question: `A company is installing access points in all of their remote sites. Which of the following would provide confidentiality for all wireless data?`,
    choices: {
      A: `802.1X`,
      B: `WPA3`,
      C: `RADIUS`,
      D: `MDM`
    },
    correct: "B",
    explanation: `WPA3 (Wi-Fi Protected Access 3) is an encryption protocol used on wireless networks. All data sent over a WPA3-protected wireless network will be encrypted. Incorrect answers — A. 802.1X 802.1X is a standard for authentication using AAA (Authentication, Authorization and Accounting) services. 802.1X is commonly used in conjunction with LDAP, RADIUS, or similar authentication services. C. RADIUS RADIUS (Remote Authentication Dial-In User Service) is an authentication protocol used for centralized authentication. RADIUS is commonly used in conjunction with 802.1X, but RADIUS does not provide data confidentiality or encryption. D. MDM An MDM (Mobile Device Manager) is used to manage and control an organization's mobile phones and tablets. MDM policies are not used to manage the confidentiality settings of a wireless access point.`
  },
  {
    id: 466,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam B",
    question: `A security administrator has found a keylogger installed in an update of the company's accounting software. Which of the following would prevent the transmission of the collected logs?`,
    choices: {
      A: `Prevent the installation of all software`,
      B: `Block all unknown outbound network traffic at the Internet firewall`,
      C: `Install host-based anti-virus software`,
      D: `Scan all incoming email attachments at the email gateway`
    },
    correct: "B",
    explanation: `Internet firewall Keylogging software has two major functions; record user input, and transmit that information to a remote location. Local file scanning and software best-practices can help prevent the initial installation, and controlling outbound network traffic can block unauthorized file transfers. Incorrect answers — A. Prevent the installation of all software Blocking software installations may prevent the initial malware infection, but it won’t provide any control of outbound data. C. Install host-based anti-virus software A good anti-virus application can identify malware before the installation occurs, but anti-virus does not commonly provide any control of network communication. D. Scan all incoming email attachments at the email gateway Malware can be installed from many sources, and sometimes the source is unexpected. Scanning or blocking executables at the email gateway can help prevent infection but it won’t provide any control of outbound file transfers.`
  },
  {
    id: 467,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam B",
    question: `A security administrator has created a new policy prohibiting the use of MD5 hashes due to collision problems. Which of the following describes the reason for this new policy?`,
    choices: {
      A: `Two different messages have different hashes`,
      B: `The original message can be derived from the hash`,
      C: `Two identical messages have the same hash`,
      D: `Two different messages share the same hash`
    },
    correct: "D",
    explanation: `A well-designed hashing algorithm will create a unique hash value for every possible input. If two different inputs create the same hash, the hash algorithm has created a collision. Incorrect answers — A. Two different messages have different hashes In normal operation, two different inputs will create two different hash outputs. B. The original message can be derived from the hash Hashing is a one-way cipher, and you cannot derive the original message from a hash value. C. Two identical messages have the same hash Two identical messages should always create exactly the same hash output.`
  },
  {
    id: 468,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam B",
    question: `A security administrator has been tasked with hardening all internal web servers to control access from certain IP address ranges and ensure all transferred data remains confidential. Which of the following should the administrator include in his project plan? (Select TWO)`,
    choices: {
      A: `Change the administrator password`,
      B: `Use HTTPS for all server communication`,
      C: `Uninstall all unused software`,
      D: `Enable a host-based firewall ❍ E. Install the latest operating system update`
    },
    correct: "B",
    explanation: `D. Enable a host-based firewall Using the secure HTTPS (Hypertext Transfer Protocol Secure) protocol will ensure that all network communication is encrypted between the web server and the client devices. A host-based firewall can be used to allow or disallow traffic from certain IP address ranges. Incorrect answers — A. Change the administrator password Occasionally changing administrator passwords is a good best practice, but it doesn't directly address the goals of IP address filtering and data confidentiality. C. Uninstall all unused software Uninstalling unused software is an important hardening technique, but uninstalling software does not control access from IP address ranges, and it does not provide any data confidentiality. E. Install the latest operating system update Installing an operating system update can be a useful security task, but an OS update does not directly encrypt network traffic and does not control access from certain IP addresses.`
  },
  {
    id: 469,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam B",
    question: `A security administrator has identified the installation of ransomware on a database server and has quarantined the system. Which of the following should be followed to ensure that the integrity of the evidence is maintained?`,
    choices: {
      A: `E-discovery`,
      B: `Non-repudiation`,
      C: `Chain of custody`,
      D: `Legal hold`
    },
    correct: "C",
    explanation: `A chain of custody is a documented record of the evidence. The chain of custody also documents the interactions of every person who comes into contact with the evidence to maintain the integrity. Incorrect answers — A. E-discovery E-discovery is the process of collecting, preparing, reviewing, interpreting, and producing electronic documents. However, e-discovery does not provide any additional integrity of the data. B. Non-repudiation Non-repudiation ensures the author of a document cannot be disputed. Non-repudiation does not provide any method of tracking and managing digital evidence. D. Legal hold A legal hold is a technique for preserving important evidence, but it doesn't provide any mechanism for the ongoing integrity of that evidence.`
  },
  {
    id: 470,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam B",
    question: `Which of the following would be the BEST option for application testing in an environment completely separated from the production network?`,
    choices: {
      A: `Virtualization`,
      B: `VLANs`,
      C: `Cloud computing`,
      D: `Air gap`
    },
    correct: "D",
    explanation: `An air gapped network removes all connectivity between components and ensures there would be no possible communication path between the test network and the production network. Incorrect answers — A. Virtualization Although virtualization provides the option to connect devices in a private network, there’s still the potential for a misconfigured network configuration or an application to communicate externally. B. VLANs VLANs (Virtual Local Area Networks) are a common segmentation technology, but a router could easily connect the VLANs to the production network. C. Cloud computing Cloud-based technologies provide for many network options, and it’s common to maintain a connection between the cloud and the rest of the network.`
  },
  {
    id: 471,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam B",
    question: `A security engineer is planning the installation of a new IPS. The network must remain operational if the IPS is turned off or disabled. Which of the following would describe this configuration?`,
    choices: {
      A: `Containerization`,
      B: `Load balancing`,
      C: `Fail open`,
      D: `Tunneling`
    },
    correct: "C",
    explanation: `An IPS (Intrusion Prevention System) designed to fail open will maintain network connectivity during an outage or failure of the IPS. Even if the IPS was not actively preventing an intrusion, the network would still be up and running. Incorrect answers — A. Containerization Application containerization describes the process of creating a deployment strategy where each application runs in a self-contained image. Containerization allows organizations to quickly deploy and run different application instances on the same hardware. B. Load balancing A load balancer will divide a single load among many different servers to provide faster response and a more efficient use of network resources. Load balancers do not maintain connectivity for an intrusion prevention system. D. Tunneling Tunneling describes the process of transferring data inside of another protocol type, such as sending encrypted data over a VPN (Virtual Private Network). Tunneling would not maintain network connectivity if an IPS was to fail.`
  },
  {
    id: 472,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam B",
    question: `Which of the following describes the process of hiding data from others by embedding the data inside of a different media type?`,
    choices: {
      A: `Hashing`,
      B: `Obfuscation`,
      C: `Encryption`,
      D: `Masking`
    },
    correct: "B",
    explanation: `Obfuscation is the process of taking something normally understandable and making it very difficult to understand or to be seen. One common obfuscation method used by steganography is to embed a document within an image file. Incorrect answers — A. Hashing Hashing creates a digital "fingerprint" based on the contents of data. This hash provides a method of checking data integrity, but it doesn't hide data within other media types. C. Encryption Encrypting source code will provide data confidentiality, but encrypting the data does not require any type of subterfuge. Conversely, hiding data within another media type does not necessarily require any type of encryption. D. Masking Data masking hides portions of the data by replacing it with a different value. For example, replacing a credit card number with a series of asterisks would be a common form of data masking.`
  },
  {
    id: 473,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam B",
    question: `Which of the following vulnerabilities would be the MOST significant security concern when protecting against a hacktivist?`,
    choices: {
      A: `Data center access with only one authentication factor`,
      B: `Spoofing of internal IP addresses when accessing an intranet server`,
      C: `Employee VPN access uses a weak encryption cipher`,
      D: `Lack of patch updates on an Internet-facing database server`
    },
    correct: "D",
    explanation: `database server One of the easiest ways for a third-party to obtain information is through an existing Internet connection. A hacktivist could potentially exploit an unpatched server to obtain unauthorized access to the operating system and data. Incorrect answers — A. Data center access with only one authentication factor Most hacktivists don’t have access to walk around inside of your building, and they certainly wouldn’t have access to secure areas. A single authentication method would commonly prevent unauthorized access to a data center for both employees and non-employees, although more authentication factors would provide additional security. B. Spoofing of internal IP addresses when accessing an intranet server Intranet servers are not accessible from the outside. This makes them an unlikely target for hacktivists and other non-employees. C. Employee VPN access uses a weak encryption cipher A weak encryption cipher can be a security issue, but a potential exploitation would require the network traffic to begin any decryption attempts. Although this scenario would technically be possible if someone was to catch an employee on a public wireless network, it’s not the most significant security issue in the available list.`
  },
  {
    id: 474,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam B",
    question: `A company is installing a security appliance to protect the organization's web-based applications from attacks such as SQL injections and unexpected input. Which of the following would BEST describe this appliance?`,
    choices: {
      A: `WAF`,
      B: `VPN concentrator`,
      C: `UTM`,
      D: `SASE`
    },
    correct: "A",
    explanation: `A WAF (Web Application Firewall) is designed as a firewall for web-based applications. WAFs are commonly used to protect against application attacks such as injections, cross-site scripting, and invalid input types. Incorrect answers — B. VPN concentrator A VPN (Virtual Private Network) concentrator is the central connectivity point for all remote VPN users. A VPN concentrator would not be used as protection against application attacks. C. UTM A UTM (Unified Threat Management) appliance acts as a traditional firewall, and many UTMs may also include additional features such as intrusion prevention and content filtering. However, UTMs are not commonly used for protection of web-based applications. D. SASE SASE (Secure Access Service Edge) is a cloud-aware version of a VPN client, and it is commonly deployed as a client on the user device. A SASE solution would not commonly be used to protect a web-based application.`
  },
  {
    id: 475,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam B",
    question: `Which of the following would be the BEST way to determine if files have been modified after the forensics data acquisition process has occurred?`,
    choices: {
      A: `Use a tamper seal on all storage devices`,
      B: `Create a hash of the data`,
      C: `Image each storage device for future comparison`,
      D: `Take screenshots of file directories with file sizes`
    },
    correct: "B",
    explanation: `A hash creates a unique value and can be quickly validated at any time in the future. If the hash value changes, then the data must have also changed. Incorrect answers — A. Use a tamper seal on all storage devices A physical tamper seal will identify if a device has been opened or physically modified, but it cannot identify any changes to the data on the storage device. C. Image each storage device for future comparison A copy of the data would allow for comparisons later, but the process of comparing the data would take much more time than simply validating a hash value. It’s also possible that someone could tamper with both the original data and the copy of the data. D. Take screenshots of file directories with file sizes It’s very easy to change the contents of a file without changing the size of the file. Storing the file sizes would not provide any data integrity checks.`
  },
  {
    id: 476,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam B",
    question: `A system administrator is implementing a password policy that would require letters, numbers, and special characters to be included in every password. Which of the following controls MUST be in place to enforce this password policy?`,
    choices: {
      A: `Length`,
      B: `Expiration`,
      C: `Reuse`,
      D: `Complexity`
    },
    correct: "D",
    explanation: `Adding different types of characters to a password requires technical controls that increase password complexity. Incorrect answers — A. Length Adding all of these character types to a password do not necessarily change the length of the password. B. Expiration A common password security policy is an expiration date. This password expiration requires the user to periodically change their password. C. Reuse The controls that prohibit the reuse of passwords do not control the characters used in the password.`
  },
  {
    id: 477,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam B",
    question: `Which of the following would a company follow to deploy a weekly operating system patch?`,
    choices: {
      A: `Tabletop exercise`,
      B: `Penetration testing`,
      C: `Change management`,
      D: `Internal audit`
    },
    correct: "C",
    explanation: `Change management is a formal process used to control and manage any changes to hardware, software, or any other part of the IT infrastructure. Incorrect answers — A. Tabletop exercise A tabletop exercise is associated with disaster recovery planning. Instead of performing a full-scale disaster recovery test, the organization's key decision makers sit at a table and describe the steps they would follow if a disaster was to occur. B. Penetration testing Penetration testing is used to find vulnerabilities and other security issues. Although a penetration test might discover an unpatched system, the process of deploying the patch would be managed by the change control process. D. Internal audit Internal audits are important security validations, but an audit would not be used to deploy patches to company devices.`
  },
  {
    id: 478,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam B",
    question: `Which of the following would be the MOST likely result of plaintext application communication?`,
    choices: {
      A: `Buffer overflow`,
      B: `Replay attack`,
      C: `Resource consumption`,
      D: `Directory traversal`
    },
    correct: "B",
    explanation: `To perform a replay attack, the attacker needs to capture the original non-encrypted content. If an application is not using encrypted communication, the data capture process is a relatively simple process for the attacker. Incorrect answers — A. Buffer overflow A buffer overflow takes advantage of an application vulnerability and can perform this overflow over both an encrypted or non-encrypted channel. C. Resource consumption Resource consumption describes the use of network bandwidth or storage space, but those resource issues don't necessarily require the network communication to be sent in the clear. D. Directory traversal Directory traversal is commonly associated with unexpected access to the file system of a server. Non-encrypted communication is not a prerequisite in a directory traversal attack.`
  },
  {
    id: 479,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam B",
    question: `A system administrator believes that certain configuration files on a Linux server have been modified from their original state. The administrator has reverted the configurations to their original state, but he would like to be notified if they are changed again. Which of the following would be the BEST way to provide this functionality?`,
    choices: {
      A: `HIPS`,
      B: `File integrity monitoring`,
      C: `Application allow list`,
      D: `WAF`
    },
    correct: "B",
    explanation: `File integrity monitoring software (i.e., Tripwire, System File Checker, etc.) can be used to alert if the contents of a file are modified. Incorrect answers — A. HIPS The use of HIPS (Host-based Intrusion Prevention System) would help identify any security vulnerabilities, but there’s nothing relating to this issue that would indicate it was caused by an operating system or application vulnerability. A HIPS would not commonly alert on the modification of a specific file. C. Application allow list In this example, we’re not sure how the file was changed or if a separate application or editor was used. If the change was made with a valid application, an allow list would not provide any feedback or alerts. D. WAF A WAF (Web Application Firewall) is used to protect web-based applications from malicious attack. The example in this question was not related to a web-based application.`
  },
  {
    id: 480,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam B",
    question: `A security administrator is updating the network infrastructure to support 802.1X. Which of the following would be the BEST choice for this configuration?`,
    choices: {
      A: `LDAP`,
      B: `SIEM`,
      C: `SNMP traps`,
      D: `SPF`
    },
    correct: "A",
    explanation: `802.1X is a standard for authentication, and LDAP (Lightweight Directory Access Protocol) is a common protocol used for centralized authentication. Other protocols such as RADIUS, TACACS+, or Kerberos would also be options for 802.1X authentication. Incorrect answers — B. SIEM A SIEM (Security Information and Event Management) system is designed to consolidate log files from multiple devices, quickly search through data, and create long-term reports. A SIEM does not provide any additional functionality for the authentication process. C. SNMP traps SNMP (Simple Network Management Protocol) traps are used to provide alerts and alarms from servers and infrastructure devices. SNMP is not an authentication protocol. D. SPF SPF (Sender Policy Framework) is an email security standard used to validate authorized mail senders. The SPF information is added to a DNS (Domain Name System) server and accessed by email recipients.`
  },
  {
    id: 481,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam B",
    question: `A company owns a time clock appliance, but the time clock doesn’t provide any access to the operating system and it doesn't provide a method to upgrade the firmware. Which of the following describes this appliance?`,
    choices: {
      A: `End-of-life`,
      B: `ICS`,
      C: `SDN`,
      D: `Embedded system`
    },
    correct: "D",
    explanation: `An embedded system often does not provide access to the OS and may not provide a method of upgrading the system firmware. Incorrect answers — A. End-of-life A device at its end-of-life is no longer supported by the vendor. In this example, the vendor support status isn’t mentioned. B. ICS ICS (Industrial Control Systems) devices are large industrial systems and usually involve manufacturing equipment or power generation equipment. A time clock would not be categorized as an ICS. C. SDN An SDN (Software Defined Network) is commonly used as a method of deploying network components by separating a device into a data plane, control plane, and management plane. A time clock appliance would not be categorized as an SDN.`
  },
  {
    id: 482,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam B",
    question: `A company has deployed laptops to all employees, and each laptop is enumerated during each login. Which of the following is supported with this configuration?`,
    choices: {
      A: `If the laptop hardware is modified, the security team is alerted`,
      B: `Any malware identified on the system is automatically deleted`,
      C: `Users are required to use at least two factors of authentication`,
      D: `The laptop is added to a private VLAN after the login process`
    },
    correct: "A",
    explanation: `is alerted The enumeration process identifies and reports on the hardware and software installed on the laptop. If this configuration is changed, an alert can be generated. Incorrect answers — B. Any malware identified on the system is automatically deleted Although it's very likely the laptop is running some type of anti-malware software, this question was regarding the enumeration process. C. Users are required to use at least two factors of authentication It's always a good idea to support multifactor authentication, but the enumeration process does not support any additional authentication factors. D. The laptop is added to a private VLAN after the login process Many organizations can identify the login and automatically move that device to the correct VLANs. The enumeration mentioned does not provide this functionality.`
  },
  {
    id: 483,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam B",
    question: `A security manager believes that an employee is using their laptop to circumvent the corporate Internet security controls through the use of a cellular hotspot. Which of the following could be used to validate this belief ? (Select TWO)`,
    choices: {
      A: `HIPS`,
      B: `UTM logs`,
      C: `Web application firewall events`,
      D: `Host-based firewall logs ❍ E. Next-generation firewall logs`
    },
    correct: "A",
    explanation: `If the laptop is not communicating across the corporate network, then the only evidence of the traffic would be contained on the laptop itself. A HIPS (Host-based Intrusion Prevention System) logs and host-based firewall logs may contain information about recent traffic flows to systems outside of the corporate network. Incorrect answers — B. UTM logs A unified threat management appliance is commonly located in the core of the network. The use of a cellular hotspot would circumvent the UTM and this traffic would not be logged. C. Web application firewall events Web application firewalls are commonly used to protect internal web servers. Outbound Internet communication would not be logged, and anyone circumventing the existing security controls would also not be logged. E. Next-generation firewall logs Although a next-generation firewall keeps detailed logs, any systems communicating outside of the normal corporate Internet connection would not appear in those logs.`
  },
  {
    id: 484,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam B",
    question: `An application developer is creating a mobile device app that will require a true random number generator real-time memory encryption. Which of the following technologies would be the BEST choice for this app?`,
    choices: {
      A: `HSM`,
      B: `Secure enclave`,
      C: `NGFW`,
      D: `Self-signed certificates`
    },
    correct: "B",
    explanation: `A secure enclave describes a hardware processor designed for security. The secure enclave monitors the boot process, create true random numbers, store root cryptography keys, and much more. Incorrect answers — A. HSM An HSM (Hardware Security Module) is often implemented as a highend cryptographic hardware appliance. HSMs are often used as secure storage for cryptographic keys. C. NGFW An NGFW (Next Generation Firewall) is an application aware firewall and is commonly used to manage traffic flows. An NGFW would not be able to provide true random numbers or real-time memory encryption on a device. D. Self-signed certificates A self-signed certificate is a digital certificate created on a private Certificate Authority and digitally signed by the private CA. A certificate does not provide randomization functions or memory encryption capabilities.`
  },
  {
    id: 485,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam B",
    question: `Which of the following would be a common result of a successful vulnerability scan?`,
    choices: {
      A: `Usernames and password hashes from a server`,
      B: `A list of missing software patches`,
      C: `A copy of image files from a private file share`,
      D: `The BIOS configuration of a server`
    },
    correct: "B",
    explanation: `A vulnerability scan can identify vulnerabilities and list the patches associated with those vulnerabilities. Incorrect answers — A. Usernames and password hashes from a server This type of secure information cannot be obtained through a vulnerability scan. C. A copy of image files from a private file share A private file share would prevent any access by unauthorized users, and a vulnerability scan would not have access to private data. D. The BIOS configuration of a server Private information, such as a device’s BIOS configuration, is not available from a vulnerability scan.`
  },
  {
    id: 486,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam B",
    question: `When connected to the wireless network, users at a remote site receive an IP address which is not part of the corporate address scheme. Communication over this network is also slower than the wireless connections elsewhere in the building. Which of the following would be the MOST likely reason for these issues?`,
    choices: {
      A: `Rogue access point`,
      B: `Domain hijack`,
      C: `DDoS`,
      D: `Encryption is enabled`
    },
    correct: "A",
    explanation: `A rogue access point is an unauthorized access point added by a user or attacker. This access point may not necessarily be malicious, but it does create significant security concerns and unauthorized access to the corporate network. Incorrect answers — B. Domain hijack A domain hijacking would be associated with unauthorized access to a domain name. In this example, the wireless IP addressing and performance issues do not appear to be related to a domain hijack. C. DDoS A DDOS (Distributed Denial of Service) would cause outages or slow performance to a service. A DDoS would not commonly modify or update any local IP addresses. D. Encryption is enabled Wireless encryption protocols are relatively efficient and do not contribute to a significant delay of network traffic. An encrypted wireless network would also not assign IP addresses outside of the expected range.`
  },
  {
    id: 487,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam B",
    question: `A company has identified a compromised server, and the security team would like to know if an attacker has used this device to move between systems. Which of the following would be the BEST way to provide this information?`,
    choices: {
      A: `DNS server logs`,
      B: `Penetration test`,
      C: `NetFlow logs`,
      D: `Email metadata`
    },
    correct: "C",
    explanation: `NetFlow information can provide a summary of network traffic, application usage, and details of network conversations. The NetFlow logs will show all conversations from this device to any others in the network. Incorrect answers — A. DNS server logs DNS server logs will document all name resolutions, but an attacker may not be using a DNS server and may prefer accessing devices by IP address. B. Penetration test A penetration test may identify any vulnerabilities that exist on the server, but it won't provide any information about traffic flows or connections initiated by an attacker. D. Email metadata An email header contains the IP addresses of email servers used to transfer the message, and security signatures to verify the sender. The metadata in an email header would not contain information on traffic flows associated with this attacker.`
  },
  {
    id: 488,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam B",
    question: `A system administrator has protected a set of system backups with an encryption key. The system administrator used the same key when restoring files from this backup. Which of the following would BEST describe this encryption type?`,
    choices: {
      A: `Asymmetric`,
      B: `Key escrow`,
      C: `Symmetric`,
      D: `Out-of-band key exchange`
    },
    correct: "C",
    explanation: `Symmetric encryption uses the same key for both encryption and decryption. Incorrect answers — A. Asymmetric Asymmetric encryption uses different keys for encryption and decryption. B. Key escrow Key escrow describes a third-party which holds the decryption keys for your data. D. Out-of-band key exchange Keys can be transferred between people or systems over the network (inband) or outside the normal network communication (out-of-band). In this example, the key wasn’t exchanged between people or systems, since the system administrator is the same person who encrypted and decrypted.`
  },
  {
    id: 489,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam B",
    question: `A new malware variant takes advantage of a vulnerability in a popular email client. Once installed, the malware forwards all email attachments with credit card information to an external email address. Which of the following would limit the scope of this attack?`,
    choices: {
      A: `Enable MFA on the email client`,
      B: `Scan outgoing traffic with DLP`,
      C: `Require users to enable the VPN when using email`,
      D: `Update the list of malicious URLs in the firewall`
    },
    correct: "B",
    explanation: `DLP (Data Loss Prevention) systems are designed to identify sensitive data transfers. If the DLP finds a data transfer with financial details, personal information, or other private information, the DLP can block the data transfer. Incorrect answers — A. Enable MFA on the email client MFA (Multi-Factor Authentication) can provide more security during the authentication process, but the description of the malware did not associate the exploit with the login process. The malware will most likely wait for the user to login before transferring the data. C. Require users to enable the VPN when using email A VPN (Virtual Private Network) can protect data between systems, but it won't prevent malware from sending data once it connects to the email system. D. Update the list of malicious URLs in the firewall Blocking known URLs (Uniform Resource Locators) in a firewall is a useful way to prevent access to known malicious sites, but it won't prevent malware from sending email messages.`
  },
  {
    id: 490,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam B",
    question: `An organization has identified a security breach and has removed the affected servers from the network. Which of the following is the NEXT step in the incident response process?`,
    choices: {
      A: `Eradication`,
      B: `Preparation`,
      C: `Recovery`,
      D: `Detection ❍ E. Containment`
    },
    correct: "A",
    explanation: `The incident response process is preparation, detection, analysis, containment, eradication, recovery, and lessons learned. Once a system has been contained, any malware or breached user accounts should be removed from the system. Incorrect answers — B. Preparation Before an incident occurs, you should compile contact information, incident handling hardware and software, analysis resources, and other important tools and policies. C. Recovery The focus of the recovery process is to get all of the systems back to normal. This phase removes malware, deletes breached user accounts, and fixes any vulnerabilities. D. Detection Detection of an event can be challenging, but it usually consists of IPS reports, anti-virus alerts, configuration change notifications, and other indicators. E. Containment In this example, the containment and isolation occurred when the affected servers were removed from the network.`
  },
  {
    id: 491,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam B",
    question: `A security administrator has been tasked with storing and protecting customer payment and shipping information for a three-year period. Which of the following would describe the source of this data?`,
    choices: {
      A: `Controller`,
      B: `Owner`,
      C: `Data subject`,
      D: `Processor`
    },
    correct: "C",
    explanation: `In data privacy, the data subject describes an individual with personal data. Payment details and shipping addresses describe personal information from a data subject. Incorrect answers — A. Controller A data controller manages the processing of the data. A payroll department would be an example of a data controller. B. Owner The data owner is commonly accountable for all of the data, and the owner often manages the people and systems associated with processing and securing the data. D. Processor A data processor manages the data on behalf of the data controller. If the data controller is the payroll department, a third-party payroll company would be the data processor.`
  },
  {
    id: 492,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam B",
    question: `Which of the following would be the main reasons why a system administrator would use a TPM when configuring full disk encryption? (Select TWO)`,
    choices: {
      A: `Allows the encryption of multiple volumes`,
      B: `Uses burned-in cryptographic keys`,
      C: `Stores certificates in a hardware security module`,
      D: `Maintains a copy of the CRL ❍ E. Includes built-in protections against brute-force attacks`
    },
    correct: "B",
    explanation: `E. Includes built-in protections against brute-force attacks A TPM (Trusted Platform Module) is part of a computer’s motherboard, and it’s specifically designed to assist and protect with cryptographic functions. Full disk encryption (FDE) can use the burned-in TPM keys to verify the local device hasn’t changed, and there are security features in the TPM to prevent brute-force or dictionary attacks against the full disk encryption login credentials. Incorrect answers — A. Allows the encryption of multiple volumes The use of a TPM is not associated with the number of volumes encrypted with FDE. C. Stores certificates in a hardware security module A hardware security module (HSM) is high-end cryptographic hardware specifically designed for large-scale secured storage on the network. An HSM server is a separate device and is not associated with an individual device’s TPM. D. Maintains a copy of the CRL A CRL (Certificate Revocation List) is maintained by the Certificate Authority and is not part of the TPM.`
  },
  {
    id: 493,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam B",
    question: `A security administrator is using an access control where each file or folder is assigned a security clearance level, such as “confidential” or “secret.” The security administrator then assigns a maximum security level to each user. What type of access control is used in this network?`,
    choices: {
      A: `Mandatory`,
      B: `Rule-based`,
      C: `Discretionary`,
      D: `Role-based`
    },
    correct: "A",
    explanation: `Mandatory access control uses a series of security levels (i.e., public, private, secret) and assigns those levels to each object in the operating system. Users are assigned a security level, and they would only have access to objects that meet or are below that assigned security level. Incorrect answers — B. Rule-based Rule-based access control determines access based on a series of systemenforced rules. An access rule might require a particular browser be used to complete a web page form, or access to a file or system is only allowed during certain times of the day. C. Discretionary Discretionary access control allows the owner of an object to assign access. If a user creates a spreadsheet, the user can then assign users and groups to have a particular level of access to that spreadsheet. D. Role-based Role-based access control assigns a user’s permissions based on their role in the organization. For example, a manager would have a different set of rights and permissions than a team lead.`
  },
  {
    id: 494,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam B",
    question: `A security administrator is reviewing a report showing a number of devices on internal networks are connecting with servers in the data center network. Which of the following security systems should be added to prevent internal systems from accessing data center devices?`,
    choices: {
      A: `VPN`,
      B: `IPS`,
      C: `SIEM`,
      D: `ACL`
    },
    correct: "D",
    explanation: `An ACL (Access Control List) is a security control commonly implemented on routers to allow or restrict traffic flows through the network. Incorrect answers — A. VPN A VPN (Virtual Private Network) can be used to secure data traversing the network, but it’s not commonly used to control traffic flows on an internal network. B. IPS An IPS (Intrusion Prevention System) is designed to identify and block known vulnerabilities traversing the network. An IPS is not used to control other traffic flows. C. SIEM A SIEM (Security Information and Event Management) server is commonly used to consolidate and report on log files. A SIEM would not be able to control or limit network communication.`
  },
  {
    id: 495,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam B",
    question: `A financial services company is headquartered in an area with a high occurrence of tropical storms and hurricanes. Which of the following would be MOST important when restoring services disabled by a storm?`,
    choices: {
      A: `Disaster recovery plan`,
      B: `Stakeholder management`,
      C: `Change management`,
      D: `Retention policies`
    },
    correct: "A",
    explanation: `A disaster recovery plan is a comprehensive set of processes for large-scale outages that affect the organization. Natural disasters, technology failures, and human-created disasters would be reasons to implement a disaster recovery plan. Incorrect answers — B. Stakeholder management Stakeholder management describes the relationship IT has with the their customers. Although stakeholder management is common for the change control process, the priority after a major event is to start the disaster recovery process. C. Change management Change management is an important process when making any type of planned and expected change to the infrastructure. When a tropical storm affects uptime and availability, the disaster recovery plan would be the better choice. D. Retention policies Retention policies specify the type and amount of data that must be backed up and stored. These policies are often self-imposed or part of a larger set of rules and regulations.`
  },
  {
    id: 496,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam B",
    question: `A user in the mail room has reported an overall slowdown of his shipping management software. An anti-virus scan did not identify any issues, but a more thorough malware scan identified a kernel driver which is not part of the original operating system installation. Which of the following malware was installed on this system?`,
    choices: {
      A: `Rootkit`,
      B: `Logic bomb`,
      C: `Bloatware`,
      D: `Ransomware ❍ E. Keylogger`
    },
    correct: "A",
    explanation: `A rootkit often modifies core system files and becomes effectively invisible to the rest of the operating system. The modification of system files and specialized kernel-level drivers are common rootkit techniques. Incorrect answers — B. Logic bomb A logic bomb waits for a predefined event, and then executes at that event time. This event may be a time of day, a user event, or any other identifiable event. C. Bloatware Bloatware consists of apps which have been preinstalled onto new phones, tablets, or computers. Some of these apps can create resource contention for CPU time, memory capacity, or free storage space. D. Ransomware Ransomware makes itself quite visible on your system, and it usually presents warning messages and information on how to remove the ransomware from the system. E. Keylogger A keylogger captures keyboard and mouse input and sends that information to another device. This usually means the keylogger has a visible component in the list of processes, and the keylogger traffic can often be seen on the network.`
  },
  {
    id: 497,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam B",
    question: `A virus scanner has identified a macro virus in a word processing file attached to an email. Which of the following information could be obtained from the metadata of this file?`,
    choices: {
      A: `IPS signature name and number`,
      B: `Operating system version`,
      C: `Date and time when the file was created`,
      D: `Alert disposition`
    },
    correct: "C",
    explanation: `The data and time the file was created is commonly found in the metadata of the document. Incorrect answers — A. IPS signature name and number The metadata is stored in the word processing file, and the IPS will not change the information stored in the file or appear anywhere in the document itself. B. Operating system version Word processing files are not specific to an operating system, so it would not be common to find OS information stored in the metadata of a word processing file. D. Alert disposition The alert information created when the macro virus was discovered would not be included as part of the word processing file metadata.`
  },
  {
    id: 498,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam B",
    question: `When a person enters a data center facility, they must check-in before they are allowed to move further into the building. People who are leaving must be formally checked-out before they are able to exit the building. Which of the following would BEST facilitate this process?`,
    choices: {
      A: `Access control vestibule`,
      B: `Air gap`,
      C: `Pressure sensors`,
      D: `Bollards`
    },
    correct: "A",
    explanation: `An access control vestibule is commonly used to control the flow of people through a particular area. Unlocking the one door of the vestibule commonly restricts the other door from opening, thereby preventing someone from walking through without stopping. It’s common in large data centers to have a single room as the access control vestibule where users are checked in and out of the facility. Incorrect answers — B. Air gap An air gap is a security control that creates a physical separation between devices or networks. An air gap is not used to manage the flow of people. C. Pressure sensors A pressure sensor detects a change in force, and they are commonly used for floor and window sensors. Pressure sensors are not used for the checkin process at a data center. D. Bollards Bollards are often used to channel people through a specific access point and prevent vehicles from entering the area. Bollards may help to protect the outside of a data center building, but bollards are not used as access control devices for data centers or other secure facilities.`
  },
  {
    id: 499,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam B",
    question: `A security administrator has discovered an employee exfiltrating confidential company information by embedding data within image files and emailing the images to a third-party. Which of the following would best describe this activity?`,
    choices: {
      A: `Digital signatures`,
      B: `Steganography`,
      C: `Salting`,
      D: `Data masking`
    },
    correct: "B",
    explanation: `Steganography is the process of hiding information within another document. For example, one common method of steganography embeds data or documents within image files. Incorrect answers — A. Digital signatures A digital signature is a cryptographic method used to check the integrity, authentication, and non-repudiation of a message. Digital signatures are not used to hide information within image files. C. Salting Salting adds information the hashing process to ensure a unique hash value. The salting process does not involve embedding or hiding data within other types of media. D. Data masking Data masking replaces the display of sensitive information with another value. Replacing a credit card number on a receipt with a series of asterisks would be an example of data masking.`
  },
  {
    id: 500,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam B",
    question: `A third-party has been contracted to perform a penetration test on a company's public web servers. The testing company has been provided with the external IP addresses of the servers. Which of the following would describe this scenario?`,
    choices: {
      A: `Defensive`,
      B: `Active reconnaissance`,
      C: `Partially known environment`,
      D: `Regulatory`
    },
    correct: "C",
    explanation: `A partially known environment provides limited information about the testing systems and networks during a penetration test. Incorrect answers — A. Defensive A defensive approach to penetration tests usually involves the blue team identifying incoming attacks in real-time. B. Active reconnaissance Active reconnaissance gathers information which could be visible on network traffic logs and packet captures. The IP addresses of the servers were provided by the client and are not part of a reconnaissance process. D. Regulatory Some organizations may be required by regulation to perform ongoing vulnerability scans and security tasks. There's no mention in this question regarding any legal or regulatory requirements.`
  },
  {
    id: 501,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam B",
    question: `Which of the following would be the best way to describe the estimated number of laptops that might be stolen in a fiscal year?`,
    choices: {
      A: `ALE`,
      B: `SLE`,
      C: `ARO`,
      D: `MTTR`
    },
    correct: "C",
    explanation: `The ARO (Annualized Rate of Occurrence) describes the number of instances estimated to occur in a year. For example, if the organization expect to lose seven laptops to theft in a year, the ARO for laptop theft is seven. Incorrect answers — A. ALE The ALE (Annual Loss Expectancy) is the expected cost for all events in a single year. If it costs $1,000 to replace a single laptop (the SLE) and you expect to lose seven laptops in a year (the ARO), the ALE for laptop theft is $7,000. B. SLE SLE (Single Loss Expectancy) is the monetary loss if a single event occurs. If one laptop is stolen, the cost to replace that single laptop is the SLE, or $1,000. D. MTTR MTTR (Mean Time to Repair) is the time required to repair a product or system after a failure.`
  },
  {
    id: 502,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam C",
    question: `A finance company is legally required to maintain seven years of tax records for all of their customers. Which of the following would be the BEST way to implement this requirement?`,
    choices: {
      A: `Automate a script to remove all tax information more than seven years old`,
      B: `Print and store all tax records in a seven-year cycle`,
      C: `Allow users to download tax records from their account login`,
      D: `Create a separate daily backup archive for all applicable tax records`
    },
    correct: "D",
    explanation: `applicable tax records An important consideration for a data retention mandate is to always have access to the information over the proposed time frame. In this example, a daily backup would ensure tax information is constantly archived over a seven year period and could always be retrieved if needed. If data was inadvertently deleted from the primary storage, the backup would still maintain a copy. Incorrect answers — A. Automate a script to remove all tax information more than seven years old The requirement is to maintain data for at least seven years, but there’s no requirement to remove that data after that time frame. For example, some financial information may need to be retained well beyond the seven year mandate. B. Print and store all tax records in a seven-year cycle Paper has its place, but creating physical output of tax records and storing them for seven years would include a significant cost in time, materials, and inventory space. The requirement to store data for seven years doesn’t require the information to be stored in a physical form. C. Allow users to download tax records from their account login Including a feature to allow access to their records is useful for the user community, but it doesn’t provide any data protection for the seven year retention period.`
  },
  {
    id: 503,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam C",
    question: `A system administrator is designing a data center for an insurance company’s new public cloud and would like to automatically rotate encryption keys on a regular basis. Which of the following would provide this functionality?`,
    choices: {
      A: `TPM`,
      B: `Key management system`,
      C: `Secure enclave`,
      D: `XDR`
    },
    correct: "B",
    explanation: `A key management system is used to manage large security key implementations from a central console. This includes creating keys, associating keys with individuals, rotating keys on regular intervals, and logging all key use. Incorrect answers — A. TPM A TPM (Trusted Platform Module) provides cryptographic features on a hardware device. TPMs are often integrated onto the motherboard or system board of an individual device or component. C. Secure enclave A secure enclave is usually implemented as a cryptographic hardware processor and provides extensive security features for a device. D. XDR XDR (Extended Detection and Response) clients are often installed onto user devices to correlate endpoint, network, and cloud data to identify malicious software and attacks.`
  },
  {
    id: 504,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam C",
    question: `A newly installed IPS is flagging a legitimate corporate application as malicious network traffic. Which of the following would be the BEST way to resolve this issue?`,
    choices: {
      A: `Disable the IPS signature`,
      B: `Block the application`,
      C: `Log all IPS events`,
      D: `Tune the IPS alerts`
    },
    correct: "D",
    explanation: `Each signature of an IPS can commonly be tuned to properly alert on a legitimate issue. Tuning the IPS can properly identify and block attacks and allow all legitimate traffic. Incorrect answers — A. Disable the IPS signature Disabling the IPS signature would certainly remove the alerts, but it also would prevent the IPS from blocking an actual attack. B. Block the application Blocking the corporate application would be an unusual response, especially when the application is legitimate and does not pose a security concern. C. Log all IPS events It's useful to log all security events, but simply logging the events doesn't correct the false positive report.`
  },
  {
    id: 505,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam C",
    question: `A security administrator has identified an internally developed application which allows modification of SQL queries through the web-based frontend. Which of the following changes would resolve this vulnerability?`,
    choices: {
      A: `Store all credentials as salted hashes`,
      B: `Verify the application's digital signature`,
      C: `Validate all application input`,
      D: `Obfuscate the application's source code`
    },
    correct: "C",
    explanation: `Input validation would examine the input from the client and make sure that the input is expected and not malicious. In this example, validating the input would prevent any SQL (Structured Query Language) injection through the web front-end. Incorrect answers — A. Store all credentials as salted hashes Although credential storage should commonly be salted and hashed, changing the process for storing passwords would not resolve any issues related to application input. B. Verify the application's digital signature Code that has been digitally signed by the application developer can be evaluated to ensure that nothing has changed with the application code since it was published, but it would not prevent any type of code injection. D. Obfuscate the application's source code Obfuscation makes something normally understandable very difficult to understand. Obfuscating the source code of the application would make it much more difficult to read, but it wouldn't prevent a SQL injection.`
  },
  {
    id: 506,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam C",
    question: `A system administrator is implementing a fingerprint scanner to provide access to the data center. Which of the following authentication technologies would be associated with this access?`,
    choices: {
      A: `Digital signature`,
      B: `Hard authentication token`,
      C: `Security key`,
      D: `Something you are`
    },
    correct: "D",
    explanation: `An authentication factor of "something you are" often refers to a physical characteristic. This factor commonly uses fingerprints, facial recognition, or some other biometric characteristic to match a user to an authentication attempt. Incorrect answers — A. Digital signature A digital signature is a cryptographic method used to verify the source and contents of data. Adding a fingerprint scanner would not provide a digital signature. B. Hard authentication token Many software-based authentication tokens are available for our mobile phones and tablets, but there are also stand-alone hard authentication tokens that are often attached to a keyring or lanyard. C. Security key A USB (Universal Serial Bus) security key commonly stores a digital signature for authentication or user verification. A USB key is not commonly part of a fingerprint scanner.`
  },
  {
    id: 507,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam C",
    question: `The IT department of a transportation company maintains an on-site inventory of chassis-based network switch interface cards. If a failure occurs, the on-site technician can replace the interface card and have the system running again in sixty minutes. Which of the following BEST describes this recovery metric?`,
    choices: {
      A: `MTBF`,
      B: `MTTR`,
      C: `RPO`,
      D: `RTO`
    },
    correct: "B",
    explanation: `MTTR (Mean Time To Restore) is the amount of time required to get back up and running. This is sometimes called Mean Time To Repair. Incorrect answers — A. MTBF MTBF (Mean Time Between Failures) is a prediction of how long the system will be operational before a failure occurs. C. RPO An RPO (Recovery Point Objective) is a qualifier that determines when the system is recovered. A recovered system may not be completely repaired, but it will be running well enough to maintain a certain level of operation. D. RTO An RTO (Recovery Time Objective) is the service level goal to work towards when recovering a system and getting back up and running.`
  },
  {
    id: 508,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam C",
    question: `A company maintains a server farm in a large data center. These servers are used internally and are not accessible from outside of the data center. The security team has discovered a group of servers was breached before the latest security patches were applied. Breach attempts were not logged on any other servers. Which of these threat actors would be MOST likely involved in this breach?`,
    choices: {
      A: `Organized crime`,
      B: `Insider`,
      C: `Nation state`,
      D: `Unskilled attacker`
    },
    correct: "B",
    explanation: `None of these servers are accessible from the outside, and the only servers with any logged connections were also susceptible to the latest vulnerabilities. To complete this attack, there would need a very specific knowledge of the vulnerable systems and a way to communicate with those servers. Incorrect answers — A. Organized crime Organized crime can be very effective at hacking systems and companies, but they can only affect systems where they have access. Internal servers would not be accessible to anyone on the outside of the organization. C. Nation state A nation state would have the resources needed to attack a network, gain access to the internal systems, and then somehow monitor the update processes for each server. However, the scope and breadth of such an attack would be complex, and this would make the nation state a very speculative option and not the most likely choice from the available list. D. Unskilled attacker Unskilled attackers don’t usually have access to an internal network, and they generally aren’t knowledgeable enough to track the status of which systems may have been recently updated.`
  },
  {
    id: 509,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam C",
    question: `An organization has received a vulnerability scan report of their Internetfacing web servers. The report shows the servers have multiple Sun Java Runtime Environment ( JRE) vulnerabilities, but the server administrator has verified that JRE is not installed. Which of the following would be the BEST way to handle this report?`,
    choices: {
      A: `Install the latest version of JRE on the server`,
      B: `Quarantine the server and scan for malware`,
      C: `Harden the operating system of the web server`,
      D: `Ignore the JRE vulnerability alert`
    },
    correct: "D",
    explanation: `It’s relatively common for vulnerability scans to show vulnerabilities that don’t actually exist, especially if the scans are not credentialed. An issue that is identified but does not actually exist is a false positive, and it can be dismissed once the alert has been properly researched. Incorrect answers — A. Install the latest version of JRE on the server The system administrator verified that JRE was not currently installed on the server, so it would not be possible for that vulnerability to actually exist. Installing an unneeded version of JRE on the server could potentially open the server to actual vulnerabilities. B. Quarantine the server and scan for malware The JRE false positive isn’t an indication of malware, and there's no mention of any additional vulnerabilities or reports of malware. C. Harden the operating system of the web server Although it’s always a good best practice to harden the operating system of an externally-facing server, this vulnerability scan report doesn’t indicate any particular vulnerability with the operating system itself. If the scan identified specific OS vulnerabilities, then additional hardening may be required.`
  },
  {
    id: 510,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam C",
    question: `A user downloaded and installed a utility for compressing and decompressing files. Immediately after installing the utility, the user’s overall workstation performance degraded and it now takes twice as much time to perform any tasks on the computer. Which of the following is the BEST description of this malware infection?`,
    choices: {
      A: `Ransomware`,
      B: `Bloatware`,
      C: `Logic bomb`,
      D: `Trojan`
    },
    correct: "D",
    explanation: `A Trojan horse is malicious software that pretends to be something benign. The user will install the software with the expectation that it will perform a particular function, but in reality it is installing malware on the computer. Incorrect answers — A. Ransomware Ransomware will lock a system and present a message to the user with instructions on how to unlock the system. This usually involves sending the attacker money in exchange for the unlock key. B. Bloatware Bloatware is delivered as numerous and often unnecessary applications which have been pre-installed to a system. C. Logic bomb A logic bomb will execute when a certain event occurs, such as a specific date and time.`
  },
  {
    id: 511,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam C",
    question: `Which of the following is the process for replacing sensitive data with a non-sensitive and functional placeholder?`,
    choices: {
      A: `Steganography`,
      B: `Tokenization`,
      C: `Retention`,
      D: `Masking`
    },
    correct: "B",
    explanation: `Tokenization replaces sensitive data with a token, and this token can be used as a functional placeholder for the original data. Tokenization is commonly used with credit card processing and mobile devices. Incorrect answers — A. Steganography Steganography is a method of hiding data within another media type. For example, one common type of steganography is hiding information within a digital image. C. Retention Data retention specifies the amount of time that data should be stored or saved. Retention policies do not commonly replace sensitive data. D. Masking Data masking hides some of the original data to protect it from view. While hidden, this data cannot be used for any functional purpose.`
  },
  {
    id: 512,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam C",
    question: `A security administrator has installed a new firewall to protect a web server VLAN. The application owner requires all web server sessions communicate over an encrypted channel. Which rule should the security administrator add to the firewall rulebase?`,
    choices: {
      A: `Source: ANY, Destination: ANY, Protocol: TCP, Port: 23, Deny`,
      B: `Source: ANY, Destination: ANY, Protocol: TCP, Port: 22, Allow`,
      C: `Source: ANY, Destination: ANY, Protocol: TCP, Port: 80, Allow`,
      D: `Source: ANY, Destination: ANY, Protocol: TCP, Port: 443, Allow`
    },
    correct: "D",
    explanation: `Most web servers use tcp/443 for HTTPS (Hypertext Transfer Protocol Secure) for encrypted web server communication This rule allows HTTPS encrypted traffic to be forwarded to the web server over tcp/443. Incorrect answers — A. Source: ANY, Destination: ANY, Protocol: TCP, Port: 23, Deny The insecure Telnet protocol commonly uses tcp/23, but most web servers would not be listening on tcp/23. An explicit tcp/23 deny rule would not provide any additional web server security. B. Source: ANY, Destination: ANY, Protocol: TCP, Port: 22, Allow The SSH (Secure Shell) protocol uses tcp/22 to provide encrypted terminal communication, but the web server does not use SSH when communicating with client web browsers. E. Source: ANY, Destination: ANY, Protocol: TCP, Port: 80, Allow Unencrypted web communication commonly uses tcp/80. Since the application owner requires encrypted communication, allowing HTTP over tcp/80 should not be allowed through the firewall.`
  },
  {
    id: 513,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam C",
    question: `Which of these would be used to provide multi-factor authentication?`,
    choices: {
      A: `USB-connected storage drive with FDE`,
      B: `Employee policy manual`,
      C: `Just-in-time permissions`,
      D: `Smart card with picture ID`
    },
    correct: "D",
    explanation: `A smart card commonly includes a certificate that can be used as a multifactor authentication of something you have. These smart cards are commonly combined with an employee identification card, and often require a separate PIN (Personal Identification Number) as an additional authentication factor. Incorrect answers — A. USB-connected storage drive with FDE FDE (Full Disk Encryption) will protect the data on a drive, but it doesn’t provide a factor of authentication. B. Employee policy manual Employee policy manuals aren’t commonly associated with a specific individual, so they are not a good factor of authentication. C. Just-in-time permissions Just-in-time permissions provide a method of distributing login credentials on a temporary or as-needed basis. Just-in-time permissions may or may not include any type of multi-factor authentication.`
  },
  {
    id: 514,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam C",
    question: `A company's network team has been asked to build an IPsec tunnel to a new business partner. Which of the following security risks would be the MOST important to consider?`,
    choices: {
      A: `Supply chain attack`,
      B: `Unsupported systems`,
      C: `Business email compromise`,
      D: `Typosquatting`
    },
    correct: "A",
    explanation: `A direct connection to a third-party creates potential access for an attacker. Most organizations will include a firewall to help monitor and protect against any supply chain attacks. Incorrect answers — B. Unsupported systems Although unsupported systems can be a significant security concern, this question did not document any issues with outdated or legacy devices. C. Business email compromise Business email compromise uses an organization's existing email addresses as an attack destination. A business email compromise does not require an IPsec tunnel to a partner location. D. Typosquatting Typosquatting uses misspelled domain names in an effort to mislead a victim. This often takes the form of phishing emails or unauthorized website links. There are no domain name spelling issues associated with this new IPsec connection.`
  },
  {
    id: 515,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam C",
    question: `A company's human resources team maintains a list of all employees participating in the corporate savings plan. A third-party financial company uses this information to manage stock investments for the employees. Which of the following would describe this financial company?`,
    choices: {
      A: `Processor`,
      B: `Owner`,
      C: `Controller`,
      D: `Custodian`
    },
    correct: "A",
    explanation: `A data processor performs some type of action to the data, and this is often a different group within the organization or a third-party company. In this example, the third-party financial organization is the data processor of the employee's financial data. Incorrect answers — B. Owner The data owner is often an executive of the company and is ultimately responsible for the use and security of this data. C. Controller A data controller manages the data. In this example, the human resources team would control the access and use of the employee data. D. Custodian A data custodian is responsible for the accuracy, privacy, and security of the data. Many organizations will hire data custodians to ensure all data is properly protected and maintained.`
  },
  {
    id: 516,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam C",
    question: `A technology company is manufacturing a military-grade radar tracking system designed to identify any nearby unmanned aerial vehicles (UAVs). The UAV detector must be able to instantly identify and react to a vehicle without delay. Which of the following would BEST describe this tracking system?`,
    choices: {
      A: `RTOS`,
      B: `IoT`,
      C: `ICS`,
      D: `SDN`
    },
    correct: "A",
    explanation: `This tracking system requires an RTOS (Real-Time Operating System) to instantly react to input without any significant delays or queuing in the operating system. Operating systems used by the military, automobile manufacturers, and industrial equipment companies often use RTOS to process certain transactions without any significant delays. Incorrect answers — B. IoT IoT (Internet of Things) devices are generally associated with home automation and do not have a requirement for real-time operation. C. ICS An ICS (Industrial Control System) is often a dedicated network used exclusively to manage and control manufacturing equipment, power generation equipment, water management systems, and other industrial machines. Although some industrial control systems may use an RTOS, using a real-time operating system is not a requirement of an ICS. D. SDN An SDN (Software Defined Network) splits the functions of a network device into separate planes of operation. These logical units extend the functionality and management of a single device and provide a method of easily deploying devices in the cloud.`
  },
  {
    id: 517,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam C",
    question: `An administrator is writing a script to convert an email message to a help desk ticket and assign the ticket to the correct department. Which of the following should be administrator use to complete this script?`,
    choices: {
      A: `Role-based access controls`,
      B: `Federation`,
      C: `Due diligence`,
      D: `Orchestration`
    },
    correct: "D",
    explanation: `Orchestration describes the process of automation, and is commonly associated with large scale automation or automating processes between different systems. Incorrect answers — A. Role-based access controls Role-based access control is used to associate a job function with a set of rights and permissions. The scripting described in this question does not specifically require any role-based access controls. B. Federation Federation commonly describes the process of authenticating to one system using the credentials associated with another system. The scripting process in this question would not require federation. C. Due diligence Due diligence usually involves the investigation performed on a third party prior to doing business. An internal help desk script would not require any due diligence.`
  },
  {
    id: 518,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam C",
    question: `A security administrator would like a report showing how many attackers are attempting to use a known vulnerability to gain access to a corporate web server. Which of the following should be used to gather this information?`,
    choices: {
      A: `Application log`,
      B: `Metadata`,
      C: `IPS log`,
      D: `Windows log`
    },
    correct: "C",
    explanation: `An IPS (Intrusion Prevention System) commonly uses a database of known vulnerabilities to identify and block malicious network traffic. This log of attempted exploits would provide the required report information. Incorrect answers — A. Application log An application log provides a summary of internal application functions and procedures. An application log would not commonly identify and log security events. B. Metadata Metadata is a summary of information attached to a file or document. Metadata does not commonly store security events and would not be a valid source for this reporting data. D. Windows log The Windows Event Viewer shows the logs for the applications, security, and other aspects of the Windows operating system. An operating system log would not commonly gather information on network-based attacks.`
  },
  {
    id: 519,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam C",
    question: `During a ransomware outbreak, an organization was forced to rebuild database servers from known good backup systems. In which of the following incident response phases were these database servers brought back online?`,
    choices: {
      A: `Recovery`,
      B: `Lessons learned`,
      C: `Containment`,
      D: `Detection`
    },
    correct: "A",
    explanation: `The recovery phase focuses on getting things back to normal after an attack. This is the phase that removes malware, fixes vulnerabilities, and recovers the damaged systems. Incorrect answers — B. Lessons learned Once an event is over, it’s useful to have a post-incident meeting to discuss the things that worked and things that didn’t. C. Containment When an event occurs, it’s important to minimize the impact. Isolation and containment can help to limit the spread and effect of an event. D. Detection Detecting and identifying the event is an important step that initiates the rest of the incident response processes.`
  },
  {
    id: 520,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam C",
    question: `A security administrator is installing a web server with a newly built operating system. Which of the following would be the best way to harden this OS?`,
    choices: {
      A: `Create a backup schedule`,
      B: `Install a device certificate`,
      C: `Remove unnecessary software`,
      D: `Disable power management features`
    },
    correct: "C",
    explanation: `The process of hardening an operating system makes it more difficult to attack. In this example, the only step that would limit the attack surface is to remove any unnecessary or unused software. Incorrect answers — A. Create a backup schedule Although a backup schedule is an important security task, the process of performing backups doesn't make the system any more resistant to a potential attack. B. Install a device certificate A device certificate can be used to verify the ownership of a remote system. However, installing a device certificate does not make the remote system more resistant to an attack. D. Disable power management features Disabling the power management features of an operating system does not generally have any impact on the overall security of the system.`
  },
  {
    id: 521,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam C",
    question: `An incident response team would like to validate their disaster recovery plans without making any changes to the infrastructure. Which of the following would be the best course of action?`,
    choices: {
      A: `Tabletop exercise`,
      B: `Hot site fail-over`,
      C: `Simulation`,
      D: `Penetration test`
    },
    correct: "A",
    explanation: `A tabletop exercise is a walk-through exercise where the disaster recovery process can be discussed in a conference room without making any changes to the existing systems. Incorrect answers — B. Hot site fail-over A fail-over to a hot site would involve significant changes to the infrastructure, services, and operations teams. C. Simulation A simulation is a useful test of disaster recovery processes, but it often requires a change to the existing systems to properly test the simulated disaster. D. Penetration test A penetration test will identify vulnerabilities, but it will not provide any evaluation of the disaster recovery process or policies.`
  },
  {
    id: 522,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam C",
    question: `A system administrator has installed a new firewall between the corporate user network and the data center network. When the firewall is turned on with the default settings, users complain the application in the data center is no longer working. Which of the following would be the BEST way to correct this application issue?`,
    choices: {
      A: `Create a single firewall rule with an explicit deny`,
      B: `Build a separate VLAN for the application`,
      C: `Create firewall rules that match the application traffic flow`,
      D: `Enable firewall threat blocking`
    },
    correct: "C",
    explanation: `traffic flow By default, most firewalls implicitly deny all traffic. Firewall rules must be built to match the traffic flows, and only then will traffic pass through the firewall. Incorrect answers — A. Create a single firewall rule with an explicit deny By default, most firewalls have an implicit deny as the last policy in the firewall rules. If traffic does not match any other firewall rule, then the implicit deny drops the traffic. Manually configuring an explicit deny doesn’t provide any additional traffic control because of the alreadyexisting implicit deny, and it doesn’t allow any traffic to pass through the firewall because the rule itself denies all traffic. B. Build a separate VLAN for the application VLAN (Virtual Local Area Network) separation can be used to manage traffic flows or provide additional security options, but creating a VLAN won’t bypass an existing firewall deny rule. D. Enable firewall threat blocking Many next-generation firewalls can identify and block malicious network traffic in real-time. However, enabling this feature would not resolve any existing communication issues between the user network and the data center network.`
  },
  {
    id: 523,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam C",
    question: `Which of these would be used to provide HA for a web-based database application?`,
    choices: {
      A: `SIEM`,
      B: `UPS`,
      C: `DLP`,
      D: `VPN concentrator`
    },
    correct: "B",
    explanation: `HA (High Availability) means the service should always be on and available. The only device on this list providing HA is the UPS (Uninterruptible Power Supply). If power is lost, the UPS will provide electricity using battery power or a gas-powered generator. Incorrect answers — A. SIEM A SIEM (Security Information and Event Management) system consolidates data from devices on the network and provides log searching and reporting features. A SIEM does not provide any HA functionality. C. DLP DLP (Data Loss Prevention) is a method of identifying and preventing the transfer of personal or confidential information through the network. DLP does not provide any HA functionality. D. VPN concentrator A VPN (Virtual Private Network) concentrator is used as an endpoint to an endpoint VPN solution. VPN concentrators do not provide any HA functionality.`
  },
  {
    id: 524,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam C",
    question: `Each year, a certain number of laptops are lost or stolen and must be replaced by the company. Which of the following would describe the total cost the company spends each year on laptop replacements?`,
    choices: {
      A: `SLE`,
      B: `SLA`,
      C: `ALE`,
      D: `ARO`
    },
    correct: "C",
    explanation: `The ALE (Annual Loss Expectancy) is the total amount of the financial loss over an entire year. Incorrect answers — A. SLE SLE (Single Loss Expectancy) describes the loss for a single incident. B. SLA SLA (Service Level Agreement) is a contractual agreement that specifies a minimum service level. D. ARO An ARO (Annualized Rate of Occurrence) is the number of times an event is expected to occur in a year.`
  },
  {
    id: 525,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam C",
    question: `A network administrator is viewing a log file from a web server: https://www.example.com/?s=/Index/think/ app/invokefunction&function=call_user_func_ array&vars[0]=md5&vars[1][0]=__HelloThinkPHP Which of the following would be the BEST way to prevent this attack?`,
    choices: {
      A: `Static code analyzer`,
      B: `Input validation`,
      C: `Allow list`,
      D: `Secure cookies`
    },
    correct: "B",
    explanation: `In this example, the attacker is attempting to use a remote code execution exploit. Input validation can be used to create a very specific filter of allowed input, and a strict validation process would have prevented the web server from processing this attack information. Incorrect answers — A. Static code analyzer A static code analyzer is useful when evaluating the security of existing source code. In this example, the input is dynamic and is initiated by the attacker. C. Allow list An allow list would limit user access to an application, but it would not limit the type of input from the users. D. Secure cookies Secure cookies ensure the information contained in the browser cookie is encrypted and only viewable by the end user. Secure cookies would not prevent a remote code execution attack.`
  },
  {
    id: 526,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam C",
    question: `Sam would like to send an email to Jack and have Jack verify that Sam was the sender of the email. Which of these should Sam use to provide this verification?`,
    choices: {
      A: `Digitally sign with Sam’s private key`,
      B: `Digitally sign with Sam’s public key`,
      C: `Digitally sign with Jack’s private key`,
      D: `Digitally sign with Jack’s public key`
    },
    correct: "A",
    explanation: `The sender of a message digitally signs with their own private key to ensure integrity, authentication, and non-repudiation of the signed contents. The digital signature is validated with the sender’s public key. Incorrect answers — B. Digitally sign with Sam’s public key Since everyone effectively has access to all public keys, adding a digital signature with a publicly available key doesn’t provide any security features. C. Digitally sign with Jack’s private key Jack’s private key would only be available to Jack, so Sam could not possibly use Jack’s private key when performing any cryptographic functions. D. Digitally sign with Jack’s public key Since Jack's public key would be available to anyone, using Jack’s public key for a digital signature would not provide any security features.`
  },
  {
    id: 527,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam C",
    question: `The contract of a long-term temporary employee is ending. Which of these would be the MOST important part of the off-boarding process?`,
    choices: {
      A: `Perform an on-demand audit of the user’s privileges`,
      B: `Archive the decryption keys associated with the user account`,
      C: `Document the user’s outstanding tasks`,
      D: `Obtain a signed copy of the Acceptable Use Policies`
    },
    correct: "B",
    explanation: `user account Without the decryption keys, it will be impossible to access any of the user’s protected files once they leave the company. Given the other possible answers, this one is the only one that would result in unrecoverable data loss if not properly followed. Incorrect answers — A. Perform an on-demand audit of the user’s privileges The user’s account will be disabled once they leave the organization, so an audit of their privileges would not be very useful. C. Document the user’s outstanding tasks Creating documentation is important, but it’s not as important as retaining the user’s data with the decryption keys. D. Obtain a signed copy of the Acceptable Use Policies Acceptable Use Policies (AUPs) are usually signed during the on-boarding process. You won’t need an AUP if the user is no longer accessing the network.`
  },
  {
    id: 528,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam C",
    question: `A cybersecurity analyst has been asked to respond to a denial of service attack against a web server, and the analyst has collected the log files and data from the server. Which of the following would allow a future analyst to verify the data as original and unaltered?`,
    choices: {
      A: `E-discovery`,
      B: `Root cause analysis`,
      C: `Legal hold`,
      D: `Data hashing`
    },
    correct: "D",
    explanation: `Data hashing creates a unique message digest based on stored data. If the data is tampered with, a hash taken after the change will differ from the original value. This allows the forensic engineer to identify if information has been changed. . Incorrect answers — A. E-discovery E-Discovery (Electronic Discovery) describes the collection, preparation, review, interpretation, and production of electronic documents. Collecting information through e-discovery does not guarantee the integrity of the data. B. Root cause analysis A root cause analysis examines the evidence and determines the reason for the breach or attack. Performing a root cause analysis can help prevent future attacks, but it would not ensure the integrity of the collected data. C. Legal hold A legal hold is a legal technique to preserve relevant information. This legal hold will ensure the data remains accessible for any legal preparation that needs to occur prior to litigation.`
  },
  {
    id: 529,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam C",
    question: `A security administrator is reviewing authentication logs. The logs show a large number of accounts with at least three failed authentication attempts during the previous week. Which of the following would BEST explain this report data?`,
    choices: {
      A: `Downgrade attack`,
      B: `Phishing`,
      C: `Injection`,
      D: `Spraying`
    },
    correct: "D",
    explanation: `A spraying attack attempts to discover login credentials using a small number of authentication attempts. If the password isn't discovered in those few attempts, the brute force process stops before any account lockouts occur. An attacker could potentially perform a spraying attack across many accounts without any noticeable alerts or alarms. Incorrect answers — A. Downgrade attack A downgrade attack takes advantage of a cryptographic weakness or vulnerability to gain access. This weakness is often due to an unpatched application or a poorly implemented cryptographic process. In this example, the attack is focused on a small number of brute force attempts and not on a cryptographic issue. B. Phishing Phishing is a useful attack for gathering information. Since a phishing attack often gathers valid authentication details, it's not necessary for the phishing process to also perform a brute force attack. C. Injection An injection attack adds additional information to a data stream in an attempt to access systems or data which would normally not be accessible. An injection attack does not generally perform a brute force attack.`
  },
  {
    id: 530,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam C",
    question: `A security administrator has been asked to block all browsing to casino gaming websites. Which of the following would be the BEST way to implement this requirement?`,
    choices: {
      A: `Tune the IPS signatures`,
      B: `Block port tcp/443 on the firewall`,
      C: `Configure 802.1X for web browsing`,
      D: `Add a content filter rule`
    },
    correct: "D",
    explanation: `Web filters contain a large database of categorized website addresses, and this allows an administrator to create rules to block browsing attempts to specific content. For example, a content filter may allow browsing to news and business sites, but block browsing attempts to gaming and shopping sites. Incorrect answers — A. Tune the IPS signatures An IPS (Intrusion Prevention System) can identify and block known exploits within network traffic. An IPS does not maintain a categorized list of websites, and tuning the IPS signatures would not block specific website categories. B. Block port tcp/443 on the firewall Blocking a single port would not provide filtering on a specific website category. In this example, blocking all tcp/443 traffic would effectively block all web browsing traffic to secure sites. C. Configure 802.1X for web browsing 802.1X is an authentication protocol often used with network access control. The 802.1X protocol does not provide any filtering or categorization of website traffic.`
  },
  {
    id: 531,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam C",
    question: `A company is experiencing downtime and outages when application patches and updates are deployed during the week. Which of the following would help to resolve these issues?`,
    choices: {
      A: `Onboarding considerations`,
      B: `Incident response policies`,
      C: `Change management procedures`,
      D: `Decentralized governance`
    },
    correct: "C",
    explanation: `Change management defines a series of best practices for implementing changes in a complex technical environment. The goals of change management are to implement updates and changes while also maintaining the uptime and availability of critical business systems. Incorrect answers — A. Onboarding considerations The onboarding process occurs when new employees join the organization. A change to the onboarding process would not correct the outages created by patches and updates. B. Incident response policies An operating system update or application patch is not categorized as a security incident, so updating or modifying an incident response process would not have any effect on system availability. D. Decentralized governance In this example, the governance of a system does not appear to be effective in managing changes, and decentralizing the governance would not commonly provide any resolution for unmanaged changes.`
  },
  {
    id: 532,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam C",
    question: `A company is implementing a series of steps to follow when responding to a security event. Which of the following would provide this set of processes and procedures?`,
    choices: {
      A: `MDM`,
      B: `DLP`,
      C: `Playbook`,
      D: `Zero trust`
    },
    correct: "C",
    explanation: `A playbook provides a conditional set of steps to follow when addressing a specific event. An organization might have separate playbooks for investigating a data breach, responding to a virus infection, or recovering from a ransomware attack. Incorrect answers — A. MDM An MDM (Mobile Device Management) service provides configuration and control of remote devices. An MDM does not provide a checklist for handling security events. B. DLP DLP (Data Loss Prevention) is a security solution for identifying and blocking the transfer of sensitive information across the network. A DLP would not provide steps to follow during a security event. D. Zero trust Zero trust is a security philosophy which considers all devices to be untrusted. Inherent trust and trusted connections between devices are not part of a zero trust model. Zero trust does not provide checklists for security tasks.`
  },
  {
    id: 533,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam C",
    question: `A transportation company maintains a scheduling application and a database in a virtualized cloud-based environment. Which of the following would be the BEST way to backup these services?`,
    choices: {
      A: `Journaling`,
      B: `Snapshot`,
      C: `RTOS`,
      D: `Containerization`
    },
    correct: "B",
    explanation: `Virtual machines (VMs) have a snapshot feature to capture both a full backup of the virtual system and incremental changes that occur over time. It’s common to take a snapshot of a VM for backup purposes or before making any significant changes to the VM. If the changes need to be rolled back, a previous snapshot can be selected and instantly applied to the VM. Incorrect answers — A. Journaling Journaling protects the integrity of a file system or database by writing information to a journal before making any changes to the primary data source. This allows the system to recover from a potential fault and prevent file corruption. C. RTOS An RTOS (Real-Time Operating System) has a deterministic processing schedule and is often associated with time-sensitive applications. An RTOS is not a backup mechanism. D. Containerization Containerization describes an application deployment strategy where a single file or container includes everything required to run an application. Containerization itself is not a backup mechanism.`
  },
  {
    id: 534,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam C",
    question: `In an environment using discretionary access controls, which of these would control the rights and permissions associated with a file or directory?`,
    choices: {
      A: `Administrator`,
      B: `Owner`,
      C: `Group`,
      D: `System`
    },
    correct: "B",
    explanation: `The owner of an object controls access in a discretionary access control model. The object and type of access is at the discretion of the owner, and they can determine who can access the file and the type of access they would have. Incorrect answers — A. Administrator Administrators generally label objects when using mandatory access control, but they are not involved with discretionary access control. C. Group Assigning rights and permissions to a group and then assigning users to the group are common when using role-based access control. D. System The system does not determine individual user rights and permissions when using discretionary access control.`
  },
  {
    id: 535,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam C",
    question: `A security administrator has installed a network-based DLP solution to determine if file transfers contain PII. Which of the following describes the data during the file transfer?`,
    choices: {
      A: `In-use`,
      B: `In-transit`,
      C: `Highly available`,
      D: `At-rest`
    },
    correct: "B",
    explanation: `Data in-transit describes information actively moving across the network. As the information passes through switches and routers, it is considered to be in-transit. Incorrect answers — A. In-use Data in-use is in the memory of a system and is accessible to an application. C. Highly available High availability (HA) is usually associated with redundancy or faulttolerance. Data moving through the network would not be considered highly available. D. At-rest Data at-rest resides on a storage device.`
  },
  {
    id: 536,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam C",
    question: `A medical imaging company would like to connect all remote locations together with high speed network links. The network connections must maintain high throughput rates and must always be available during working hours. In which of the following should these requirements be enforced with the network provider?`,
    choices: {
      A: `Service level agreement`,
      B: `Memorandum of understanding`,
      C: `Non-disclosure agreement`,
      D: `Acceptable use policy`
    },
    correct: "A",
    explanation: `A service level agreement (SLA) is used to contractually define the minimum terms for services. In this example, the medical imaging company would require an SLA from the network provider for the necessary throughput and uptime metrics. Incorrect answers — B. Memorandum of understanding A memorandum of understanding (MOU) is an informal letter of intent. The MOU is not a signed contract, and there are no contractual obligations associated with the content of an MOU. C. Non-disclosure agreement A non-disclosure agreement (NDA) is used between entities to prevent the use and dissemination of confidential information. D. Acceptable use policy An acceptable use policy (AUP) commonly details the rules of behavior for employees using an organization’s network and computing resources.`
  },
  {
    id: 537,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam C",
    question: `A company is implementing a security awareness program for their user community. Which of the following should be included for additional user guidance and training?`,
    choices: {
      A: `Daily firewall exception reporting`,
      B: `Information on proper password management`,
      C: `Periodic vulnerability scanning of external services`,
      D: `Adjustments to annualized loss expectancy`
    },
    correct: "B",
    explanation: `User awareness programs focus on security fundamentals that everyone in the organization can use during their normal work day. Protecting and managing passwords is an important security consideration for all users in the company. Incorrect answers — A. Daily firewall exception reporting Daily security reports can provide important insight into the organization's security posture, but it doesn't provide security guidance for the user community. C. Periodic vulnerability scanning of external services Periodic audits and security scans can provide validation and identify potential issues, but the vulnerability scan results don't provide any help to the user community with their ongoing security responsibilities. D. Adjustments to annualized loss expectancy Annualized loss expectancy estimates can be important for budgeting and security planning, but those expenses aren't related to user community guidance and training.`
  },
  {
    id: 538,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam C",
    question: `A security administrator is preparing a phishing email as part of a periodic employee security awareness campaign. The email is spoofed to appear as an unknown third-party and asks employees to immediately click a link or their state licensing will be revoked. Which of the following should be the expected response from the users?`,
    choices: {
      A: `Delete the message`,
      B: `Click the link and make a note of the URL`,
      C: `Forward the message to others in the department`,
      D: `Report the suspicious link to the help desk`
    },
    correct: "D",
    explanation: `The users should be trained to report anything suspicious, and unusual links in an email message would certainly be an important security concern. Incorrect answers — A. Delete the message Deleting the email would avoid any interaction with the malicious link, but it wouldn't provide any additional security for others in the organization. The contents of the email might also provide important information for removing similar messages and blocking future emails. B. Click the link and make a note of the URL The links inside of email messages are inherently insecure, and a best practice is to never click unknown or unexpected links or attachments inside of email messages. C. Forward the message to others in the department Forwarding a message with potentially malicious links would be a significant security concern, and it would be more secure to forward a copy to the IT security team.`
  },
  {
    id: 539,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam C",
    question: `A security administrator would like to minimize the number of certificate status checks made by web site clients to the certificate authority. Which of the following would be the BEST option for this requirement?`,
    choices: {
      A: `OCSP stapling`,
      B: `Self-signed certificates`,
      C: `CRL`,
      D: `Wildcards`
    },
    correct: "A",
    explanation: `OCSP (Online Certificate Status Protocol) stapling allows the certificate holder verify their own certificate status. The OCSP status is commonly “stapled” into the SSL/TLS handshake process. Instead of contacting the certificate authority to verify the certificate, the verification is included with the initial network connection to the server. Incorrect answers — B. Self-signed certificates Self-signed certificates could be created for internal company use, but this would not change the process for validating the status of a certificate. C. CRL A CRL (Certificate Revocation List) is a list of revoked certificates maintained by the certificate authority. To view the CRL, an end-user client would directly access the CA. D. Wildcards Wildcards are added to certificates for use across multiple devices. Wildcards would not decrease the number of certificate status checks for a particular service.`
  },
  {
    id: 540,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam C",
    question: `A company is concerned their EDR solution will not be able to stop more advanced ransomware variants. Technicians have created a backup and restore utility to get most systems up and running less than an hour after an attack. What type of security control is associated with this restore process?`,
    choices: {
      A: `Directive`,
      B: `Compensating`,
      C: `Preventive`,
      D: `Detective`
    },
    correct: "B",
    explanation: `Instead of preventing an attack, a compensating control is used to restore systems using other means. A streamlined backup and restore process compensates for the limited security features of the EDR (Endpoint Detection and Response) software. Incorrect answers — A. Directive Directive controls define policies and processes, but directive controls won't provide a method for recovering from a ransomware infection. C. Preventive A preventive control will block access. The EDR software on a workstation is an example of a preventive control. D. Detective A detective control may not be able to block an attack, but it can identify and alert if an attack is underway.`
  },
  {
    id: 541,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam C",
    question: `To upgrade an internal application, the development team provides the operations team with instructions for backing up, patching the application, and reverting the patch if needed. The operations team schedules a date for the upgrade, informs the business divisions, and tests the upgrade process after completion. Which of the following describes this process?`,
    choices: {
      A: `Code signing`,
      B: `Continuity planning`,
      C: `Usage auditing`,
      D: `Change management`
    },
    correct: "D",
    explanation: `Change management is the process for making any type of change, such as a software upgrade, a hardware replacement, or any other type of modification to the existing environment. Having a formal change management process minimizes the risk of a change and makes everyone aware of the changes as they occur. Incorrect answers — A. Code signing Application developers often digitally sign their software to ensure no modifications are made before the software is installed. The code signing process does not provide any guidance for an organization's internal processes associated with installing updated software. B. Continuity planning Continuity planning focuses on keeping the business running when a disruption occurs. Disaster recovery planning is a type of continuity plan. C. Usage auditing Usage auditing determines how resources are used. For example, a system administrator may perform a usage audit to determine which resources are used with a particular application or service.`
  },
  {
    id: 542,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam C",
    question: `A company is implementing a public file-storage and cloud-based sharing service, and would like users to authenticate with an existing account on a trusted third-party web site. Which of the following should the company implement?`,
    choices: {
      A: `SSO`,
      B: `Federation`,
      C: `Least privilege`,
      D: `Discretionary access controls`
    },
    correct: "B",
    explanation: `Federation provides authentication and authorization between two entities using a separate trusted authentication platform. For example, a web site could allow authentication using an existing account on a third-party social media site. Incorrect answers — A. SSO SSO (Single Sign-On) does not inherently require authentication to be processed by a third-party. SSO allows a user to authenticate one time to gain access to all assigned resources. No additional authentication is required after the initial SSO login process is complete. C. Least privilege Least privilege ensures users only receive the permissions necessary to perform their assigned functions. Least privilege is not used to authenticate users to a third-party site. D. Discretionary access controls Discretionary access controls are used by a data owner to allow or prevent access to the data. Discretionary access controls are not used to authenticate users to a third-party database.`
  },
  {
    id: 543,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam C",
    question: `A system administrator is viewing this output from a file integrity monitoring report: 15:43:01 - Repairing corrupted file C:\\Windows\\System32\\kernel32.dll 15:43:03 - Repairing corrupted file C:\\Windows\\System32\\netapi32.dll 15:43:07 - Repairing corrupted file C:\\Windows\\System32\\user32.dll 15:43:43 - Repair complete Which of the following malware types is the MOST likely cause of this output?`,
    choices: {
      A: `Ransomware`,
      B: `Logic bomb`,
      C: `Rootkit`,
      D: `Keylogger`
    },
    correct: "C",
    explanation: `A rootkit modifies operating system files to become part of the core OS. The kernel, user, and networking libraries in Windows are core operating system files. Incorrect answers — A. Ransomware Ransomware commonly presents itself as a warning message on the user's screen, and most aspects of the operating system would be disabled. Ransomware also encrypts user documents and would not easily be repaired by replacing system files. B. Logic bomb A logic bomb waits for a predefined event to begin operation. Logic bombs do not commonly modify core operating system files. D. Keylogger A keylogger does not commonly embed itself in core operating system files. Keyloggers often run as an independent process and compile logs and keystrokes to send across the network to the attacker.`
  },
  {
    id: 544,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam C",
    question: `What type of vulnerability would be associated with this log information? GET http://example.com/show.asp?view=../../Windows/ system.ini HTTP/1.1`,
    choices: {
      A: `Buffer overflow`,
      B: `Directory traversal`,
      C: `DoS`,
      D: `Cross-site scripting`
    },
    correct: "B",
    explanation: `Directory traversal attempts to read or access files outside the scope of the web server's file directory. The pair of dots in a file path (..) refers to the parent directory, so this example is attempt to move back two parent directories before proceeding into the /Windows directory. In a properly configured web server, this traversal should not be possible. Incorrect answers — A. Buffer overflow A buffer overflow would attempt to store information into an area of memory that overflows the boundary of the buffer. The information in the log does not show any overflow attempt. C. DoS A DoS (Denial of Service) is designed to make a system or service unavailable. Although running any unknown command can be unpredictable, it would be unusual for these commands to cause any downtime. D. Cross-site scripting A cross-site scripting attack would normally include a script referencing another site trusted by the browser. In this example, the commands appear to be related to the existing URL and not a third-party site.`
  },
  {
    id: 545,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam C",
    question: `A developer has created an application to store password information in a database. Which of the following BEST describes a way of protecting these credentials by adding random data to the password?`,
    choices: {
      A: `Hashing`,
      B: `Data masking`,
      C: `Salting`,
      D: `Asymmetric encryption`
    },
    correct: "C",
    explanation: `Passwords are often stored as hashes, but the hashes themselves are often subject to brute force or rainbow table attacks. It’s common to add some additional random data (a salt) to a password before the hashing process. This ensures that each password is truly random when stored, and it makes it more difficult for an attacker to discover all of the stored passwords. Incorrect answers — A. Hashing Hashing is a one-way cryptographic function which takes an input, such as a password, and creates a fixed size string of random information. The process of adding additional information to the original data before the hashing process is called salting. B. Data masking Data masking hides data from human eyes. For example, instead of showing a credit card number, the data mask will show asterisks in all but the last four digits. D. Asymmetric encryption Asymmetric encryption is an encryption method which uses one key for encryption and a different key for decryption. Asymmetric encryption does not add additional random information to a hash.`
  },
  {
    id: 546,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam C",
    question: `Which of the following processes provides ongoing building and testing of newly written code?`,
    choices: {
      A: `Continuous integration`,
      B: `Continuity of operations`,
      C: `Version control`,
      D: `Race condition`
    },
    correct: "A",
    explanation: `With continuous integration, code can be constantly written and merged into the central repository many times each day. Incorrect answers — B. Continuity of operations Continuity of operations is used during disaster recovery or incident recovery. This process provides options for keeping the business processes available during or after the incident. C. Version control Version control is used to track changes to a file or configuration information over time. This allows changes to be applied and, if necessary, easily reverted to a previous version. D. Race condition A race condition is caused when two related processes occur simultaneously without knowledge of each other. A race condition is not related the process of building or testing code.`
  },
  {
    id: 547,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam C",
    question: `Which of the following BEST describes a responsibility matrix?`,
    choices: {
      A: `A visual summary of cloud provider accountability`,
      B: `Identification of tasks at each step of a project plan`,
      C: `A list of cybersecurity requirements based on the identified risks`,
      D: `Ongoing group discussions regarding cybersecurity`
    },
    correct: "A",
    explanation: `A cloud provider commonly creates a responsibility matrix to document the service coverage between the cloud provider and the customer. For example, a cloud responsibility matrix may show the cloud provider responsible for network controls and the customer responsible for all stored data. Incorrect answers — B. Identification of tasks at each step of a project plan A project plan will include many tasks, and the list of tasks is often shown as part of the overall project plan or in a summarized chart. C. A list of cybersecurity requirements based on the identified risks Risk assessment provides a security administrator with the information needed to build proper security controls for the documented risks. D. Ongoing group discussions regarding cybersecurity Risk assessment can involve constant monitoring and analysis of current trends, risks, and response options. This information can be gathered from group discussions, expert presentations, and security conferences and programs.`
  },
  {
    id: 548,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam C",
    question: `A security administrator is implementing an authentication system for the company. Which of the following would be the best choice for validating login credentials for all usernames and passwords in the authentication system?`,
    choices: {
      A: `CA`,
      B: `SIEM`,
      C: `LDAP`,
      D: `WAF`
    },
    correct: "C",
    explanation: `LDAP (Lightweight Directory Access Protocol) is a common standard for authentication. LDAP is an open standard and is available across many different operating systems and devices. Incorrect answers — A. CA A CA (Certificate Authority) is a trusted service for certificate creation and management. The CA itself is not responsible for validating login credentials. B. SIEM A SIEM (Security and Information Management) service consolidates log files from diverse systems and can create reports based on the correlation of this data. A SIEM is not part of the authentication process. D. WAF A WAF (Web Application Firewall) is used to protect a web-based application from exploits and other attacks. A WAF is not used to validate login credentials.`
  },
  {
    id: 549,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam C",
    question: `A technician is reviewing this information from an IPS log: MAIN_IPS: 22June2023 09:02:50 reject 10.1.111.7 Alert: HTTP Suspicious Webdav OPTIONS Method Request; Host: Server Severity: medium; Performance Impact:3; Category: info-leak; Packet capture; disable Proto:tcp; dst:192.168.11.1; src:10.1.111.7 Which of the following can be associated with this log information? (Select TWO)`,
    choices: {
      A: `The attacker sent a non-authenticated BGP packet to trigger the IPS`,
      B: `The source of the attack is 192.168.11.1`,
      C: `The event was logged but no packets were dropped`,
      D: `The source of the attack is 10.1.111.7 ❍ E. The attacker sent an unusual HTTP packet to trigger the IPS`
    },
    correct: "D",
    explanation: `E. The attacker sent an unusual HTTP packet to trigger the IPS The second line of the IPS log shows the type of alert, and this record indicates a suspicious HTTP packet was sent. The last line of the IPS log shows the protocol, destination, and source IP address information. The source IP address is 10.1.111.7. Incorrect answers — A. The attacker sent a non-authenticated BGP packet to trigger the IPS The alert for this IPS log does not indicate any non-authenticated packets or BGP packets. B. The source of the attack is 192.168.11.1 The last line of the log identifies the protocol and IP addresses. The “src” address is the source of the packet and is identified as 10.1.111.7. C. The event was logged but no packets were dropped The first line of the log shows the name of the IPS which identified the issue, the date and time, and disposition. In this log entry, the packet was rejected from IP address 10.1.111.7.`
  },
  {
    id: 550,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam C",
    question: `A company has contracted with a third-party to provide penetration testing services. The service includes a port scan of each externally-facing device. This is an example of:`,
    choices: {
      A: `Initial exploitation`,
      B: `Privilege escalation`,
      C: `Known environment`,
      D: `Active reconnaissance`
    },
    correct: "D",
    explanation: `Active reconnaissance sends traffic across the network, and this traffic can be viewed and logged. Performing a port scan will send network traffic to a server, and most port scan attempts can be identified and logged by an IPS (Intrusion Prevention System). Incorrect answers — A. Initial exploitation An exploit attempt is common when performing a penetration test, but a port scan is not exploiting any vulnerabilities. B. Privilege escalation If a penetration test is able to exploit a system and obtain a higher level of rights and permissions, then the test is successful at escalating the access privileges. A port scan does not gain access to a system, and it will not provide any privilege escalation. C. Known environment A known environment fully documents the network and systems within the scope of a penetration test. In this example, there's no mention of testing environment documentation provided to the penetration testers.`
  },
  {
    id: 551,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam C",
    question: `An access point in a corporate headquarters office has the following configuration: IP address: 10.1.10.1 Subnet mask: 255.255.255.0 DHCPv4 Server: Enabled SSID: Wireless Wireless Mode: 802.11n Security Mode: WEP-PSK Frequency band: 2.4 GHz Software revision: 2.1 MAC Address: 60:3D:26:71:FF:AA IPv4 Firewall: Enabled Which of the following would apply to this configuration?`,
    choices: {
      A: `Invalid frequency band`,
      B: `Weak encryption`,
      C: `Incorrect IP address and subnet mask`,
      D: `Invalid software version`
    },
    correct: "B",
    explanation: `A common issue is weak or outdated security configurations. Older encryptions such as DES and WEP should be updated to use newer and stronger encryption technologies. Incorrect answers — A. Invalid frequency band The 2.4 GHz frequency band is a valid frequency range for 802.11n networks. C. Incorrect IP address and subnet mask None of the listed configuration settings show any issues with the IP address or subnet mask. D. Invalid software version The software version of the access point does not have any configuration options and would not be considered invalid.`
  },
  {
    id: 552,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam C",
    question: `An attacker has gained access to an application through the use of packet captures. Which of the following would be MOST likely used by the attacker?`,
    choices: {
      A: `Overflow`,
      B: `Forgery`,
      C: `Replay`,
      D: `Injection`
    },
    correct: "C",
    explanation: `A replay attack uses previously transmitted information to gain access to an application or service. This information is commonly captured in network packets and replayed to the service. Incorrect answers — A. Overflow A buffer overflow attack attempts to store a large number into a smaller sized memory space. This can sometimes improperly change the value of memory areas that are outside of the smaller space. B. Forgery A cross-site request forgery commonly uses malicious links to take advantage of the trust a site might have for a user's browser. Packet captures are not necessary to perform a forgery attack. D. Injection The unwanted injection of data into a database, library, or any other data flow is an injection attack. The information contained in a packet capture is not commonly used during an injection attack.`
  },
  {
    id: 553,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam C",
    question: `A company is receiving complaints of slowness and disconnections to their Internet-facing web server. A network administrator monitors the Internet link and finds excessive bandwidth utilization from thousands of different IP addresses. Which of the following would be the MOST likely reason for these performance issues?`,
    choices: {
      A: `DDoS`,
      B: `DNS spoofing`,
      C: `RFID cloning`,
      D: `Wireless jamming`
    },
    correct: "A",
    explanation: `A DDoS (Distributed Denial of Service) is the failure of a service caused by many different remote devices. In this example, the DDoS is related to a bandwidth utilization exhaustion caused by excessive server requests. Incorrect answers — B. DNS spoofing DNS (Domain Name System) spoofing modifies DNS information on a DNS server or a client to direct users to an unauthorized site. DNS spoofing would not be the cause for these performance issues. C. RFID cloning RFID (Radio Frequency Identification) cloning is used to duplicate an existing RFID device. These devices are not commonly associated with network communication to a public web server. D. Wireless jamming Wireless jamming disrupts wireless networks and prevents any type of communication. The communication issues to a public web server would not be associated with wireless networking.`
  },
  {
    id: 554,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam C",
    question: `A company has created an itemized list of tasks to be completed by a third-party service provider. After the services are complete, this document will be used to validate the completion of the services. Which of the following would describe this agreement type?`,
    choices: {
      A: `SLA`,
      B: `SOW`,
      C: `NDA`,
      D: `BPA`
    },
    correct: "B",
    explanation: `A SOW (Statement of Work) is a detailed list of tasks, items, or processes to be completed by a third-party. The SOW lists the job scope, location, deliverables, and any other specifics associated with the agreement. The SOW is also used as a checklist to verify the job was completed properly by the service provider. Incorrect answers — A. SLA An SLA (Service Level Agreement) sets the minimum terms of service between a customer and a service provider. This agreement often contains terms for expected uptime, response time requirements, and other minimum service levels required by the customer. C. NDA An NDA (Non-Disclosure Agreement) is a confidentiality agreement between parties. The agreement is designed to protect information such as trade secrets, business activities, or anything else included in the NDA. An NDA does not generally contain an itemized list of service requests. D. BPA A BPA (Business Partners Agreement) is used between entities going into business together. A list of itemized service requests would not be part of a BPA.`
  },
  {
    id: 555,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam C",
    question: `A company is updating components within the control plane of their zero-trust implementation. Which of the following would be part of this update?`,
    choices: {
      A: `Policy engine`,
      B: `Subjects`,
      C: `Policy enforcement point`,
      D: `Zone configurations`
    },
    correct: "A",
    explanation: `The policy engine is located in the control plane and evaluates each access decision based on security policy and other information sources. The policy engine determines if access should be granted, denied, or revoked. Incorrect answers — B. Subjects Subjects use the zero-trust data plane, and are often end-users, applications, or other non-human entities. C. Policy enforcement point A policy enforcement point resides in the data plane and is the gatekeeper for allowing, monitoring, and terminating connections. D. Zone configurations Zero-trust uses security zones to easily apply access policies, and these zones operate in the data plane.`
  },
  {
    id: 556,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam C",
    question: `Which of the following malware types would cause a workstation to participate in a DDoS?`,
    choices: {
      A: `Bot`,
      B: `Logic bomb`,
      C: `Ransomware`,
      D: `Keylogger`
    },
    correct: "A",
    explanation: `A bot (robot) is malware that installs itself on a system and then waits for instructions. It’s common for botnets to use thousands of bots to perform DDoS (Distributed Denial of Service) attacks. Incorrect answers — B. Logic bomb A logic bomb waits for a predefined event to occur. The scope of devices infected with a logic bomb are relatively small and localized as compared to a botnet. C. Ransomware Ransomware locks a system and prevents it from operating. The locked device does not commonly participate in a DDoS. D. Keylogger A keylogger will silently capture keystrokes and transmit an archive of those keystrokes to a third-party. A keylogger does not commonly participate in a DDoS.`
  },
  {
    id: 557,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam C",
    question: `Which of these are used to force the preservation of data for later use in court?`,
    choices: {
      A: `Chain of custody`,
      B: `Data loss prevention`,
      C: `Legal hold`,
      D: `E-discovery`
    },
    correct: "C",
    explanation: `A legal hold is a legal technique to preserve relevant information. This process will ensure the data remains accessible for any legal preparation prior to litigation. Incorrect answers — A. Chain of custody Chain of custody ensures the integrity of evidence is maintained. The contents of the evidence are documented, and each person who contacts the evidence is required to document their activity. B. Data loss prevention Data loss prevention (DLP) is a technique for identifying sensitive information transmitted across the network, such as Social Security numbers, credit card numbers, and other PII (Personally Identifiable Information). DLP is not a legal technique. D. E-discovery E-discovery describes the process of identifying and collecting electronic documents and media. The e-discovery process itself does not force the preservation of data.`
  },
  {
    id: 558,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam C",
    question: `A company would like to automatically monitor and report on any movement occurring in an open field at the data center. Which of the following would be the BEST choice for this task?`,
    choices: {
      A: `Bollard`,
      B: `Microwave sensor`,
      C: `Access control vestibule`,
      D: `Fencing`
    },
    correct: "B",
    explanation: `Microwave sensors can detect movement across large areas such as open fields. Incorrect answers — A. Bollard A bollard is a barricade used to prevent access. Bollards often allow people to pass through a specific access point, but limit access for cars and other vehicles. C. Access control vestibule An access control vestibule is a room designed to manage the flow of people through the area. It's common to see access control vestibules used as an entry point to a data center or secure facility. D. Fencing Fencing can create a perimeter to prevent access to a large open field, but it wouldn't detect or alert on any type of movement.`
  },
  {
    id: 559,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam C",
    question: `A company is releasing a new product, and part of the release includes the installation of load balancers to the public web site. Which of the following would best describe this process?`,
    choices: {
      A: `Platform diversity`,
      B: `Capacity planning`,
      C: `Multi-cloud systems`,
      D: `Permission restrictions`
    },
    correct: "B",
    explanation: `Capacity planning describes the process of matching the supply of a resource to the demand. In this example, the company is planning for an increased interest in their products and are increasing the overall capacity of their web server resources. Incorrect answers — A. Platform diversity Platform diversity describes the use of different platforms to provide a similar service. For example, a company may decide to use both Linux and Windows platforms for their web services. In this question, the platform used by the web services is not mentioned. C. Multi-cloud systems Multi-cloud systems will use more than a single cloud provider to provide a service. In this question, there were no specific references to cloud providers. D. Permission restrictions Permission restrictions would limit access to data or resources, and the addition of multiple identical servers would not indicate a change to the existing permissions.`
  },
  {
    id: 560,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam C",
    question: `A system administrator would like to prove an email message was sent by a specific person. Which of the following describes the verification of this message source?`,
    choices: {
      A: `Non-repudiation`,
      B: `Key escrow`,
      C: `Asymmetric encryption`,
      D: `Steganography`
    },
    correct: "A",
    explanation: `Non-repudiation is used to verify the source of data or a message. Digital signatures are commonly used for non-repudiation. Incorrect answers — B. Key escrow Key escrow describes a third-party responsible for holding or managing keys or certificates. Key escrow does not provide verification of a data source. C. Asymmetric encryption Asymmetric encryption describes data encryption using one key and the decryption of this data with a different key. The use of asymmetric encryption by itself does not provide proof of origin. D. Steganography Steganography describes hiding one type of data within another media type. For example, hiding encrypted data within an image is a form of steganography. Steganography does not provide proof of origin.`
  },
  {
    id: 561,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam C",
    question: `A security administrator has created a policy to alert if a user modifies the hosts file on their system. Which of the following behaviors does this policy address?`,
    choices: {
      A: `Unexpected`,
      B: `Self-assessment`,
      C: `Unintentional`,
      D: `Risky`
    },
    correct: "D",
    explanation: `Making a change to the hosts file can be a security concern, and many systems will prevent this change without elevated permissions. Modifying the hosts file would be categorized as risky behavior. Incorrect answers — A. Unexpected Editing a hosts file is a specific task with an intentional result. The user modification of the hosts file would not generally be considered an unexpected event. B. Self-assessment A self-assessment is often used in internal audits to informally gather information about potential security risks. A self-assessment is not part of a user's intentional file edits. C. Unintentional A user editing a file is an active process and is often associated with performing a specific configuration change or task.`
  },
  {
    id: 562,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam C",
    question: `A company has identified a web server data breach resulting in the theft of financial records from 150 million customers. A security update to the company’s web server software was available for two months prior to the breach. Which of the following would have prevented this breach from occurring?`,
    choices: {
      A: `Patch management`,
      B: `Full disk encryption`,
      C: `Disabling unnecessary services`,
      D: `Application allow lists`
    },
    correct: "A",
    explanation: `This question describes an actual breach which occurred in 2017 to web servers at a large credit bureau. This breach resulted in the release of almost 150 million customer names, Social Security numbers, addresses, and birth dates. A web server vulnerability announced in March of 2017 was left unpatched, and attackers exploited the vulnerability two months later. The attackers were in the credit bureau network for 76 days before they were discovered. A formal patch management process would have clearly identified this vulnerability and would have given the credit bureau the opportunity to mitigate or patch the vulnerability well before it would have been exploited. Incorrect answers — B. Full disk encryption Full disk encryption (FDE) would prevent unauthenticated access to the data, but the web server would be an authorized user and would have normal access to the areas of the operating system necessary for normal operation. Enabling FDE would not provide any additional security against a data breach. C. Disable unnecessary services It’s always a good best practice to disable unnecessary services, but this breach attacked a very necessary web service. D. Application allow lists Application allow lists would prevent unauthorized applications from running, but it would not prevent an attack to the web service application.`
  },
  {
    id: 563,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam C",
    question: `During the onboarding process, the IT department requires a list of software applications associated with the new employee's job functions. Which of the following would describe the use of this information?`,
    choices: {
      A: `Access control configuration`,
      B: `Encryption settings`,
      C: `Physical security requirements`,
      D: `Change management`
    },
    correct: "A",
    explanation: `The onboarding team needs to assign the proper access controls to new employees, and the list of applications provides additional details regarding application and data access. Incorrect answers — B. Encryption settings A list of applications required by a new employee does not generally have any impact on the encryption settings used by these applications. C. Physical security requirements Physical security requirements would not generally be based on the list of required applications for a new employee. Most physical security requirements are determined by the organization's IT security team. D. Change management Adding rights and permissions for a new user would be a normal procedure and would not require a formal change management process.`
  },
  {
    id: 564,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam C",
    question: `A system administrator has identified an unexpected username on a database server, and the user has been transferring database files to an external server over the company’s Internet connection. The administrator then performed these tasks: • Physically disconnected the Ethernet cable on the database server • Disabled the unknown account • Configured a firewall rule to prevent file transfers from the server Which of the following would BEST describe this part of the incident response process?`,
    choices: {
      A: `Eradication`,
      B: `Containment`,
      C: `Lessons learned`,
      D: `Preparation`
    },
    correct: "B",
    explanation: `The containment phase isolates events which can quickly spread and get out of hand. A file transfer from a database server can quickly be contained by disabling any ability to continue the file transfer. Incorrect answers — A. Eradication Eradication focuses on removing the cause of the event and restoring the systems back to their non-compromised state. C. Lessons learned After the event is over, the lessons learned phase helps everyone learn and improve the process for the next event. D. Preparation Before an event occurs, it’s important to have the contact numbers, tools, and processes ready to go.`
  },
  {
    id: 565,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam C",
    question: `Which of the following would be the MOST effective use of asymmetric encryption?`,
    choices: {
      A: `Real-time video encryption`,
      B: `Securely store passwords`,
      C: `Protect data on mobile devices`,
      D: `Create a shared session key`
    },
    correct: "D",
    explanation: `The Diffie-Hellman algorithm can combine public and private keys to derive the same session key. This allows two devices to create and use this shared session key without sending the key across the network. Incorrect answers — A. Real-time video encryption The high speeds required for real-time video encryption and decryption would not be an efficient use case for asymmetric encryption. High-speed or large-scale encryption commonly uses a faster method of encryption and decryption. B. Securely store passwords The best practice for password storage is to use hashes instead of encryption. Hashes ensure a stored password can't be reverse engineered to produce the original password. C. Protect data on mobile devices The limited CPU and power available on a mobile device requires a more efficient form of confidentiality than asymmetric encryption. For example, it's common for mobile devices to use elliptic curve cryptography (ECC).`
  },
  {
    id: 566,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam C",
    question: `Each salesperson in a company receives a laptop with applications and data to support their sales efforts. The IT manager would like to prevent third-parties from gaining access to this information if the laptop is stolen. Which of the following would be the BEST way to protect this data?`,
    choices: {
      A: `Remote wipe`,
      B: `Full disk encryption`,
      C: `Biometrics`,
      D: `VPN`
    },
    correct: "B",
    explanation: `With full disk encryption, everything written to the laptop’s local drive is stored as encrypted data. If the laptop was stolen, the thief would not have the credentials to decrypt the drive data. Incorrect answers — A. Remote wipe Although a remote wipe function is useful, it’s a reactive response and does not provide any data protection prior to erasing the data. C. Biometrics Biometric authentication can limit access to the operating system, but the laptop’s storage drive can still be removed and accessed from another computer. D. VPN A VPN (Virtual Private Network) would encrypt all data transferred over the network, but it would not protect any stored data if the laptop was stolen.`
  },
  {
    id: 567,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam C",
    question: `A security administrator has compiled a list of all information stored and managed by an organization. Which of the following would best describe this list?`,
    choices: {
      A: `Sanitization`,
      B: `Metadata`,
      C: `Known environment`,
      D: `Data inventory`
    },
    correct: "D",
    explanation: `A data inventory describes a list of all data managed by an organization. This inventory includes the owner, update frequency, and format of the data. Incorrect answers — A. Sanitization Data sanitization involves the complete removal of data without any method of recovery. Data sanitization is often used when clearing storage media for reuse or disposal. B. Metadata Metadata is data which describes other data sources. Email header information, network headers, and file characteristics are common examples of metadata. C. Known environment A known environment commonly describes the information provided to a penetration tester. A known environment provides a complete overview of the in-scope devices associated with a penetration test.`
  },
  {
    id: 568,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam C",
    question: `A security administrator would like to monitor all outbound Internet connections for malicious software. Which of the following would provide this functionality?`,
    choices: {
      A: `Jump server`,
      B: `IPsec tunnel`,
      C: `Forward proxy`,
      D: `Load balancer`
    },
    correct: "C",
    explanation: `A proxy server can be used to monitor incoming and outgoing network communication. Proxy servers can be used to identify malicious software, filter content, or increase performance through file caching. Incorrect answers — A. Jump server A jump server is commonly used to provide administrative access to a secure network connection. Jump servers are not used to monitor or filter Internet connections. B. IPsec tunnel An IPsec tunnel is associated with an encrypted connection between devices or sites. An IPsec tunnel would not be used to monitor or manage network content or Internet connections. D. Load balancer Load balancers are used to increase capacity by separating the processing load between multiple servers. Load balancers are not used for network monitoring or security filtering.`
  },
  {
    id: 569,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam C",
    question: `What type of security control would be associated with corporate security policies?`,
    choices: {
      A: `Technical`,
      B: `Operational`,
      C: `Managerial`,
      D: `Physical`
    },
    correct: "C",
    explanation: `A managerial control type is associated with security design and implementation. Security policies and standard operating procedures are common examples of a managerial control type. Incorrect answers — A. Technical Technical security controls are implemented using systems, such as operating system controls, firewalls, or anti-virus software. B. Operational Operational controls are implemented by people instead of systems. An example of an operational security control type would be security guards or awareness programs. D. Physical A physical control type would limit physical access. For example, a door lock or badge reader would be a physical control.`
  },
  {
    id: 570,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam C",
    question: `Which of the following would be the MOST significant security concern when protecting against organized crime?`,
    choices: {
      A: `Prevent users from posting passwords near their workstations`,
      B: `Require identification cards for all employees and guests`,
      C: `Maintain reliable backup data`,
      D: `Use access control vestibules at all data center locations`
    },
    correct: "C",
    explanation: `A common objective for organized crime is an organization's data, and attacks from organized crime can sometimes encrypt or delete data. A good set of backups can often resolve these issues quickly and without any ransomware payments to an organized crime syndicate. Incorrect answers — A. Prevent users from posting passwords near their workstations Organized crime members usually access systems remotely. Although it’s important for users to protect their passwords, the organized crime members aren’t generally in a position to view information on a person's desk. B. Require identification cards for all employees and guests Since the criminal syndicate members rarely visit a site, having identification for employees and visitors isn’t the most significant concern associated with this threat actor. D. Use access control vestibules at all data center locations Access control vestibules control the flow of people through an area. Organized crime members aren’t usually visiting a company's data center.`
  },
  {
    id: 571,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam C",
    question: `An application team has been provided with a hardened version of Linux to use with a new application installation, and this includes installing a web service and the application code on the server. Which of the following would BEST protect the application from attacks?`,
    choices: {
      A: `Build a backup server for the application`,
      B: `Run the application in a cloud-based environment`,
      C: `Implement a secure configuration of the web service`,
      D: `Send application logs to the SIEM via syslog`
    },
    correct: "C",
    explanation: `The tech support resources for many services will include a list of hardening recommendations. This hardening may include account restrictions, file permission settings, internal service configuration options, and other settings to ensure that the service is as secure as possible. Incorrect answers — A. Build a backup server for the application Of course, you should always have a backup. Although the backup may help recover quickly from an attack, the backup itself won’t protect the application from attacks. B. Run the application in a cloud-based environment The location of the application service won’t provide any significant protection against attacks. Given the options available, running the application in the cloud would not be the best option available. D. Send application logs to the SIEM via syslog It’s always useful to have a consolidated set of logs, but the logs on the SIEM (Security Information and Event Management) server won’t protect the application from attacks.`
  },
  {
    id: 572,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam C",
    question: `A system administrator has configured MAC filtering on their corporate access point, but access logs show unauthorized users accessing the network. Which of the following should the administrator configure to prevent future unauthorized use?`,
    choices: {
      A: `Enable WPA3 encryption`,
      B: `Remove unauthorized MAC addresses from the filter`,
      C: `Modify the SSID name`,
      D: `Modify the channel frequencies`
    },
    correct: "A",
    explanation: `A MAC (Media Access Control) address can be spoofed on a remote device, which means anyone within the vicinity of the access point can view and use legitimate MAC addresses. To ensure proper authentication, the system administrator can enable WPA3 (Wi-Fi Protected Access version 3) with a pre-shared key or 802.1X can be used to integrate with an existing authentication database. Incorrect answers — B. Remove unauthorized MAC addresses from the filter Since MAC addresses are visible when capturing packets, any unauthorized users affected by the removal of a MAC address would simply view the remaining MAC addresses in use and spoof those addresses to gain access. C. Modify the SSID name The SSID (Service Set Identifier) is the name associated with the wireless network. The name of the access point is not a security feature, so changing the name would not provide any additional access control. D. Modify the channel frequencies The frequencies used by the access point are chosen to minimize interference with other nearby wireless devices. These wireless channels are not security features and changing the frequency would not limit unauthorized access.`
  },
  {
    id: 573,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam C",
    question: `A system administrator has been tasked with performing an application upgrade, but the upgrade has been delayed due to a different scheduled installation of an outdated device driver. Which of the following issues would best describe this change management delay?`,
    choices: {
      A: `Deny list`,
      B: `Legacy application`,
      C: `Dependency`,
      D: `Restricted activity`
    },
    correct: "C",
    explanation: `Modifying one part of a system may first require changes to other components. In this example, the application upgrade is dependent on an updated version of a device driver. Incorrect answers — A. Deny list A deny list would prevent an application from executing. In this question, an older version of the application is currently working, and there's no mention of preventing a newer version of the application from also working properly. B. Legacy application A legacy application is usually not supported by the developer, and it would be unusual for a legacy application to release an updated version of software. D. Restricted activity Most change control processes have a limited scope, and a technician would be restricted from making changes outside of that scope. In this example, the device driver and the application are both part of the change control process, but one of the changes must occur before the other change can be made.`
  },
  {
    id: 574,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam C",
    question: `During an initial network connection, a supplicant communicates to an authenticator, which then sends an authentication request to an Active Directory database. Which of the following would BEST describe this authentication technology?`,
    choices: {
      A: `Federation`,
      B: `UTM`,
      C: `802.1X`,
      D: `PKI`
    },
    correct: "C",
    explanation: `IEEE 802.1X is a standard for port-based network access control (NAC). When 802.1X is enabled, devices connecting to the network do not gain access until they provide the correct authentication credentials. This 802.1X standard refers to the client as the supplicant, the switch is commonly configured as the authenticator, and the back-end authentication server is often a centralized user database. Incorrect answers — A. Federation Federation would allow members of one organization to authenticate to the network of another organization using their normal credentials. B. UTM A UTM (Unified Threat Management) system is a legacy all-in-one security device which combines a firewall, anti-virus, content filtering, and other security features into a single system. D. PKI PKI (Public Key Infrastructure) is a method of describing the public-key encryption technologies and its supporting policies and procedures. PKI does not require the use of supplicants, authenticators, or authentication servers.`
  },
  {
    id: 575,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam C",
    question: `A security researcher has been notified of a potential hardware vulnerability. Which of the following should the researcher evaluate as a potential security issue?`,
    choices: {
      A: `Firmware versions`,
      B: `Firewall configuration`,
      C: `SQL requests`,
      D: `XSS attachments`
    },
    correct: "A",
    explanation: `Firmware describes the software inside of a hardware device and is often used as the operating system of the hardware. Issues with hardware vulnerabilities are usually resolved by updating firmware in the vulnerable system. Incorrect answers — B. Firewall configuration Misconfigured firewall software could certainly be a security issue, but the problem reported in this question is specific to a hardware vulnerability. C. SQL requests A SQL (Structured Query Language) request is commonly associated with a database-related process. SQL requests are software-related and are not related to a hardware vulnerability. D. XSS attachments XSS (Cross-site Scripting) is an exploit which uses the trust in a browser to gain access to a web site. An XSS attachment describes a malicious script included in an email or similar delivery mechanism. Cross-site scripting is a software exploit and is not associated with a hardware vulnerability.`
  },
  {
    id: 576,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam C",
    question: `A company's employees are required to authenticate each time a file share, printer, or SAN imaging system is accessed. Which of the following should be used to minimize the number of employee authentication requests?`,
    choices: {
      A: `SSO`,
      B: `OSINT`,
      C: `MFA`,
      D: `SCAP`
    },
    correct: "A",
    explanation: `SSO (Single Sign-On) accepts valid authentication requests and allows users to access multiple resources without requiring additional user authentications. Incorrect answers — B. OSINT OSINT (Open Source Intelligence) is information gathered from publicly available sources such as social media sites, online forums, and other data sources. OSINT is not associated with user authentication. C. MFA MFA (Multi-factor authentication) is used to provide additional proof of a user's identity during the authentication process. MFA is not used to minimize the number of authentication requests required by a system. D. SCAP SCAP (Security Content Automation Protocol) is a standard method used by security tools to identify and act on the same criteria. SCAP is not used to minimize the number of required authentications.`
  },
  {
    id: 577,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam C",
    question: `A company has recently moved from one accounting system to another, and the new system includes integration with many other divisions of the organization. Which of the following would ensure that the correct access has been provided to the proper employees in each division?`,
    choices: {
      A: `Geolocation`,
      B: `Onboarding process`,
      C: `Account de-provisioning`,
      D: `Internal self-assessment`
    },
    correct: "D",
    explanation: `An internal self-assessment with audit can verify users have the correct permissions and all users meet the practice of least privilege. Incorrect answers — A. Geolocation Geolocation would allow the system to assign rights and permissions based on physical location. In this question, there's no documentation on where users are located and how those locations could be used for access control. B. Onboarding process The onboarding process is used when a new person is hired or transferred into the organization. In this example, none of the users were identified as new employees. C. Account de-provisioning Account de-provisioning is the disabling of an account and archiving of user information. This process usually occurs when an employee has left the organization.`
  },
  {
    id: 578,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam C",
    question: `An attacker has circumvented a web-based application to send commands directly to a database. Which of the following would describe this attack type?`,
    choices: {
      A: `Downgrade`,
      B: `SQL injection`,
      C: `Cross-site scripting`,
      D: `On-path`
    },
    correct: "B",
    explanation: `A SQL (Structured Query Language) injection takes advantage of poorly written web applications. These web applications do not properly restrict the user input, and the resulting attack bypasses the application and “injects” SQL commands directly into the database itself. Incorrect answers — A. Downgrade A downgrade attack commonly takes advantage of a poorly implemented cryptographic functions to force an application to use sub-optimal or nonexistent security features. C. Cross-site scripting A cross-site scripting attack commonly uses scripts to execute commands on a third-party website. These types of attacks take advantage of the trust of a local browser, but they don’t commonly have direct access to a database. D. On-path An on-path attack is often used to capture, monitor, or inject information into an existing data flow. An on-path attack is not commonly used for SQL injection attacks.`
  },
  {
    id: 579,
    domain: "General Security Concepts",
    domainId: 1,
    source: "Professor Messer Exam C",
    question: `A group of business partners is using blockchain technology to monitor and track raw materials and parts as they are transferred between companies. Where would a partner find these tracking details?`,
    choices: {
      A: `Ledger`,
      B: `HSM`,
      C: `SIEM`,
      D: `HIPS`
    },
    correct: "A",
    explanation: `The ledger is a shared document with a list of all blockchain transactions. The ledger is shared among everyone in the blockchain, and all transactions are available to view on this central ledger. Incorrect answers — B. HSM An HSM (Hardware Security Module) provides secure key storage and cryptographic functions for servers and applications. An HSM does not provide tracking services. C. SIEM A SIEM (Security Information and Event Manager) is commonly used to consolidate log files and create reports. A SIEM is not used to monitor blockchain transactions. D. HIPS A HIPS (Host-based Intrusion Prevention System) is used to identify exploit attempts on a device. A host-based IPS is not used to monitor data in a blockchain.`
  },
  {
    id: 580,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    source: "Professor Messer Exam C",
    question: `A network technician at a bank has noticed a significant decrease in traffic to the bank's public website. After additional investigation, the technician finds that users are being directed to a web site which looks similar to the bank's site but is not under the bank's control. Flushing the local DNS cache and changing the DNS entry does not have any effect. Which of the following has most likely occurred?`,
    choices: {
      A: `DDoS`,
      B: `Disassociation attack`,
      C: `Buffer overflow`,
      D: `Domain hijacking`
    },
    correct: "D",
    explanation: `Domain hijacking will modify the primary DNS (Domain Name System) settings for a domain and allow an attacker to direct users to an IP address controlled by the attacker. Incorrect answers — A. DDoS A DDoS (Distributed Denial of Service) would prevent users from accessing a service. In this example, users were accessing an unauthorized service. B. Disassociation attack A disassociation attack is a wireless vulnerability which can remove devices from a wireless network. C. Buffer overflow A buffer overflow is an application attack where an input of data can overwrite a buffer of memory space. A buffer overflow would not be used to redirect users to a different web page.`
  },
  {
    id: 581,
    domain: "Security Architecture",
    domainId: 3,
    source: "Professor Messer Exam C",
    question: `A company runs two separate applications in their data center. The security administrator has been tasked with preventing all communication between these applications. Which of the following would be the BEST way to implement this security requirement?`,
    choices: {
      A: `Firewall`,
      B: `SDN`,
      C: `Air gap`,
      D: `VLANs`
    },
    correct: "C",
    explanation: `An air gap is a physical separation between networks. Air gapped networks are commonly used to separate networks that must never communicate to each other. Incorrect answers — A. Firewall A firewall would provide a method of filtering traffic between networks, but firewalls can often be misconfigured and inadvertently allow some traffic to pass. Although this is one option, it’s not the best option given the option of an air gap. B. SDN SDN (Software Defined Networking) splits the functions of a networking device into separate logical units. SDN does not describe a security filter or firewall between applications in a data center. D. VLANs A VLAN (Virtual Local Area Network) is a logical method of segmenting traffic within network switches. Although this segmentation is effective, it’s not as secure as an air gap.`
  },
  {
    id: 582,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    source: "Professor Messer Exam C",
    question: `A receptionist at a manufacturing company recently received an email from the CEO asking for a copy of the internal corporate employee directory. It was later determined that the email address was not sent from the CEO and the domain associated with the email address was not a corporate domain name. What type of training could help identify this type of attack in the future?`,
    choices: {
      A: `Recognizing social engineering`,
      B: `Proper password management`,
      C: `Securing remote work environments`,
      D: `Understanding insider threats`
    },
    correct: "A",
    explanation: `Impersonating the CEO is a common social engineering technique. There are many ways to recognize a social engineering attack, and it’s important to train everyone to spot these situations when they are occurring. Incorrect answers — B. Proper password management Proper password management focuses on protecting passwords through the use of standard policies. These policies focus on topics such as password length, complexity, or password reuse. C. Securing remote work environments A remote work environment is very different to secure than a traditional work environment, but those concerns would not help to identify this type of social engineering attack. D. Understanding insider threats Although the attacker wasn’t identified, we could assume that an employee would already have access to the internal corporate employee directory.`
  },
  {
    id: 583,
    domain: "Security Operations",
    domainId: 4,
    source: "Professor Messer Exam C",
    question: `Which of the following deployment models would a company follow if they require individuals to use their personal phones for work purposes?`,
    choices: {
      A: `CYOD`,
      B: `MDM`,
      C: `BYOD`,
      D: `COPE`
    },
    correct: "C",
    explanation: `BYOD (Bring Your Own Device) is a model where the employee owns the mobile device but can also use the same device for work. Incorrect answers — A. CYOD The CYOD (Choose Your Own Device) model requires the corporation to purchase and own the device, but the user can select the device they would prefer to use. B. MDM An MDM (Mobile Device Manager) is used to manage company-owned and user-owned mobile devices. D. COPE COPE (Corporately Owned, Personally Enabled) devices are purchased by the company and deployed to the users. The organization keeps full control of the device and may allow the recipient to use the device for both business and personal use.`
  },

  // ============================================================
  // Scenario-based practice questions (added set) — IDs 584-611
  // ============================================================
  {
    id: 584,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 1,
    question: `A company is about to deploy a major firewall ruleset update during a scheduled maintenance window. The change advisory board wants assurance that if the update causes a network outage, the team can quickly return the firewall to its previous working state. Which element of the change management process provides this assurance?`,
    choices: {
      A: `Impact analysis`,
      B: `Backout plan`,
      C: `Standard operating procedure`,
      D: `Stakeholder approval`
    },
    correct: "B",
    explanation: `A backout plan (also called a rollback plan) documents exactly how to revert a change and return the system to its previous known-good state if the change fails or causes problems. Impact analysis assesses risk before the change, an SOP defines repeatable procedures, and stakeholder approval authorizes the change — none of those restore service after a failed change.`
  },
  {
    id: 585,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 1,
    question: `A security architect is implementing a zero trust architecture. They want every access request to be evaluated against policy — considering user identity, device health, and location — before a session is granted. Which zero trust component actually makes the allow-or-deny decision?`,
    choices: {
      A: `Policy Enforcement Point (PEP)`,
      B: `Policy Administrator (PA)`,
      C: `Policy Engine (PE)`,
      D: `Implicit trust zone`
    },
    correct: "C",
    explanation: `In the zero trust control plane, the Policy Engine (PE) makes the decision to grant, deny, or revoke access. The Policy Administrator (PA) carries out that decision by establishing or tearing down the communication path, and the Policy Enforcement Point (PEP) is the gateway in the data plane that enforces it. An implicit trust zone is the area beyond the PEP where traffic is trusted.`
  },
  {
    id: 586,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 1,
    question: `Maria emails a signed contract to a vendor. She needs the vendor to be able to verify that the contract genuinely originated from her and that it was not altered in transit. Which cryptographic technique provides both integrity and proof of origin?`,
    choices: {
      A: `Symmetric encryption with a shared key`,
      B: `A digital signature`,
      C: `Hashing the document`,
      D: `Steganography`
    },
    correct: "B",
    explanation: `A digital signature is created by hashing the document and encrypting that hash with the sender's private key. The recipient verifies it with the sender's public key, which confirms integrity (the document was not changed) and non-repudiation/authentication (only Maria's private key could have produced it). Hashing alone proves integrity but not origin, and symmetric encryption does not bind the message to a specific sender.`
  },
  {
    id: 587,
    domain: "General Security Concepts",
    domainId: 1,
    chapter: 1,
    question: `A company posts large signs at its entrance stating that the premises are monitored by security cameras and that trespassers will be prosecuted. What functional type of security control does the sign itself represent?`,
    choices: {
      A: `Detective`,
      B: `Preventive`,
      C: `Deterrent`,
      D: `Corrective`
    },
    correct: "C",
    explanation: `A warning sign is a deterrent control — it discourages an attacker from acting but does nothing to physically stop or detect the act. The cameras themselves are detective, a locked gate would be preventive, and restoring from backup after an incident would be corrective.`
  },
  {
    id: 588,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 2,
    question: `An employee receives a phone call from someone claiming to be from the IT help desk. The caller manufactures urgency, warning that the employee's account will be locked in 10 minutes unless they immediately read back their password to "verify their identity." What type of social engineering attack is this?`,
    choices: {
      A: `Smishing`,
      B: `Vishing`,
      C: `Whaling`,
      D: `Watering hole attack`
    },
    correct: "B",
    explanation: `Vishing (voice phishing) is social engineering conducted over a phone call, here combined with the urgency principle to pressure the victim. Smishing uses SMS text messages, whaling targets high-level executives specifically, and a watering hole attack compromises a website the target group is known to visit.`
  },
  {
    id: 589,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 2,
    question: `A user reports that all their files now have an unfamiliar extension and a text file is demanding cryptocurrency payment to restore access. The organization maintains tested, offline backups. After isolating the infected host from the network, what is the BEST next step?`,
    choices: {
      A: `Pay the ransom to recover the data quickly`,
      B: `Restore the affected systems from known-good offline backups`,
      C: `Run antivirus and keep using the system as normal`,
      D: `Reconnect the host so users can keep working`
    },
    correct: "B",
    explanation: `With tested, offline backups available, the organization should eradicate the ransomware and restore from known-good backups. Paying the ransom funds criminal activity and offers no guarantee of recovery. Continuing to use or reconnecting an infected host risks spreading the infection and destroying evidence.`
  },
  {
    id: 590,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 2,
    question: `A web application lets users post comments that are stored and later displayed to other visitors. An attacker submits a comment containing a <script> tag. When other users open the page, the script executes in their browsers and steals their session cookies. Which vulnerability is being exploited?`,
    choices: {
      A: `SQL injection`,
      B: `Cross-site request forgery (CSRF)`,
      C: `Stored cross-site scripting (XSS)`,
      D: `Directory traversal`
    },
    correct: "C",
    explanation: `This is stored (persistent) cross-site scripting: malicious script is saved on the server and served to every visitor, executing in their browser context. SQL injection targets the database, CSRF tricks an authenticated user's browser into sending unwanted requests, and directory traversal accesses files outside the intended path.`
  },
  {
    id: 591,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 2,
    question: `Users on a corporate Wi-Fi network begin reporting TLS certificate warnings for trusted sites. An investigation finds an unauthorized device positioned between the clients and the gateway, intercepting and relaying all traffic. Which attack is occurring?`,
    choices: {
      A: `On-path (man-in-the-middle) attack`,
      B: `Replay attack`,
      C: `Privilege escalation`,
      D: `Buffer overflow`
    },
    correct: "A",
    explanation: `An on-path attack (formerly "man-in-the-middle") places the attacker between two communicating parties to intercept or alter traffic. The certificate warnings appear because the attacker presents its own certificate instead of the legitimate one. A replay attack retransmits captured valid data, while privilege escalation and buffer overflow are unrelated to traffic interception.`
  },
  {
    id: 592,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 2,
    question: `An attacker steals a database of password hashes and uses a large precomputed table that maps hashes back to their plaintext values, cracking many passwords almost instantly. The defending organization had hashed passwords but applied no additional random data. Which mitigation would have BEST defeated this attack?`,
    choices: {
      A: `Using a faster hashing algorithm`,
      B: `Salting each password with a unique random value before hashing`,
      C: `Storing the passwords with reversible encryption`,
      D: `Requiring password changes every 30 days`
    },
    correct: "B",
    explanation: `Adding a unique, random salt to each password before hashing makes precomputed (rainbow) tables useless, because the attacker would need a separate table for every possible salt. A faster hash actually helps the attacker, reversible encryption is weaker than hashing for stored credentials, and frequent rotation does not stop a stolen hash from being cracked.`
  },
  {
    id: 593,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 2,
    question: `A company learns that a third-party software library it bundles into its own product contains a publicly known critical vulnerability that was introduced by the upstream vendor. What category of risk does this BEST represent?`,
    choices: {
      A: `Zero-day vulnerability`,
      B: `Insider threat`,
      C: `Supply chain vulnerability`,
      D: `Misconfiguration`
    },
    correct: "C",
    explanation: `A flaw inherited from an upstream vendor's component is a supply chain vulnerability — risk introduced through software the organization depends on but does not author. It is not a zero-day because the vulnerability is publicly known, it is not an insider threat (no internal actor), and it is not a misconfiguration (the code itself is flawed).`
  },
  {
    id: 594,
    domain: "Threats, Vulnerabilities & Mitigations",
    domainId: 2,
    chapter: 2,
    question: `A code review finds that an application verifies a user's permission to a file and then, a brief moment later, opens that file. An attacker who can replace the file in the interval between the check and the open could gain unauthorized access. What type of vulnerability is this?`,
    choices: {
      A: `Integer overflow`,
      B: `Time-of-check to time-of-use (TOCTOU) race condition`,
      C: `Memory leak`,
      D: `Improper error handling`
    },
    correct: "B",
    explanation: `This is a time-of-check to time-of-use (TOCTOU) race condition: a security decision is made at one moment but acted upon later, and the state can change in between. An integer overflow involves arithmetic exceeding a variable's capacity, a memory leak is failure to release memory, and improper error handling exposes information through unhandled errors.`
  },
  {
    id: 595,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 3,
    question: `An organization uses a Software as a Service (SaaS) email platform. A vulnerability in the operating system that the email application runs on is exploited, causing a breach. Under the cloud shared responsibility model, who is responsible for patching that operating system?`,
    choices: {
      A: `The customer`,
      B: `The cloud service provider`,
      C: `Responsibility is always split evenly`,
      D: `A managed service provider, by default`
    },
    correct: "B",
    explanation: `In a SaaS model the provider manages the entire stack below the application — including the operating system, hypervisor, and physical infrastructure. The customer is generally responsible only for their data, user accounts, and access configuration. In IaaS the customer would own OS patching, but not in SaaS.`
  },
  {
    id: 596,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 3,
    question: `A company needs to host a public-facing web server so internet users can reach it, while ensuring those external users cannot directly access the internal LAN where domain controllers reside. Where should the web server be placed?`,
    choices: {
      A: `On the internal LAN, protected only by a host-based firewall`,
      B: `In a screened subnet (DMZ) between the internet and the internal network`,
      C: `On the same VLAN as the domain controllers`,
      D: `Directly on the internet with no firewall in front of it`
    },
    correct: "B",
    explanation: `A screened subnet (DMZ) is an isolated network segment for internet-facing servers, separated from the internal LAN by firewall rules. If the web server is compromised, the attacker is still blocked from pivoting directly into the internal network. Placing it on the internal LAN or beside domain controllers would expose critical internal systems.`
  },
  {
    id: 597,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 3,
    question: `An e-commerce website must remain available even if one of its web servers fails, and incoming customer requests should be spread across several identical servers. Which solution BEST meets this requirement?`,
    choices: {
      A: `A load balancer`,
      B: `A jump server`,
      C: `A forward proxy`,
      D: `A honeypot`
    },
    correct: "A",
    explanation: `A load balancer distributes incoming traffic across multiple backend servers and can detect a failed server and stop sending it requests, providing both scalability and high availability. A jump server is a hardened host for administrative access, a forward proxy mediates outbound client traffic, and a honeypot is a decoy to attract attackers.`
  },
  {
    id: 598,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 3,
    question: `Developers need a non-production test environment populated with realistic-looking data, but real customer Social Security numbers must never appear. The substituted values should be irreversible and not mathematically derived from the originals. Which data protection technique is MOST appropriate?`,
    choices: {
      A: `Data masking`,
      B: `Tokenization`,
      C: `Symmetric encryption`,
      D: `Digital signing`
    },
    correct: "A",
    explanation: `Data masking replaces sensitive values with realistic but fictitious data and is well suited to non-production environments because the substitution is one-way and cannot be reversed. Tokenization keeps a reversible mapping (a token vault) and is aimed at production use such as payment processing, while encryption is reversible with the key. Signing provides integrity, not concealment.`
  },
  {
    id: 599,
    domain: "Security Architecture",
    domainId: 3,
    chapter: 3,
    question: `A company performs a full backup every Sunday and a differential backup each day Monday through Saturday. A server fails on Thursday afternoon, before that day's backup runs. How many backup sets are required to fully restore the server?`,
    choices: {
      A: `One`,
      B: `Two`,
      C: `Four`,
      D: `Seven`
    },
    correct: "B",
    explanation: `A differential backup captures everything changed since the last full backup. Restoring requires only the most recent full backup (Sunday) plus the most recent differential backup (Wednesday) — two sets in total. Incremental backups, by contrast, would require the full backup plus every incremental since.`
  },
  {
    id: 600,
    domain: "Security Operations",
    domainId: 4,
    chapter: 4,
    question: `A security analyst has confirmed an active malware infection on a workstation. Following the standard incident response lifecycle, what should the analyst focus on immediately after detection and analysis?`,
    choices: {
      A: `Eradication`,
      B: `Containment`,
      C: `Recovery`,
      D: `Lessons learned`
    },
    correct: "B",
    explanation: `The incident response lifecycle is Preparation; Detection and Analysis; Containment, Eradication, and Recovery; and Post-incident Activity (lessons learned). Once the incident is confirmed, containment comes first — isolating the host to limit the damage — before eradicating the malware and recovering the system.`
  },
  {
    id: 601,
    domain: "Security Operations",
    domainId: 4,
    chapter: 4,
    question: `A security team wants a single platform that collects log data from servers, firewalls, and endpoints, correlates events across those sources, and raises alerts when it detects suspicious patterns. Which tool provides this capability?`,
    choices: {
      A: `A security information and event management (SIEM) system`,
      B: `A data loss prevention (DLP) system`,
      C: `A vulnerability scanner`,
      D: `A forward proxy`
    },
    correct: "A",
    explanation: `A SIEM aggregates and normalizes logs from many sources, correlates events to find patterns a single source would miss, and generates alerts for analysts. DLP focuses on preventing data exfiltration, a vulnerability scanner identifies weaknesses, and a forward proxy controls outbound web traffic.`
  },
  {
    id: 602,
    domain: "Security Operations",
    domainId: 4,
    chapter: 4,
    question: `An employee transfers from the finance department to the marketing department. Months later, an audit discovers the employee still has full access to financial systems they no longer need. Which practice would have BEST caught and corrected this?`,
    choices: {
      A: `Mandatory vacation`,
      B: `Regular user access reviews (recertification)`,
      C: `Separation of duties`,
      D: `Multi-factor authentication`
    },
    correct: "B",
    explanation: `This is privilege creep — accumulated access that is no longer appropriate. Regular access reviews (recertification) periodically validate that each user's permissions still match their current role and remove anything excess. Mandatory vacation and separation of duties address fraud detection and collusion, and MFA strengthens authentication but does not adjust authorization.`
  },
  {
    id: 603,
    domain: "Security Operations",
    domainId: 4,
    chapter: 4,
    question: `Before placing a new server into production, an administrator removes unused applications, closes unnecessary network ports, and disables the default administrator account. What is this overall process called?`,
    choices: {
      A: `Patch management`,
      B: `System hardening`,
      C: `Sandboxing`,
      D: `Penetration testing`
    },
    correct: "B",
    explanation: `System hardening is the process of reducing a system's attack surface by removing or disabling anything not required — unused software, open ports, and default accounts. Patch management specifically addresses applying updates, sandboxing isolates untrusted code, and penetration testing actively probes for weaknesses rather than removing them.`
  },
  {
    id: 604,
    domain: "Security Operations",
    domainId: 4,
    chapter: 4,
    question: `A login system requires the user to enter a password and then type in a one-time code generated by a physical hardware token they carry. Which two authentication factors are in use?`,
    choices: {
      A: `Something you know and something you are`,
      B: `Something you know and something you have`,
      C: `Something you have and somewhere you are`,
      D: `Something you are and something you do`
    },
    correct: "B",
    explanation: `A password is "something you know" and a physical hardware token is "something you have," so this is genuine multi-factor authentication using two different factor categories. "Something you are" refers to biometrics, "somewhere you are" to location, and "something you do" to behavioral patterns.`
  },
  {
    id: 605,
    domain: "Security Operations",
    domainId: 4,
    chapter: 4,
    question: `A forensic investigator must collect evidence from a compromised system that is still powered on and running. According to the order of volatility, which source of evidence should be collected FIRST?`,
    choices: {
      A: `Files on the system's hard drive`,
      B: `The contents of CPU registers, cache, and RAM`,
      C: `Archived data on backup tapes`,
      D: `Logs already forwarded to a remote SIEM`
    },
    correct: "B",
    explanation: `The order of volatility dictates collecting the most fleeting data first. CPU registers, cache, and RAM are lost the instant the system loses power, so they must be captured before disk contents. Disk data is more stable, and backups and remote logs are the most persistent and least volatile.`
  },
  {
    id: 606,
    domain: "Security Operations",
    domainId: 4,
    chapter: 4,
    question: `A vulnerability scanner reports that a server is affected by a particular flaw. The security team manually verifies that the server is fully patched and that the reported flaw does not actually exist on it. How should this scan result be classified?`,
    choices: {
      A: `True positive`,
      B: `False positive`,
      C: `False negative`,
      D: `True negative`
    },
    correct: "B",
    explanation: `A false positive is when a tool reports a problem that does not actually exist. A true positive would be a real flaw correctly reported, a false negative would be a real flaw the scanner missed, and a true negative would be correctly reporting no flaw where none exists.`
  },
  {
    id: 607,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 5,
    question: `After analyzing a particular low-impact risk, a company determines that the cost of any mitigation would exceed the potential loss. Leadership formally documents the decision to take no further action and signs off on it. Which risk treatment strategy is being applied?`,
    choices: {
      A: `Risk transference`,
      B: `Risk avoidance`,
      C: `Risk mitigation`,
      D: `Risk acceptance`
    },
    correct: "D",
    explanation: `Risk acceptance is the documented, formally approved decision to take no action and absorb a risk, typically when mitigation would cost more than the expected loss. Transference shifts the risk to a third party (such as insurance), avoidance eliminates the activity causing the risk, and mitigation reduces the risk with controls.`
  },
  {
    id: 608,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 5,
    question: `A company is contracting a managed service provider and wants a binding agreement that defines guaranteed uptime, maximum response times, and financial penalties if those targets are missed. Which document specifies these measurable performance commitments?`,
    choices: {
      A: `Memorandum of understanding (MOU)`,
      B: `Service level agreement (SLA)`,
      C: `Non-disclosure agreement (NDA)`,
      D: `Business partners agreement (BPA)`
    },
    correct: "B",
    explanation: `A service level agreement (SLA) defines the specific, measurable level of service expected from a provider, including uptime guarantees, response times, and remedies or penalties for missed targets. An MOU expresses general intent without strict enforceability, an NDA protects confidential information, and a BPA governs the broader relationship between business partners.`
  },
  {
    id: 609,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 5,
    question: `A server asset is valued at $50,000. A specific threat is expected to destroy 20% of the asset's value each time it occurs, and analysts estimate it will occur twice per year. What is the annualized loss expectancy (ALE)?`,
    choices: {
      A: `$10,000`,
      B: `$20,000`,
      C: `$50,000`,
      D: `$100,000`
    },
    correct: "B",
    explanation: `Single loss expectancy (SLE) = asset value × exposure factor = $50,000 × 0.20 = $10,000. Annualized loss expectancy (ALE) = SLE × annualized rate of occurrence (ARO) = $10,000 × 2 = $20,000.`
  },
  {
    id: 610,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 5,
    question: `Within a data governance program, which role is responsible for assigning a data set's sensitivity classification and is ultimately accountable for how that data is protected and used?`,
    choices: {
      A: `Data custodian`,
      B: `Data owner`,
      C: `Data processor`,
      D: `Data subject`
    },
    correct: "B",
    explanation: `The data owner — typically a senior business leader — classifies the data and bears ultimate accountability for its protection. The data custodian implements and maintains the technical controls the owner specifies, the data processor handles data on behalf of others, and the data subject is the individual the personal data describes.`
  },
  {
    id: 611,
    domain: "Security Program Mgmt & Oversight",
    domainId: 5,
    chapter: 5,
    question: `A company collects and processes the personal data of customers who reside in the European Union. Which regulation primarily governs how that personal data must be collected, handled, and protected?`,
    choices: {
      A: `HIPAA`,
      B: `PCI DSS`,
      C: `GDPR`,
      D: `SOX`
    },
    correct: "C",
    explanation: `The General Data Protection Regulation (GDPR) governs the processing of personal data of individuals in the European Union. HIPAA covers protected health information in the United States, PCI DSS is a contractual standard for payment card data, and SOX addresses financial reporting controls for public companies.`
  },
];

// Custom questions stored in localStorage are merged at runtime
