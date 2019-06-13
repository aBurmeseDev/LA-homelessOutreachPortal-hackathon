import React, { Component } from "react";
import M from "materialize-css";

class About extends Component {

    componentDidMount() {
        document.addEventListener("DOMContentLoaded", function() {
            const elem1 = document.querySelectorAll(".collapsible.expandable");
            const instance = M.Collapsible.init(elem1, {
                accordion: false
            });
        })
    }
    render() {
        return (
            <div className="container">
                <ul class="collapsible expandable">
                    <li>
                        <div className="collapsible-header">When should I fill out an outreach request?</div>
                        <div className="collapsible-body"><span>Did you see someone experiencing homelessness who needs help? Notice a homeless neighbor who seems to be struggling with their physical and/or mental health? Then you can help them by filling out an outreach request and alert us as to any specific concerns you may have regarding the person’s well-being. As outreach capacity is limited, requests for those with more serious medical and/or mental health needs may be prioritized.</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header">When should I not fill out an outreach request?</div>
                        <div className="collapsible-body"><span>If you come across a family with minor children experiencing homelessness, have them call 211 and ask to be connected to the Coordinated Entry System for Families. If you are concerned about illegal activity, contact your local law enforcement agency. For medical and mental health emergencies, call 911. Unfortunately, outreach teams are not able to serve individuals who are couch surfing, temporarily living with friends or family, at risk of homelessness, or already staying in a homeless shelter.</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header">What do outreach workers do?</div>
                        <div className="collapsible-body"><span>Outreach workers have many different skills including homeless services navigation, mental health first aid, motivational interviewing, and trauma informed care, among others. Some teams even have physical health, mental health and substance use professionals. Outreach teams start by building a trusting relationship with and determining the needs of people living on the streets. Their efforts can be as simple as helping someone experiencing homelessness get an ID card or as complex as helping to meet medical and mental health needs. But the ultimate goal of outreach services? To help people who are homeless move from the streets into a permanent home.</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header">How long does it take to help someone?</div>
                        <div className="collapsible-body"><span>Some people may require significant time to build trust. Others may be more readily open to help. Regardless, everything we do is in partnership with those we serve, and is done in a way that fosters dignity and self-determination. Until there’s more shelter and affordable permanent housing, the process to get people indoors is slower than we would like. But through the investments of capital development funding via Proposition HHH, No Place Like Home, and Measure H, there will be an increase in shelter beds and permanent housing over time. The commitment of our outreach teams, combined with expanded housing opportunities, will make a huge difference.</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header">What do you mean by "Homeless"?</div>
                        <div className="collapsible-body"><span>While there are different types of homelessness, street-based outreach teams serve those who the U.S. Department of Housing and Urban Development considers "literally homeless." This is defined as, "an individual that has a primary nighttime residence that is a public or private place not meant for human habitation."</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header">When do outreach workers work?</div>
                        <div className="collapsible-body"><span>They usually work during daylight hours due to safety and because this allows outreach workers to connect individuals that are homeless to resources and other critical services like health and mental health services, job training programs, and those offered by the Department of Motor Vehicles and Department of Public Social Services.</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header">How long does it take a team to respond?</div>
                        <div className="collapsible-body"><span>Due to high demand, it may take a few days for an outreach team to be deployed and we may need to prioritize those individuals who are most vulnerable. With nearly 40,000 people living on the streets of LA County, the need for outreach services is great.</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header">Can I get an update on what happened?</div>
                        <div className="collapsible-body"><span>If you provide your email address, we will let you know we received your request and when it was fulfilled. We are required by law to protect the privacy of those we serve…therefore we are unable to share updates (unless the client allows us to). However, if you agree to be contacted, we may reach out to you to ask additional questions that will help us locate and connect with the person referred.</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header">How else can I help my homeless neighbors?</div>
                        <div className="collapsible-body"><span>Volunteering and donating to organizations serving people experiencing homelessness is a great way to help the cause. Please go to TheyCountWillYou.org, Volunteer Opportunities, Everyone In, VolunteerLA, or contact your local homeless organization for further information on volunteering and/or donating towards ending homelessness.</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header">What is measure H and proposition HHH?</div>
                        <div className="collapsible-body"><span>Measure H is a County of Los Angeles special sales tax increase passed by the voters in 2017 that specifically funds services, shelter, and permanent rental subsidies for people experiencing homelessness. Proposition HHH is a City of Los Angeles bond passed by the voters in 2016 that directly funds the building of new affordable permanent housing for people experiencing homelessness.</span></div>
                    </li>
                </ul>
            </div>
        )
    }
}


export default About;
