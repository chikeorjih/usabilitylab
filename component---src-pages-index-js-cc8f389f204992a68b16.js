webpackJsonp([35783957827783],{142:function(e,t,a){e.exports=a.p+"static/man.c242828d.png"},535:function(e,t,a){e.exports=a.p+"static/teacher.5fedc8ea.png"},154:function(e,t,a){e.exports=a.p+"static/woman.7a80d554.png"},228:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=a(2),s=n(i),c=a(7),d=n(c),u=function(e){function t(a){l(this,t);var n=r(this,e.call(this));n.handleToggle=function(){var e=!n.state.isExpanded;n.setState({isExpanded:e})};var o="",i="";return a.children.forEach(function(e){"h3"===e.type?o=e.props.children:"div"===e.type&&(i=e.props.children)}),n.state={title:o,content:i,isExpanded:!1},n}return o(t,e),t.prototype.render=function(){var e=this.state.isExpanded?"expanded":"collapsed",t=this.state.isExpanded?"Got it!":"Explain";return s.default.createElement("div",{className:"expandable "+e},s.default.createElement("div",{className:"expandable-initial"},s.default.createElement("div",{className:"number"},s.default.createElement("span",null,this.props.number)),s.default.createElement("p",{className:"title"},this.state.title),s.default.createElement("button",{onClick:this.handleToggle},t)),s.default.createElement("div",{className:"expandable-content "+e},this.state.content))},t}(s.default.Component);u.propTypes={number:d.default.string},t.default=u,e.exports=t.default},234:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),r=n(l),o=a(54),i=n(o),s=a(228),c=n(s),d=a(154),u=n(d),m=a(142),h=n(m),f=a(535);n(f);t.default=function(){return r.default.createElement("div",null,r.default.createElement("div",{className:"hero-extend"}),r.default.createElement("div",{className:"objective"},r.default.createElement("h1",null,"Research ",r.default.createElement("span",{className:"highlight"},"Objective")),r.default.createElement("p",null,"The HCP.com team (business, design, and development) wants to improve the usability and the end-to-end customer (consumer) experience with the HCP.com site. In late April 2018, we observed and studied how health insurance customers in Hawaii use HCP’s consumer-facing site (pre-login experience) today, compared to how they complete similar tasks in Kaiser Permanente site for Hawaii (kpinhawaii.com).")),r.default.createElement("h2",null,"Demographics"),r.default.createElement(i.default,{config:{trim:150}},r.default.createElement("p",null,"We conducted task-based, moderated sessions with 12 consumers from Honolulu. Each session was 1-on-1 and lasted a little over an hour (60+ minutes)."),r.default.createElement("table",null,r.default.createElement("thead",null,r.default.createElement("tr",null,r.default.createElement("th",null,"Age Group"),r.default.createElement("th",null,"Breakdown"),r.default.createElement("th",null,"Total"))),r.default.createElement("tbody",null,r.default.createElement("tr",null,r.default.createElement("td",null,"Mellennials ",r.default.createElement("span",{className:"subtext"},"(21-36 years)")),r.default.createElement("td",{className:"people"},r.default.createElement("img",{src:u.default,alt:"male"}),r.default.createElement("img",{src:h.default,alt:"male"}),r.default.createElement("img",{src:h.default,alt:"male"})),r.default.createElement("td",{className:"count"},"3")),r.default.createElement("tr",null,r.default.createElement("td",null,"Gen X ",r.default.createElement("span",{className:"subtext"},"(37-57 years)")),r.default.createElement("td",{className:"people"},r.default.createElement("img",{src:u.default,alt:"male"}),r.default.createElement("img",{src:u.default,alt:"male"})),r.default.createElement("td",{className:"count"},"2")),r.default.createElement("tr",null,r.default.createElement("td",null,"Baby Boomers ",r.default.createElement("span",{className:"subtext"},"(65-75 years)")),r.default.createElement("td",{className:"people"},r.default.createElement("img",{src:u.default,alt:"male"}),r.default.createElement("img",{src:u.default,alt:"male"}),r.default.createElement("img",{src:u.default,alt:"male"}),r.default.createElement("img",{src:h.default,alt:"male"}),r.default.createElement("img",{src:h.default,alt:"male"}),r.default.createElement("img",{src:h.default,alt:"male"})),r.default.createElement("td",{className:"count"},"6")),r.default.createElement("tr",null,r.default.createElement("td",null,"Silent Generation ",r.default.createElement("span",{className:"subtext"},"(76+ years)")),r.default.createElement("td",{className:"people"},r.default.createElement("img",{src:u.default,alt:"male"})),r.default.createElement("td",{className:"count"},"1")),r.default.createElement("tr",null,r.default.createElement("td",null,"Totals  ",r.default.createElement("span",{className:"subtext"},"(24-80 years)")),r.default.createElement("td",{className:"people"},r.default.createElement("img",{src:u.default,alt:"male"}),r.default.createElement("img",{src:u.default,alt:"male"}),r.default.createElement("img",{src:u.default,alt:"male"}),r.default.createElement("img",{src:u.default,alt:"male"}),r.default.createElement("img",{src:u.default,alt:"male"}),r.default.createElement("img",{src:u.default,alt:"male"}),r.default.createElement("img",{src:u.default,alt:"male"}),r.default.createElement("img",{src:h.default,alt:"male"}),r.default.createElement("img",{src:h.default,alt:"male"}),r.default.createElement("img",{src:h.default,alt:"male"}),r.default.createElement("img",{src:h.default,alt:"male"}),r.default.createElement("img",{src:h.default,alt:"male"}),r.default.createElement("img",{src:h.default,alt:"male"})),r.default.createElement("td",{className:"count"},"12")))),r.default.createElement("ul",null,r.default.createElement("li",null,"Five of the 12 participants had health insurance that they had purchased themselves; the rest had employee-sponsored insurance, from their own employer or as a dependent of their spouse or parent."),r.default.createElement("li",null,"Half of the participants each day had HCP health insurance, 2 each day had Kaiser Permanente."),r.default.createElement("li",null,"One participant each day had health insurance benefits from either a national competitor (Humana Medicare supplemental) or a non-traditional cost sharing insurer (Liberty HealthShare).")),r.default.createElement("p",null,"In the next section, we will give an overview of the top usability challenges and opportunities we identified for HCP.com. This top-line report is an initial view into the problems and challenges that were trends across participants. It will be followed with a details report of findings and recommendations.")),r.default.createElement("h2",{className:"insights"},"Insights"),r.default.createElement("div",{className:"expandable-wrapper"},r.default.createElement(c.default,{number:"1"},r.default.createElement("h3",null,"Consumers expect to easily choose the right coverage and control the monthly premium they pay (aka“the price”)"),r.default.createElement("div",{className:"expandable-content"},r.default.createElement("p",null,"The majority of the participants were overwhelmed by the number of plans and options from both HCP.com and kpinhawaii.com. They left both sites without applying, opting instead to call someone in customer service, or solicit recommendations from friends or family."),r.default.createElement("ul",null,r.default.createElement("li",null,"Choosing the right plan needs to be effortless, easy, while also reducing the risk of huge medical costs if accident or illness occurs;"),r.default.createElement("li",null,"To that end, with each lesser expensive option, tell them what they are getting, and what they have given up;"),r.default.createElement("li",null,"These consumers do not want to pay for unnecessary and expensive coverage; and"),r.default.createElement("li",null,"Often, the proximity of good quality health care providers (doctors, clinics, hospitals) to their home and work will affect what plan they choose (HCP vs. Kaiser Permanente).")),r.default.createElement("p",null,"Ultimately, consumers want the site to empower them to get to the right plan for them faster than they can get there by calling customer service, visiting a neighborhood center, or asking friends/family for recommendations. They want the site to filter their options to the one with the right amount of coverage and lower monthly costs:"))),r.default.createElement(c.default,{number:"2"},r.default.createElement("h3",null,"HCP.com pages and content need to empower consumers to focus and scan"),r.default.createElement("div",{className:"expandable-content"},r.default.createElement("p",null,"Whatever the goal is on a given page (for example, finding a health care provider), the consumer should be able to immediately recognize it and be confident about what to do next to achieve their goal. Sometimes the consumer’s initial goal is not looking at a plan benefit. Instead, they may want to see if there are physicians or clinics a convenient distance from their home, or a wellness program."),r.default.createElement("p",null,"To that end, the content, layout, and call-to-action on every HCP.com page needs to simple, obvious, and direct. That way, the consumer’s first click or interaction with the site will be the right interaction (path) to get them to application/enrollment, or find a healthcare provider, or get information. Site imagery, icons, and multimedia should meet, or exceed, their expectations of simplicity, clarity, and brevity."))),r.default.createElement(c.default,{number:"3"},r.default.createElement("h3",null,"Somebody should always be online to help me"),r.default.createElement("div",{className:"expandable-content"},r.default.createElement("p",null,"Many of the participants abandoned HCP.com and kpinhawaii.com to call a customer service number they found while evaluating health insurance plans. We did not test the telephone support experience, but there is a risk the consumer will delay calling, forget to call, or give up if they have to wait a long time to talk to someone."),r.default.createElement("p",null,"One participant on day 1 used Kaiser Permanente’s live chat feature, though was dismayed by the long delay. Had she not been in the lab, it is likely she would have left kpinhawaii.com – and the chat she started – before she ever received the initial reply."),r.default.createElement("p",null,"Live chat, or instant calling (on smartphones) – as well as timely responses are key to providing winning customer support."))),r.default.createElement(c.default,{number:"4"},r.default.createElement("h3",null,"Allow consumers to compare HCP plans to other insurers (Kaiser Permanente, etc.)"),r.default.createElement("div",{className:"expandable-content"},r.default.createElement("p",null,"Several participants visited sites for 2-3 health insurance providers. They want to not only see the different plans each insurer offers in Hawaii as well as compare them to other insurers."),r.default.createElement("p",null,"One woman (mistakenly) believed the Kaiser Permanente plan comparison page would show her their competitors plans if she selected the option to see “Market place plans offered through healthcare.gov” (see Figure 1 below)."),r.default.createElement("p",null,"While this was, in fact, untrue, she stated her trust in Kaiser Permanente grew because she thought they were showing how they compared to their competition."),r.default.createElement("p",null,"A few of the 65+ participants on day 2 stated the ability to compare across all health insurers as one idea to make the HCP.com path-to-application/enrollment better (easier, faster, and more empowering)."),r.default.createElement("p",null,"Those consumers who suggested this as an improvement stated that a company who is secure it the quality and value of their products would benefit from showing how they stacked up against their competitors."))),r.default.createElement(c.default,{number:"5"},r.default.createElement("h3",null,"Simplify language and terminology"),r.default.createElement("div",{className:"expandable-content"},r.default.createElement("p",null,"All consumers struggled to explain the benefits and options included with any health insurance plans on either HCP.com or kpinhawaii.com. The language of health insurance was hard to understand and was too often interpreted incorrectly."),r.default.createElement("p",null,"Example: Several consumer participants wrongly interpreted “maximum out-of-pocket” as the maximum amount that HCP or Kaiser Permanente would pay out for their healthcare costs in a single year. This caused them to think no plan had enough coverage."),r.default.createElement("p",null,"Making the language of health insurance plain-spoken English is an immense opportunity to differentiate HCP.com and their path-to-application/enrollment from Kaiser Permanente."),r.default.createElement("p",null,"In addition, the consumer participants we studied were overwhelmed with the information in the HCP summary of benefits PDF. Most clicked the link to that from the Compare Plans page but quickly left that PDF as it would take too much time to read and digest."),r.default.createElement("p",null,"Make the complex simple."))),r.default.createElement(c.default,{number:"6"},r.default.createElement("h3",null,"Consumers started their search for health insurance looking for their doctor – or a specialist they needed"),r.default.createElement("div",{className:"expandable-content"},r.default.createElement("p",null,"One of the key differences between HCP and Kaiser Permanente that consumers mentioned was the “limited” choice of physicians with latter. We observed a few participants go to the HCP.com Find a Doctor search (from the header of any page)."),r.default.createElement("p",null,"Spotlighting providers who practice near the site visitor’s home (or work), based on the location of their computer or device, and providing key information (photo, specialty, office hours) may prove an effective way to acquire new members/customers. Making it easier to search for a provider as a step in selecting and purchasing a health care plan will create a more fluid experience for the new or returning customer."),r.default.createElement("p",null,"It is important to highlight and prioritize those physicians who are accepting new patients – as well as to allow visibility into when a busy, popular doctor becomes available (think of the “wish list” feature on a lot of eCommerce sites)."))),r.default.createElement(c.default,{number:"7"},r.default.createElement("h3",null,"Web page controls and calls-to-action need to be clear and unambiguous."),r.default.createElement("div",{className:"expandable-content"},r.default.createElement("p",null,"Both HCP.com and kpinhawaii.com presented consumer participants with Web page content that either did not work as expected or were not controls/buttons at all ."),r.default.createElement("p",null,"On HCP.com, the “Freedom to Choose” lightbox dialog showed a map of health care providers and locations in the HCP network by default. The three tiles – Freedom to choose, Convenient care, and Travel worry free – were misunderstood by every participant who landed on this dialog."),r.default.createElement("p",null,"First, the participant would click the “Freedom to choose” tile and there was no obvious change to the map (lack of feedback). Some participants clicked these 2 or 3 times, with the goal of searching for – and then choosing (as the title indicates) – a healthcare provider."),r.default.createElement("p",null,"When that did not work, the participants double-clicked on the map expecting it to zoom in as Google maps works today . This made the content in the dialog difficult, if not impossible, to use."))),r.default.createElement(c.default,{number:"8"},r.default.createElement("h3",null,"Consumers want to trust that the information they share on HCP.com or kpinhawaii.com is secure and they are safe from identity theft"),r.default.createElement("div",{className:"expandable-content"},r.default.createElement("p",null,"Many consumers were reticent to enter personal data just to see the different insurance plans. When a site required them to enter their income, age, birthdate, or gender, they asked why this information was needed. Most did not immediately recognize that monthly premium rates – and even some plans – have age and income requirements. "),r.default.createElement("p",null,"This may be explained by those who have always had employer-sponsored insurance. For those who are currently self-insured (both under and over 65 years), this is a once yearly task, so remembering how age affects premiums may be forgotten over time."),r.default.createElement("p",null,"One recommendation was to allow consumers to see plans and prices, and then ask for information. It may help to make the reason why specific information is requested and what the user will gain by giving HCP that information. Will it shorten the application/enrollment and approval processes?"))),r.default.createElement(c.default,{number:"9"},r.default.createElement("h3",null,"If confused, consumers will just stick with what they know"),r.default.createElement("div",{className:"expandable-content"},r.default.createElement("p",null,"On the organic path-to-application/enrollment, several participants would click on Google search results, or search for, their current health insurance provider. "),r.default.createElement("p",null,"Making HCP.com content plain-spoken, easy to scan, and getting the user on the right path will empower consumers to make decisions they are confident are right for themselves and their households."))),r.default.createElement(c.default,{number:"10"},r.default.createElement("h3",null,"Consumers ask for advice, recommendations from others"),r.default.createElement("div",{className:"expandable-content"},r.default.createElement("p",null,"If the path to evaluating and comparing plans is too cumbersome and time-consuming, they will turn to recommendations from family, friends, colleagues, and even acquaintances. In the end, they have not found the information and knowledge to confidently make their own decision."),r.default.createElement("p",null,"Consumers are influenced by the products and services they see their friends and neighbors use. While they don’t actually watch them “use” their health insurance, they hear about their experiences with doctors, office visits, and hospitalizations. When family, friends, or colleagues complain about a doctor’s “bedside manner” or big hospital bills, consumers remember and try to avoid the same experience.")))))},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-cc8f389f204992a68b16.js.map