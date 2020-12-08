import Nav from '../components/nav'
import Contact from '../components/contact'
import Copyright from '../components/copyright'
import React, { useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const Privacy = ({}) => {

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
      <div className="privacy">
        <div className="privacy-heading">Privacy Policy</div>
        <div className="privacy-date">Effective November 29th, 2019</div>
        <div className="terms-subheading">1. SPM – Sales Rank Analyzer, APPD LLC </div>
        <div className="terms-content">SPM Analyzer (“we”/”us”) are committed to protecting and respecting your privacy. We make the SPM Sales Rank Analyzer App and other services at APPD LLC (the “Service”) available to our customers. This Privacy Policy describes how we collect, store, use, process, disclose and distribute information about our users through the Service. Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it.
        </div>
        <div className="privacy-subheading">2. Consent to Use Information</div>
        <div className="privacy-content">
          By using the Service you consent to the use of your Personal Information as described in this Privacy Policy. Except as set forth in this Privacy Policy, your Personal Information will not be used for any other purpose without your consent. We will not actively collect Personal Information for the purpose of sale or marketing in a way that specifically identifies the individual. In other words, we don’t sell customer lists. You may withdraw your consent to our processing of your Personal Information at any time. However, withdrawing consent may result in your inability to continue using the Service.
          <p>By using this Service, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Service. Your continued use of the Service following the posting of changes to this policy will be deemed your acceptance of those changes.</p>
        </div>
        <div className="privacy-subheading">3. Collection of Information</div>
        <div className="privacy-content">We aim to collect, use and disclose only such information as is required to enable us to manage your account, to provide the Service, to maintain our customer/visitor lists, to respond to your inquiries or provide feedback, for identification and authentication purposes, and for service improvement. We will maintain the confidentiality of any contact information you provide to us on signing up for our Service or contacting us with questions or for further information and we will use it only for the purposes for which we have collected it (subject to the exclusions and disclosures we have listed below), unless you agree that we may disclose it to other third parties.</div>
        <div className="privacy-subheading">4. Types of Information Collected</div>
        <div className="privacy-content">
        We may collect and process the following data about you: (a) Information that you provide by filling in forms on our Service. This includes information provided at the time of registering to use our Service, subscribing to our service, posting material or requesting further services. We may also ask you for information when you report a problem with our Service. (b) If you contact us, we may keep a record of that correspondence. (c) Details of every transaction you carry out through our Service. (d) Details of your visits to our Service and the resources that you access. (e) Details of the items you scan to help us improve our database size and accuracy.
        <p>Two types of information may be collected through the Service: Personal Information and Non-Personal Information. This Privacy Policy does not extend to the collection, use or disclosure of the following information which is currently not limited by applicable privacy laws: (a) information that is publicly available, such as names, addresses, telephone numbers and electronic address when listed in a directory or made available through directory assistance; or (b) Non-Personal Information (as defined further below).</p>
        <p>"Personal Information" is personally identifiable information, such as your name, address, e-mail address, credit card information, birth date and gender. At the time of collection, we will clearly identify the information being collected and the purposes for which it will be used. It is always your choice whether or not to provide Personal Information but if you choose not to provide certain requested Personal Information, in some instances you may not be able to register to use the Service or be able to access and use the Service at all. In other instances, your choice not to provide certain other Personal Information may mean that you will not be able to use certain features of the Service. We may collect Personal Information in respect of the Service through registration processes; communications with you; information downloads; service purchases; user support; and surveys. We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our Service, place an order and in connection with other activities, services, features or resources we make available on our Service. Users may be asked for, as appropriate, name, email address, mailing address, phone number, credit card information.</p>
        <p>"Non-Personal Information" is information of an anonymous nature, such as an Internet Protocol Address (IP Address), the domain used to access the Service, and the type and version of browser or operating system being used by visitors to the Service. Aggregate information, such as demographic statistics of our users (e.g. average age or geographical allocation of our users), number of visitors, what pages users access or visit, and average time spent on the Service. Business contact information such as the name, title, business address, e-mail address, or telephone number of a business or professional person or an employee of an organization is not considered Personal Information. Although the use of certain Non-Personal Information collected, used or disclosed through the Internet as described herein is not restricted (and to the extent that such is the case, the obligations under this Privacy Policy do not apply to such information), we provide information in this Privacy Policy about the collection of such information for the sake of transparency with respect to the operation of the Service. Such Non-Personal Information is collected or derived by us in the course of operating this Service. For example, our web servers may automatically collect Non-Personal Information that is provided through your browser or stored in a cookie when you choose to visit the Service. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Service, such as the operating system and the Internet service providers utilized and other similar information.</p>
        <p>In order to use our Service you must provide certain Personal Information to us such as your full name, address and email address. In general, none of your account registration information will be shared with any other users of the Service or our Service.</p>
        <p>We also provide notifications for certain activities such as user sign up, forgotten password reset, download activity, certain milestones you’ve reached in scanning activity, and payment receipts. Despite your indicated e-mail preferences, we may send you notices of any updates to our or Privacy Policy.</p>
        <p>We also collect statistics about use of the Service. This information will be kept confidential, however, aggregate statistics that do not personally identify an individual will be kept by us and such aggregate statistics may be made available to other members or third parties.</p>
        <p>Cookies are used by us to track content usage and traffic on the Service and to enhance User experience. A cookie is a feature of your web browser that consists of a text file that is placed on your hard disk by a web server. The Service uses cookies to help it compile aggregate statistics about usage of this Service, such as how many users visit the Service, how long users spend viewing the Service, and what pages are viewed most often. This information is used to improve the content of the Service. You can set your browser to notify you when you are sent a cookie. This gives you the chance to decide whether or not to accept it. If you disable cookies, you may not be able to take advantage of all the features of the Service. We do not link any of the information we use in cookies to any personally identifiable information submitted by you when you are on the Service.</p>
        <p>We may collect information about your computer, including where available your IP address, operating system and browser type, for system administration and to report aggregate information to our advertisers. This is statistical data about our users’ browsing actions and patterns, and does not identify any individual.  Your IP address is reported by your web browser whenever you visit a page on the Service. This information is recorded together with your registration information on our databases.</p>
        </div>
        <div className="privacy-subheading">5. Why we Collect this Information and How we Use it</div>
        <div className="privacy-content">
          We collect this information for a variety of purposes: (a) To improve customer service. (b) Your information helps us to more effectively respond to your customer service requests and support needs. (c) To personalize user experience. (d) We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Service. (e) To improve our Service. (f) To process transactions. We may use the information Users provide about themselves when placing an order only to provide service to that order. We do not share this information with outside parties except to the extent necessary to provide the service. (g) To administer a content, promotion, survey or other Service feature. (h) To send Users information they agreed to receive about topics we think will be of interest to them. (i) To ensure that content from our Service is presented in the most effective manner for you and for your computer. (j) To carry out our obligations arising from any contracts entered into between you and us. (k) To allow you to participate in interactive features of our service, when you choose to do so. (l) To notify you about changes to our service. (m) To send periodic emails. The email address Users provide for order processing, will only be used to send them information and updates pertaining to their order and any messaging or relevant inquiries related to a current or potential order. It may also be used to respond to their inquiries, and/or other requests or questions. (n) To send an email newsletter. If a User decides to opt-in to our mailing list, they will receive emails that may include company news, updates, related product or service information, etc. If at any time the User would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email or User may contact us via our Service. (o) We may also use your data, or permit selected third parties to use your data, to provide you with information about goods and services which may be of interest to you and we or they may contact you about these by post or telephone.
          <p>If you are an existing customer, we will only contact you by electronic means (e-mail or SMS) with information about goods and services similar to those which were the subject of a previous sale to you. If you are a new customer, and where we permit selected third parties to use your data, we (or they) will contact you by electronic means only if you have consented to this.</p>
          <p>Users may, however, visit our Service anonymously.</p>
          <p>We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Service related activities.</p>
          <p>If we plan to use your Personal Information in future for any other purposes not identified above, we will only do so after informing you by updating this Privacy Policy. See further the section of this Privacy Policy entitled ‘Amendment of this Policy’.</p>
        </div>
        <div className="privacy-subheading">6. Where we Store and Retain your Data</div>
        <div className="privacy-content">
          The data that we collect from you may be transferred to, and stored at, a destination anywhere in the world. By submitting your personal data, you agree to this transfer, storing or processing. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy.
          <p>We will keep your Personal Information for as long as it remains necessary for the identified purpose or as required by law, which may extend beyond the termination of our relationship with you. We may retain certain data as necessary to prevent fraud or future abuse, or for legitimate business purposes, such as analysis of aggregated, non-personally-identifiable data, account recovery, or if required by law. All retained Personal Information will remain subject to the terms of this Privacy Policy.</p>
          <p>If you request that your name be removed from our databases, it may not be possible to completely delete all your Personal Information due to technological and legal constraints.            
          </p>
        </div>
        <div className="privacy-subheading">
        7. Disclosure of Collected Data
        </div>
        <div className="privacy-content">
        As at the date of this Privacy Policy, we share Personal Information about you in respect of the Service only with Stripe (payment processing) and Amazon AWS (servers). Our servers are also located in the US and accordingly your Personal Information may be available to the US government or its agencies under a lawful order, irrespective of the safeguards we have put in place for the protection of your Personal Information.
        <p>We share Personal Information with Partners only in so far as it is necessary to process an order and deliver the Service to you. Partners include: (a) Software developers. (b) Payment processors. (c) From time to time we may employ third parties to help us improve the Service. These third parties may have limited access to databases of user information solely for the purpose of helping us to improve the Service and/or the Service and they will be subject to contractual restrictions prohibiting them from using the information about our members for any other purpose.</p>
        <p>We may disclose your Personal Information to third parties without your consent if we have reason to believe that disclosing this information is necessary to identify, contact or bring legal action against someone who may be causing injury to or interference with (either intentionally or unintentionally) our rights or property, other Service members, other users of the Service, or anyone else (including the rights or property of anyone else) that could be harmed by such activities. We may disclose Personal Information when we believe in good faith that such disclosure is required by and in accordance with the law.</p>
        <p>We may also disclose your Personal Information in connection with a corporate re-organization, a merger or amalgamation with another entity, a sale of all or a substantial portion of our assets or stock, including any due diligence exercise carried out in relation to the same, provided that the information disclosed continues to be used for the purposes permitted by this Privacy Policy by the entity acquiring the information.  In the event that we sell or buy any business or assets, in which case we may disclose your personal data to the prospective seller or buyer of such business or assets.</p>
        <p>If SPM Analyzer or substantially all of its assets are acquired by a third party, in which case personal data held by it about its customers will be one of the transferred assets.</p>
        <p>If we are under a duty to disclose or share your personal data in order to comply with any legal obligation, or to protect the rights, property, or safety of SPM Analyzer, our customers, or others. This includes exchanging information with other companies and organizations for the purposes of fraud protection and credit risk reduction.</p>
        </div>
        <div className="privacy-subheading">8. Third Party Services and Advertisements</div>
        <div className="privacy-content">
        Advertisements appearing on the Service may be delivered by us or one or more third-party web advertisers. These third party web advertisers may set cookies. These cookies allow the advertisement server operated by that third party to recognize your computer each time they send you an online advertisement. Accordingly, advertisement servers may compile information about where or whether you viewed their advertisements and which advertisements you clicked on. This information allows web advertisers to deliver targeted advertisements that they believe will be of most interest to you.
        <p>We have put in place contractual and other organizational safeguards with our agents (see further below) to ensure a proper level of protection of your Personal Information (see further Security below). In addition to those measures, we will not disclose or transfer your Personal Information to third parties without your permission, except as specified in this Privacy Policy (see further Important Exceptions below).</p>
        <p>Our Service may, from time to time, contain links to and from the services of our partner networks, advertisers and affiliates. We do not control the content or links that appear on these services and are not responsible for the practices employed by services linked to or from our Service. In addition, these services, including their content and links, may be constantly changing. If you follow a link to any of these services, please note that these services have their own privacy policies and that we do not accept any responsibility or liability for these policies. Please check these policies before you submit any personal data to these services. The Privacy Policy applies to cookies placed on your computer by us, but does not cover the use of cookies by any third-party web advertisers. For the privacy practices of such third-party web advertisers, you should consult the applicable privacy policy for the relevant third-party web advertiser(s)</p>
        </div>
        <div className="privacy-subheading">9. Security and how we Protect your Data</div>
        <div className="privacy-content">
        The security of your Personal Information is important to us. We use commercially reasonable efforts to store and maintain your Personal Information in a secure environment. We take technical, contractual, administrative, and physical security steps designed to protect Personal Information that you provide to us. We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your Personal Information, username, password, transaction information and data stored on our Service. We have implemented procedures designed to limit the dissemination of your Personal Information to only such designated staff as are reasonably necessary to carry out the stated purposes we have communicated to you. Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmitted to our Service; any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorized access.
        <p>Where we have given you (or where you have chosen) a password which enables you to access certain parts of our Service, you are responsible for keeping this password confidential. We ask you not to share a password with anyone. You are also responsible for helping to protect the security of your Personal Information. Sensitive and private data exchange between the Service and its Users happens over a Secure Sockets Layer (SSL) secured communication channel and is encrypted and protected with digital signatures.  When you provide credit card or other payment information to us, the Service works to help protect the security of your credit card and other payment information during transmission by using industry standard SSL encryption technology.</p>
        </div>
        <div className="privacy-subheading">
        10. Access and Accuracy
        </div>
        <div className="privacy-content">
        You have the right to access the Personal Information we hold about you in order to verify the Personal Information we have collected in respect to you and to have a general account of our uses of that information. Upon receipt of your written request, we will provide you with a copy of your Personal Information although in certain limited circumstances, we may not be able to make all relevant information available to you such as where that information also pertains to another user. In such circumstances we will provide reasons for the denial to you upon request. We will endeavor to deal with all requests for access and modifications in a timely manner.
        <p>We will make every reasonable effort to keep your Personal Information accurate and up-to-date, and we will provide you with mechanisms to update, correct, delete or add to your Personal Information as appropriate. As appropriate, this amended Personal Information will be transmitted to those parties to which we are permitted to disclose your information. Having accurate Personal Information about you enables us to give you the best possible service.</p>
        </div>
        <div className="privacy-subheading">
        11. Amendment to this Privacy Policy
        </div>
        <div className="privacy-content">
        We reserve the right to change this Privacy Policy at any time. Any changes we may make to our privacy policy in the future will be posted on this page and, where appropriate, notified to you by e-mail. Any non-material change (such as clarifications) to this Privacy Policy will become effective on the date the change is posted and any material changes will become effective 30 days from their posting on the Service. Unless stated otherwise, our current Privacy Policy applies to all Personal Information that we have about you. The date on which the latest update was made is indicated at the bottom of this document. We recommend that you print a copy of this Privacy Policy for your reference and revisit this policy from time to time to ensure you are aware of any changes. Your continued use of the Service signifies your acceptance of any changes. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
        </div>
        <div className="privacy-subheading">
        12. Contact Us
        </div>
        <div className="privacy-content">
        You can help by keeping us informed of any changes such as a change of address or telephone number. If you would like to access your information, if you have any questions, comments or suggestions of if you find any errors in our information about you, please contact us at: info@spmanalyzer.com
        </div>
      </div>
      <Contact />
      <Copyright />
    </div>
  )
}

export default Privacy