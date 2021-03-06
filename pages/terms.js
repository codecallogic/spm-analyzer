import Nav from '../components/nav'
import Contact from '../components/contact'
import Copyright from '../components/copyright'
import React, { useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const Terms = ({}) => {

  const [stickOnScroll, setstickOnScroll] = useState({
    navSticky: false,
  })
  
  const {navSticky} = stickOnScroll
  
  useScrollPosition(({ prevPos, currPos }) => {
    currPos.y === 0 ? setstickOnScroll({...stickOnScroll, navSticky: false}) : setstickOnScroll({...stickOnScroll, navSticky: true});
  }, [stickOnScroll])
  
  return (
    <div className="home">
      <Nav
        sticky={navSticky}
      />
      <div className="terms">
      <div className="terms-heading">TERMS OF USE</div> 
      <div className="terms-date">Effective November 29, 2019</div>
      ​

      <div className="terms-subheading">AGREEMENT TO TERMS</div>

      <div className="terms-content">
      These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and APPD LLC, doing business as SPM – Sales Rank Analyzer ("SPM Analyzer", “we”, “us”, or “our”), concerning your access to and use of the https://spmanalyzer.com website and “APPD LLC” on any platform (collectively, the “Site”). You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.

      ​

      <p>Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason. We will alert you about any changes by updating the “Last updated” date of these Terms of Use, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Terms of Use to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued use of the Site after the date such revised Terms of Use are posted.</p>

      ​

      <p>The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.</p>

      <p>The Site is intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Site.</p>

      ​
      </div>
      
      <div className="terms-subheading">INTELLECTUAL PROPERTY RIGHTS</div>

      <div className="terms-content">
      Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, foreign jurisdictions, and international conventions. The Content and the Marks are provided on the Site “AS IS” for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
      <p>Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks.</p>
      </div>

      <div className="terms-subheading">
      USER REPRESENTATIONS
      </div>

      ​<div className="terms-content">
      By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise; (6) you will not use the Site for any illegal or unauthorized purpose; and (7) your use of the Site will not violate any applicable law or regulation.

      <p>If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof).</p>
      
      </div>

      

      <div className="terms-subheading">USER REGISTRATION</div>

      ​

      <div className="terms-content">
      You may be required to register with the Site. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
      </div>

      <div className="terms-subheading">PROHIBITED ACTIVITIES</div>

      ​<div className="terms-content">

      You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.

      <p>As a user of the Site, you agree not to:</p>

      <ol>
        <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
        <li>Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
        <li>Use a buying agent or purchasing agent to make purchases on the Site.</li>
        <li>Use the Site to advertise or offer to sell goods and services.</li>
        <li>Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein.</li>
        <li>Engage in unauthorized framing of or linking to the Site.</li>
        <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
        <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
        <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
        <li>Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.</li>
        <li>Attempt to impersonate another user or person or use the username of another user.</li>
        <li>Sell or otherwise transfer your profile.</li>
        <li>Use any information obtained from the Site in order to harass, abuse, or harm another person.</li>
        <li>Use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise.</li>
        <li>Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site.</li>
        <li>Attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site.</li>
        <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you.</li>
        <li>Delete the copyright or other proprietary rights notice from any Content.</li>
        <li>Copy or adapt the Site’s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
        <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site.</li>
        <li>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (“gifs”), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as “spyware” or “passive collection mechanisms” or “pcms”).</li>
        <li>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Site, or using or launching any unauthorized script or other software.</li>
        <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.</li>
        <li>Use the Site in a manner inconsistent with any applicable laws or regulations.</li>
      </ol>
      </div>

      <div className="terms-subheading">USER GENERATED CONTRIBUTIONS</div>

      <div className="terms-content">
      The Site may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Site and through third-party websites. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary. When you create or make available any Contributions, you thereby represent and warrant that:
      <ol>
        <li>The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</li>
        <li>You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Site, and other users of the Site to use your Contributions in any manner contemplated by the Site and these Terms of Use.</li>
        <li>You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Site and these Terms of Use.</li>
        <li>Your Contributions are not false, inaccurate, or misleading.</li>
        <li>Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</li>
        <li>Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).</li>
        <li>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</li>
        <li>Your Contributions do not advocate the violent overthrow of any government or incite, encourage, or threaten physical harm against another.</li>
        <li>Your Contributions do not violate any applicable law, regulation, or rule.</li>
        <li>Your Contributions do not violate the privacy or publicity rights of any third party.</li>
        <li>Your Contributions do not contain any material that solicits personal information from anyone under the age of 18 or exploits people under the age of 18 in a sexual or violent manner.</li>
        <li>Your Contributions do not violate any federal or state law concerning child pornography, or otherwise intended to protect the health or well-being of minors;</li>
        <li>Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</li>
        <div className="i">Your Contributions do not otherwise violate, or link to material that violates, any provision of these Terms of Use, or any applicable law or regulation.</div>
        <p>Any use of the Site in violation of the foregoing violates these Terms of Use and may result in, among other things, termination or suspension of your rights to use the Site.</p>
      </ol>
      </div>
      <div className="terms-subheading">CONTRIBUTION LICENSE</div>
      <p>By posting your Contributions to any part of the Site, you automatically grant, and you represent and warrant that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, translate, transmit, excerpt (in whole or in part), and distribute such Contributions (including, without limitation, your image and voice) for any purpose, commercial, advertising, or otherwise, and to prepare derivative works of, or incorporate into other works, such Contributions, and grant and authorize sublicenses of the foregoing. The use and distribution may occur in any media formats and through any media channels.</p>

      <p>This license will apply to any form, media, or technology now known or hereafter developed, and includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide. You waive all moral rights in your Contributions, and you warrant that moral rights have not otherwise been asserted in your Contributions.</p>

      ​

      <p>We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Site. You are solely responsible for your Contributions to the Site and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.</p>

      ​

      <p>We have the right, in our sole and absolute discretion, (1) to edit, redact, or otherwise change any Contributions; (2) to re-categorize any Contributions to place them in more appropriate locations on the Site; and (3) to pre-screen or delete any Contributions at any time and for any reason, without notice. We have no obligation to monitor your Contributions.</p>

      ​

      <div className="terms-subheading">SUBMISSIONS</div>

      <p>You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Site ("Submissions") provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you. You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original with you or that you have the right to submit such Submissions. You agree there shall be no recourse against us for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions.</p>

      ​

      <div className="terms-subheading">THIRD-PARTY WEBSITES AND CONTENT</div>

      <div className="terms-content">
      <p>The Site may contain (or you may be sent via the Site) links to other websites ("Third-Party Websites") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties ("Third-Party Content"). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Site or any Third-Party Content posted on, available through, or installed from the Site, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content. Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave the Site and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Terms of Use no longer govern. You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the Site or relating to any applications you use or install from the Site. Any purchases you make through Third-Party Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party. You agree and acknowledge that we do not endorse the products or services offered on Third-Party Websites and you shall hold us harmless from any harm caused by your purchase of such products or services. Additionally, you shall hold us harmless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites.</p>
      </div>
      ​

      <div className="terms-subheading">ADVERTISERS</div>

      <div className="terms-content">
      <p>We allow advertisers to display their advertisements and other information in certain areas of the Site, such as sidebar advertisements or banner advertisements. If you are an advertiser, you shall take full responsibility for any advertisements you place on the Site and any services provided on the Site or products sold through those advertisements. Further, as an advertiser, you warrant and represent that you possess all rights and authority to place advertisements on the Site, including, but not limited to, intellectual property rights, publicity rights, and contractual rights. We simply provide the space to place such advertisements, and we have no other relationship with advertisers.</p>
      </div>

      <div className="terms-subheading">SITE MANAGEMENT</div>

      <div className="terms-content">
      <p>We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Use; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Use, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.</p>
      </div>
      ​

      <div className="terms-subheading">PRIVACY POLICY</div>

      <div className="terms-content">
      <p>We care about data privacy and security. Please review our Privacy Policy: https://www.spmanalyzer.com/app-privacy. By using the Site, you agree to be bound by our Privacy Policy, which is incorporated into these Terms of Use. Please be advised the Site is hosted in the United States. If you access the Site from the European Union, Asia, or any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United States, then through your continued use of the Site, you are transferring your data to the United States, and you expressly consent to have your data transferred to and processed in the United States. Further, we do not knowingly accept, request, or solicit information from children or knowingly market to children. Therefore, in accordance with the U.S. Children’s Online Privacy Protection Act, if we receive actual knowledge that anyone under the age of 13 has provided personal information to us without the requisite and verifiable parental consent, we will delete that information from the Site as quickly as is reasonably practical.</p>
      </div>
      ​

      <div className="terms-subheading">TERM AND TERMINATION</div>

      <div className="terms-content">
      These Terms of Use shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
      </div>

      <p>If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.</p>

      ​

      <div className="terms-subheading">MODIFICATIONS AND INTERRUPTIONS</div>

      <div className="terms-content">
      We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.
      <p>We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Site during any downtime or discontinuance of the Site. Nothing in these Terms of Use will be construed to obligate us to maintain and support the Site or to supply any corrections, updates, or releases in connection therewith.
      </p>
      </div>      ​

      <div className="terms-subheading">GOVERNING LAW</div>

      <div className="terms-content">
      These Terms of Use and your use of the Site are governed by and construed in accordance with the laws of the State of Colorado applicable to agreements made and to be entirely performed within the State of Colorado, without regard to its conflict of law principles.
      </div>

      ​

      <div className="terms-subheading">DISPUTE RESOLUTION</div>

      <div className="terms-content">

      <h3>Informal Negotiations</h3>

      <p>To expedite resolution and control the cost of any dispute, controversy, or claim related to these Terms of Use (each a "Dispute" and collectively, the “Disputes”) brought by either you or us (individually, a “Party” and collectively, the “Parties”), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.</p>

      <h3>Binding Arbitration</h3>

      ​

      <p>If the Parties are unable to resolve a Dispute through informal negotiations, the Dispute (except those Disputes expressly excluded below) will be finally and exclusively resolved by binding arbitration. YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL. The arbitration shall be commenced and conducted under the Commercial Arbitration Rules of the American Arbitration Association ("AAA") and, where appropriate, the AAA’s Supplementary Procedures for Consumer Related Disputes ("AAA Consumer Rules"), both of which are available at the AAA website www.adr.org. Your arbitration fees and your share of arbitrator compensation shall be governed by the AAA Consumer Rules and, where appropriate, limited by the AAA Consumer Rules. The arbitration may be conducted in person, through the submission of documents, by phone, or online. The arbitrator will make a decision in writing, but need not provide a statement of reasons unless requested by either Party. The arbitrator must follow applicable law, and any award may be challenged if the arbitrator fails to do so. Except where otherwise required by the applicable AAA rules or applicable law, the arbitration will take place in United States County, Colorado. Except as otherwise provided herein, the Parties may litigate in court to compel arbitration, stay proceedings pending arbitration, or to confirm, modify, vacate, or enter judgment on the award entered by the arbitrator.</p>

      ​

      <p>If for any reason, a Dispute proceeds in court rather than arbitration, the Dispute shall be commenced or prosecuted in the state and federal courts located in United States County, Colorado, and the Parties hereby consent to, and waive all defenses of lack of personal jurisdiction, and forum non conveniens with respect to venue and jurisdiction in such state and federal courts. Application of the United Nations Convention on Contracts for the International Sale of Goods and the the Uniform Computer Information Transaction Act (UCITA) are excluded from these Terms of Use.</p>

      <p>In no event shall any Dispute brought by either Party related in any way to the Site be commenced more than one (1) years after the cause of action arose. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.</p>

      <h3>Restrictions</h3>

      ​

      <p>The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.</p>

      <h3>Exceptions to Informal Negotiations and Arbitration</h3>

      ​

      <p>The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations and binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.</p>

      </div>

      <div className="terms-subheading">CORRECTIONS</div>

      <div className="terms-content">
      ​<p>There may be information on the Site that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice.</p>
      </div>

      <div className="terms-subheading">DISCLAIMER</div>

      <div className="terms-content">THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.</div>

      ​

      <div className="terms-subheading">LIMITATIONS OF LIABILITY</div>

      <div className="terms-content">
      IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING. CERTAIN STATE LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
      </div>

      <div className="terms-subheading">INDEMNIFICATION</div>

      ​

      <div className="terms-content">You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) your Contributions; (2) use of the Site; (3) breach of these Terms of Use; (4) any breach of your representations and warranties set forth in these Terms of Use; (5) your violation of the rights of a third party, including but not limited to intellectual property rights; or (6) any overt harmful act toward any other user of the Site with whom you connected via the Site. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.</div>

      <div className="terms-subheading">USER DATA</div>

      ​

      <div className="terms-content">We will maintain certain data that you transmit to the Site for the purpose of managing the performance of the Site, as well as data relating to your use of the Site. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.</div>

      ​

      <div className="terms-subheading">ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</div>

      <div className="terms-content">Visiting the Site, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.</div>

      ​

      <div className="terms-subheading">CALIFORNIA USERS AND RESIDENTS</div>

      <div className="terms-content">If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.</div>

      <div className="terms-subheading">MISCELLANEOUS</div>

      ​

      <div className="terms-content">These Terms of Use and any policies or operating rules posted by us on the Site or in respect to the Site constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Terms of Use shall not operate as a waiver of such right or provision. These Terms of Use operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Terms of Use is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms of Use and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Terms of Use or use of the Site. You agree that these Terms of Use will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Terms of Use and the lack of signing by the parties hereto to execute these Terms of Use.</div>

      

      <div className="terms-subheading">CONTACT US</div>

      <div className="terms-content">In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:

      APPD LLC

      Phone: 209-813-0257

      info@spmanalyzer.com

      SPM ANALYZER TERMS OF USE

      Last Updated: November 29th, 2019

      These Terms of Service ("Terms") are a binding agreement between you (“End User” or “you”) and APPD, LLC (“APPD”). These Terms govern your use of APPD’s “SPM – Sales Rank Analyzer” mobile application (the “App”) on any mobile platform, including all related documentation. The App is licensed, not sold, to you.

      BY CLICKING THE "AGREE" BUTTON, OR DOWNLOADING/ INSTALLING/USING THE APP, YOU (A) ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTAND THESE TERMS; (B) REPRESENT THAT YOU ARE 18 YEARS OF AGE OR OLDER/OF LEGAL AGE TO ENTER INTO A BINDING AGREEMENT; AND (C) ACCEPT THESE TERMS AND AGREE THAT YOU ARE LEGALLY BOUND BY ITS TERMS.  IF YOU DO NOT AGREE TO THESE TERMS, DO NOT DOWNLOAD/ INSTALL/USE THE APP AND DELETE IT FROM YOUR MOBILE DEVICE.

      Modifications.  We reserve the right to change these Terms from time to time.  For example, we may need to change these Terms if we release a new feature.  If we make changes, we will notify you by revising the date at the top of the Terms and, in some cases, we will provide you with additional notice (such as adding a statement to our homepage or sending you an e-mail notification).  We encourage you to review these Terms periodically to stay informed about our practice.  Whenever we make changes to these Terms, they are effective when the revised Terms are posted unless we notify you otherwise. If you continue to use the App after the revised Terms have been posted, then you will be deemed to have accepted the changes to these Terms.

      2. Creating Accounts. When you create an account, you must maintain the security of your password and any stored API keys and accept all risk that someone may access your account without permission.  If you discover or suspect any App security breaches, please let us know as soon as possible.  You represent and warrant to us that all information that you provide in connection with your account is accurate, truthful, current and complete.  APPD reserves the right to deny any account at our discretion.

      3. License Grant. Subject to these Terms, APPD grants you a limited, non-exclusive and nontransferable license to:

      (a) download, install and use the App for your individual, non-commercial use on a single mobile device owned or otherwise controlled by you ("Mobile Device") strictly in accordance with the App's documentation and only for the period of time for which access has been paid for; and

      (b) access, stream, download and use on such Mobile Device the Content and Services (as defined in Section 6), if any, made available in or otherwise accessible through the App, strictly in accordance with these Terms and the Terms of Use applicable to such Content and Services as set forth in Section 6.

      (c) With respect to any App Store Sourced Application (as defined below), you will only use the App Store Sourced Application (i) on an Apple-branded product that runs the iOS operating system software provided by Apple; and (ii) as permitted by the “Usage Rules” set forth in the Apple App Store Terms of Service. The terms of this license will also govern any Updates provided by APPD that replace and/or supplement the original App, unless the Update is accompanied by a separate license, in which case the terms of that license will govern.

      4. License Restrictions.  Licensee shall not:

      (a) copy the App, except as expressly permitted by this license;

      (b) modify, translate, adapt or otherwise create derivative works or improvements, whether or not patentable, of the App or any information or data provided by the App;

      © reverse engineer, disassemble, decompile, decode or otherwise attempt to derive or gain access to the source code of the App or any part thereof;

      (d) remove, delete, alter or obscure any trademarks or any copyright, trademark, patent or other intellectual property or proprietary rights notices from the App, including any copy thereof;

      (e) rent, lease, lend, sell, sublicense, assign, distribute, publish, transfer, grant a security interest in or otherwise make available the App or any features or functionality of the App, including all data included in or provided by the App, to any third party for any reason, including by making the App available on a network where it is capable of being accessed by more than one device at any time;

      (f) remove, disable, circumvent or otherwise create or implement any workaround to any copy protection, rights management or security features in or protecting the App; or

      (g) use the App in, or in association with, the design, construction, maintenance or operation of any hazardous environments or systems, including any power generation systems; aircraft navigation or communication systems, air traffic control systems or any other transport management systems; safety-critical applications, including medical or life-support systems, vehicle operation applications or any police, fire or other safety response systems; and military or aerospace applications, weapons systems or environments.

      (h)use the App for any illegal or unauthorized purpose or to engage in, encourage or promote any activity that is unlawful or violates these terms.

      5. Software from Apple App Store. The following applies to any Application accessed through or downloaded from the Apple App Store ("App Store Sourced Application"):

      (a) You acknowledge that: (i) these Terms are concluded between you and APPD only, and not Apple and/or Google; and (ii) as between APPD and Apple and/or Google, APPD is solely responsible for the Apple and Google Play App Store Sourced Application and content therein. Your use of the App Store Sourced Application must also comply with the responsible1 App Store Terms of Service.

      (b) You acknowledge that Apple and/or Google Inc has no obligation whatsoever to furnish any maintenance and support services with respect to the responsible App Store Sourced Application.

      (c) In the event of any failure of the App Store Sourced Application to conform to any applicable warranty, you may notify Apple. Subject to the then-current terms and conditions published by Apple, (a) Apple may refund the purchase price for the App Store Sourced Application to you, (b) to the maximum extent permitted by applicable law, Apple will have no other warranty obligation whatsoever with respect to the App Store Sourced Application, and (c) as between APPD LLC and Apple, any other claims, losses, liabilities, damages, costs or expenses attributable to any failure to conform to any warranty will be APPD LLC’s sole responsibility.

      (d) You and APPD LLC acknowledge that, as between APPD LLC and Apple, Apple is not responsible for addressing any claims by you or any third party relating to the App Store Sourced Application or your possession and use of the App Store Sourced Application, including, but not limited to: (i) product liability claims; (ii) any claim that the App Store Sourced Application fails to conform to any applicable legal or regulatory requirement; and (iii) claims arising under consumer protection or similar legislation.

      (e) You and APPD LLC acknowledge that, in the event of any third party claim, that the App Store Sourced Application or your possession and use of that App Store Sourced Application infringes that third party’s intellectual property rights, as between APPD LLC and Apple, APPD LLC, not Apple, will be solely responsible for the investigation, defense, settlement and discharge of any such intellectual property infringement claim to the extent required by these Terms.

      (f) You and APPD LLC acknowledge and agree that Apple / Google and Apple’s / Google’s subsidiaries, are third party beneficiaries of these Terms as related to your license of the App Store Sourced Application, and that, upon your acceptance of the terms and conditions of these Terms, Apple will have the right (and will be deemed to have accepted the right) to enforce these Terms as related to your license of the App Store Sourced Application against you as a third party beneficiary thereof.

      (g) Without limiting any other terms of these Terms, you must comply with all applicable third party terms of agreement when using the App Store Sourced Application.

      If you have any questions, complaints or claims with respect to any App Store Sourced Application, you may contact APPD by emailing us at info@spmanalyzer.com.

      6. Reservation of Rights. You acknowledge and agree that the App is provided under license, and not sold, to you. You do not acquire any ownership interest in the App under these Terms, or any other rights thereto other than to use the App in accordance with the license granted, and subject to all terms, conditions and restrictions, under these Terms.  APPD LLC and its licensors and service providers reserve and shall retain their entire right, title and interest in and to the App, including all copyrights, trademarks and other intellectual property rights therein or relating thereto, except as expressly granted to you in these Terms.

      7. Collection and Use of Your Information. You acknowledge that when you download, install or use the App, APPD LLC may use automatic means (including, for example, cookies and web beacons) to collect information about your Mobile Device and about your use of the App. Information collected through the App, other than your personally identifiable information, including without limitation pricing, product and use information, shall be owned by APPD LLC.  You also may be required to provide certain information about yourself as a condition to downloading, installing or using the App or certain of its features or functionality, and the App may provide you with opportunities to share information about yourself with others. All information we collect through or in connection with this App is subject to our Privacy Policy located at www.spmanalyzer.com/app-privacy. By downloading, installing, using and providing information to or through this App, you consent to all actions taken by us with respect to your information in compliance with these Terms and the Privacy Policy.

      8. Feedback. Any suggestions, comments or other feedback you provide APPD LLC about the App (the “Feedback”) will constitute our confidential information.  We are free to use, disclose, reproduce, license, distribute and monetize this Feedback as we see fit, without compensation to you or any obligation or restriction because of any intellectual property rights or otherwise.

      9. Updates. APPD LLC may from time to time in its sole discretion develop and provide App updates, which may include upgrades, bug fixes, patches and other error corrections and/or new features (collectively, including related documentation, "Updates"). Updates may also modify or delete in their entirety certain features and functionality. You agree that APPD LLC has no obligation to provide any Updates or to continue to provide or enable any particular features or functionality. APPD LLC e will not be liable to you or any third party for any changes or discontinuance of the App or any part of the App. Based on your Mobile Device settings, when your Mobile Device is connected to the internet either:

      (a) the App will automatically download and install all available Updates; or

      (b) you may receive notice of or be prompted to download and install available Updates.

      You shall promptly download and install all Updates and acknowledge and agree that the App or portions thereof may not properly operate should you fail to do so. You further agree that all Updates will be deemed part of the App and be subject to all terms and conditions of these Terms.

      10.Third Party Materials. The App may display, include or make available third-party content and features (including data, information, applications and other products services and/or materials) or provide links to third-party websites or services, including through third-party advertising ("Third Party Materials"). You acknowledge and agree that APPD LLC is not responsible for Third Party Materials, including their accuracy, completeness, timeliness, validity, copyright compliance, legality, decency, quality or any other aspect thereof. APPD LLC does not assume and will not have any liability or responsibility to you or any other person or entity for any Third Party Materials. Third Party Materials and links thereto are provided solely as a convenience to you and you access and use them at entirely at your own risk and subject to such third parties' terms and conditions.

      11. Term and Termination.

      (a) The term of Agreement commences when you download/install the App or acknowledge your acceptance, and will continue in effect until terminated by you or APPD LLC as set forth in this Section.

      (b) Access to the App, and these Terms, will terminate at the end of your subscription period or the period of time for which payment has been made.

      (c) You may terminate these Terms by deleting the App and all copies thereof from your Mobile Device.

      (d) In addition, these Terms will terminate immediately and automatically without any notice if you violate any of the terms and conditions of these Terms.

      (e) Upon termination:

      (i) all rights granted to you under these Terms will also terminate; and

      (ii) you must cease all use of the App and delete all copies of the App from your Mobile Device and account.

      (f) Termination will not limit any of APPD LLC 's rights or remedies at law or in equity.

      12.Disclaimer of Warranties. THE APP IS PROVIDED TO YOU "AS IS" AND WITH ALL FAULTS AND DEFECTS WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, APPD LLC, ON ITS OWN BEHALF AND ON BEHALF OF ITS AFFILIATES AND ITS AND THEIR RESPECTIVE LICENSORS AND SERVICE PROVIDERS, EXPRESSLY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY OR OTHERWISE, WITH RESPECT TO THE APP, INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT, AND WARRANTIES THAT MAY ARISE OUT OF COURSE OF DEALING, COURSE OF PERFORMANCE, USAGE OR TRADE PRACTICE. WITHOUT LIMITATION TO THE FOREGOING, APPD LLC PROVIDES NO WARRANTY OR UNDERTAKING, AND MAKES NO REPRESENTATION OF ANY KIND THAT THE APP WILL MEET YOUR REQUIREMENTS, ACHIEVE ANY INTENDED RESULTS, BE COMPATIBLE OR WORK WITH ANY OTHER SOFTWARE, APPLICATIONS, SYSTEMS OR SERVICES, OPERATE WITHOUT INTERRUPTION, MEET ANY PERFORMANCE OR RELIABILITY STANDARDS OR BE ERROR FREE OR THAT ANY ERRORS OR DEFECTS CAN OR WILL BE CORRECTED.

      SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF OR LIMITATIONS ON IMPLIED WARRANTIES OR THE LIMITATIONS ON THE APPLICABLE STATUTORY RIGHTS OF A CONSUMER, SO SOME OR ALL OF THE ABOVE EXCLUSIONS AND LIMITATIONS MAY NOT APPLY TO YOU.

      13.Limitation of Liability. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL APPD LLC OR ITS AFFILIATES, OR ANY OF ITS OR THEIR RESPECTIVE LICENSORS OR SERVICE PROVIDERS, HAVE ANY LIABILITY ARISING FROM OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP OR THE CONTENT AND SERVICES FOR:

      (a) PERSONAL INJURY, PROPERTY DAMAGE, LOST PROFITS, COST OF SUBSTITUTE GOODS OR SERVICES, LOSS OF DATA, LOSS OF GOODWILL, BUSINESS INTERRUPTION, COMPUTER FAILURE OR MALFUNCTION OR ANY OTHER CONSEQUENTIAL, INCIDENTAL, INDIRECT, EXEMPLARY, SPECIAL OR PUNITIVE DAMAGES;

      (b) DIRECT DAMAGES IN AMOUNTS THAT IN THE AGGREGATE EXCEED THE AMOUNT ACTUALLY PAID BY YOU FOR A LICENSE TO THE APP OR ACCESS TO THE APP DURING THE TWELVE MONTH PERIOD PRIOR TO THE DATE THE CLAIM FOR DAMAGES AROSE.

      THE FOREGOING LIMITATIONS WILL APPLY WHETHER SUCH DAMAGES ARISE OUT OF BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE) OR OTHERWISE AND REGARDLESS OF WHETHER SUCH DAMAGES WERE FORESEEABLE OR APPD LLC WAS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. SOME JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS OF LIABILITY SO SOME OR ALL OF THE ABOVE LIMITATIONS OF LIABILITY MAY NOT APPLY TO YOU.

      14.          Indemnification. You agree to indemnify, defend and hold harmless APPD LLC and its officers, directors, employees, agents, affiliates, successors and assigns from and against any and all losses, damages, liabilities, deficiencies, claims, actions, judgments, settlements, interest, awards, penalties, fines, costs, or expenses of whatever kind, including reasonable attorneys' fees, arising from or relating to your use or misuse of the App or your breach of these Terms. Furthermore, you agree that APPD LLC assumes no responsibility for the content you submit or make available through the App.

      15.          Export Regulation. The App may be subject to US export control laws, including the US Export Administration Act and its associated regulations. You shall not, directly or indirectly, export, re-export or release the App to, or make the App accessible from, any jurisdiction or country to which export, re-export or release is prohibited by law, rule or regulation. You shall comply with all applicable federal laws, regulations and rules, and complete all required undertakings (including obtaining any necessary export license or other governmental approval), prior to exporting, re-exporting, releasing or otherwise making the App available outside the US.

      16. US Government Rights. The App is commercial computer software, as such term is defined in 48 C.F.R. §2.101. Accordingly, if you are an agency of the US Government or any contractor therefor, you receive only those rights with respect to the App as are granted to all other end users under license, in accordance with (a) 48 C.F.R. §227.7201 through 48 C.F.R. §227.7204, with respect to the Department of Defense and their contractors, or (b) 48 C.F.R. §12.212, with respect to all other US Government licensees and their contractors.

      17.  Severability.  If any provision of these Terms is illegal or unenforceable under applicable law, the remainder of the provision will be amended to achieve as closely as possible the effect of the original term and all other provisions of these Terms will continue in full force and effect.

      18. Governing Law. These Terms is governed by and construed in accordance with the internal laws of the State of Colorado without giving effect to any choice or conflict of law provision or rule. Any legal suit, action or proceeding arising out of or related to these Terms or the App shall be instituted exclusively in the federal courts of the United States or the courts of the State of Colorado in each case located in the City and County of Denver. You waive any and all objections to the exercise of jurisdiction over you by such courts and to venue in such courts.

      19. Limitation of Time to File Claims.  ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF OR RELATING TO THESE TERMS OR THE APP MUST BE COMMENCED WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES, OTHERWISE, SUCH CAUSE OF ACTION OR CLAIM IS PERMANENTLY BARRED.

      20. Entire Agreement. These Terms, and the other documents and terms and conditions referenced in these Terms, constitutes the entire agreement between you and APPD LLC with respect to the App and supersedes all prior or contemporaneous understandings and agreements, whether written or oral, with respect to the App.

      21. Waiver.  No failure to exercise, and no delay in exercising, on the part of either party, any right or any power hereunder shall operate as a waiver thereof, nor shall any single or partial exercise of any right or power hereunder preclude further exercise of that or any other right hereunder. In the event of a conflict between these Terms and any applicable purchase or other terms, the terms of these Terms shall govern.

                  

      Contact Us. 

      If you have any questions about these Terms, please email us at info@spmanalyzer.com, 

      or call +1 (209) 813-0257.

      </div>
      </div>
      <Contact />
      <Copyright />
    </div>
  )
}

export default Terms
