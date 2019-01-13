import React from "react";

import SEO from "../components/seo";
import "./index.css";

import gatsby from "../images/gatsby-icon.png";
import zahra from "../images/zahra.jpg";
import sy from "../images/sy.jpg";

const About = () => (
  <section class="about">
    <h2 className="about__title">meet the makers</h2>
    <div class="wrapper about__wrapper">
      <Profile
        job="Designer"
        image={sy}
        description="Syeef is a product designer at Cloudflare. Previously, he designed mobile apps for WorldRemit and Capital One, specialising in UX design."
        socials= {[
          {site: 'Twitter', url: 'https://twitter.com/syeef', image: gatsby},
          {site: 'LinkedIn', url: 'https://linkedin.com/', image: gatsby},
          {site: 'GitHub', url: 'https://twitter.com/', image: gatsby},
          {site: 'Dribbble', url: 'https://dribbble.com/', image: gatsby},
          {site: 'Website', url: 'https://zahratraboulsi.com!/', image: gatsby},
        ]}
      />
      <Profile
        job="Developer"
        image={zahra}
        description="Zahra is a Front-End engineer at GemFair, a De Beers Group startup. Previously, she worked as an iOS and API developer at Bloomberg."
        socials= {[
          {site: 'Twitter', url: 'https://twitter.com/', image: gatsby},
          {site: 'LinkedIn', url: 'https://linkedin.com/', image: gatsby},
          {site: 'GitHub', url: 'https://github.com/', image: gatsby},
          {site: 'Website', url: 'https://zahratraboulsi.com/', image: gatsby},
        ]}
      />
    </div>
  </section>
);

const Profile = ({ job, image, description, socials }) => (
  <div className="about__profile wrapper">
    <p className="about__job">{job}</p>
    <div class="wrapper wrapper--column">
      <div className="about__image">
        <img src={image} alt="" />
      </div>
      <p className="about__description">{description}</p>
     <SocialIcons socials={socials} />
    </div>
  </div>
);

const SocialIcons = ({socials}) => (
  <div class="about__icons wrapper">
    {socials.map(social => <a href={social.url}><img className="about__icon" src={social.image} alt={social.site} /></a>)}
  </div>
)

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <About />
  </>
);

export default IndexPage;
