import "./App.scss";
import React, {Component} from "react"

import { 
	Navigation,
	NavigationItem,
	NavigationSpacer,
	NavigationSection,
	NavigationLogo,
	NavigationButton,
	NavigationSectionTitle,
} from "../components/Navigation"

import { MainContent } from "../components/MainContent"
import { Footer } from "../components/Footer"

import { PageRouter } from "../router"

import { BEM } from "../util/BEM"

import { ScrollBox } from "../components/ScrollBox.component"

import { PageLink as EducationPageLink } from "../pages/EducationPage"
import { PageLink as IvesterPageLink } from "../pages/IvesterFoundationPage"
import { PageLink as CottrellPageLink } from "../pages/CottrellDigitalStudioPage"

const GLOBAL_BLOCK = "app-root"

export class App extends Component{
	constructor(props){
		super(props)
		this.scrollBox = React.createRef()
	}
	componentDidCatch(error, info){
		console.error('---')
		console.error(`ERROR:`, error)
		console.error(info)
		console.error('---')
	}
	render(){
		return (
			<BEM block={GLOBAL_BLOCK}>
				<Navigation type="top">
					<NavigationLogo linkTo="/">
						The Northeast Georgia <br/> History Center
					</NavigationLogo>
					<NavigationSection>
						<NavigationSpacer/>
						<NavigationItem linkTo="/visit">Visit</NavigationItem>
						<NavigationItem elm={EducationPageLink}>Education</NavigationItem>
						<NavigationItem linkTo="/about-us">About Us</NavigationItem>
						<NavigationButton linkTo="/donate">Donate Today!</NavigationButton>
					</NavigationSection>
				</Navigation>
				<ScrollBox>
					<MainContent>
						<PageRouter/>
					</MainContent>
					<Navigation type="bottom">
						<NavigationSection>
							<NavigationSectionTitle>The Museum</NavigationSectionTitle>
							<NavigationItem linkTo="/visit">Visiting The Museum</NavigationItem>
							<NavigationItem linkTo="/events">Upcoming Events</NavigationItem>
							<NavigationItem linkTo="/discover">Exhibits & Program</NavigationItem>
							<NavigationItem linkTo="/shop">Museum Shop</NavigationItem>
						</NavigationSection>
						<NavigationSection>
							<NavigationSectionTitle>Education</NavigationSectionTitle>
							<NavigationItem elm={EducationPageLink}>Educational Programs</NavigationItem>
							<NavigationItem elm={IvesterPageLink}>The Ivester Education Center</NavigationItem>
							<NavigationItem elm={CottrellPageLink}>The Cottrell Digital Studio</NavigationItem>
						</NavigationSection>
						<NavigationSection>
							<NavigationSectionTitle>Giving</NavigationSectionTitle>
							<NavigationItem linkTo="/membership">Become a Member</NavigationItem>
							<NavigationItem linkTo="/donate">Make a Donation</NavigationItem>
							<NavigationItem linkTo="/volunteering">Voulenteering</NavigationItem>
						</NavigationSection>
						<NavigationSection>
							<NavigationSectionTitle>About Us</NavigationSectionTitle>
							<NavigationItem linkTo="/mission">Our Mission</NavigationItem>
							<NavigationItem linkTo="/our-team">Our Team</NavigationItem>
							<NavigationItem linkTo="/board-of-directors">Board of Directors</NavigationItem>
						</NavigationSection>
					</Navigation>
					<Footer>
						<div>Northeast Georgia History Center at Brenau University</div>
					</Footer>
				</ScrollBox>
			</BEM>
		)
	}
}