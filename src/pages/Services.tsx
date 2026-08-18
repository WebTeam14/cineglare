import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import aboutImage from "@/assets/about-image.jpg";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Services Sections */}
      {/* Event Management */}
      <section className="py-20 px-6 mt-5" style={{ background: 'var(--service-bg)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-4xl font-bold text-white-900">Event Management</h2>
                <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 whitespace-nowrap">
                  Turning Moments into Milestone
                </Button>
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed">
                From Red Carpets to Corporate Stages, we create moments blending strategic planning, innovative design and flawless execution to transform vision into reality
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-white-800">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Corporate Events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Brand & Promotional Events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Entertainment Events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Social & Cultural Events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Builders' Expo / Roadshow</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-white-800">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Wedding & Private Events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Exhibitions & Trade Fairs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Sports Events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Charity & Fundraising Events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Virtual & Hybrid Events</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-80 flex justify-center items-center mt-10">
              <div className="w-64 h-64 bg-gray-300/50 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <img
                src={aboutImage}
                alt="Cineglare team celebrating"
                className="w-full h-auto object-cover"
              />
                {/* <div className="text-6xl text-white-400">👤</div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Film & AD Production */}
      <section className="py-20 px-6" style={{ background: 'var(--service-bg)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-4xl font-bold text-white-900">Film & AD Production</h2>
                <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 whitespace-nowrap">
                  Turning Concepts into Cinematic Reality
                </Button>
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed">
                From concept to screen, we handle every stage - combining cinematic excellence with marketing insight, that inspire, influence and build brand emotion.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-white-800">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Concept & Script Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Casting & Talent Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Location Scouting & Set Design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Pre-Production Planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Filming & Direction</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-white-800">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Post-Production Excellence.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Music, Voiceover & Sound Design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Brand Films & TV Commercials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Digital & Social Media Ads</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Behind-the-Scenes & Promo Shoots</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-80 flex justify-center items-center mt-10">
              <div className="w-64 h-64 bg-gray-300/50 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <img
                src={aboutImage}
                alt="Cineglare team celebrating"
                className="w-full h-auto object-cover"
              />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing */}
      <section className="py-20 px-6" style={{ background: 'var(--service-bg)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-4xl font-bold text-white-900">Digital Marketing</h2>
                <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 whitespace-nowrap">
                  Digital Brilliance with a Global Pulse
                </Button>
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed">
                From creative storytelling to data driven strategies, we focus on brand identity, driving visibility, blending innovation and insight to make every click count.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-white-800">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>SEO – brand rise above the noise</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Social Media Marketing – Storytelling in Motion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Content Marketing – Crafted to Connect.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Email Marketing – Personalised campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>PPC Campaigns</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-white-800">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Influencer Marketing – Star Power Amplified</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Affiliate Marketing – Performance That Grows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Mobile Marketing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Video Marketing – Visual Stories That Sell</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Online PR – Reputation in the Spotlight.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-80 flex justify-center items-center mt-10">
              <div className="w-64 h-64 bg-gray-300/50 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <img
                src={aboutImage}
                alt="Cineglare team celebrating"
                className="w-full h-auto object-cover"
              />
                {/* <div className="text-6xl text-gray-400">👤</div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Celebrity Management */}
      <section className="py-20 px-6" style={{ background: 'var(--service-bg)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-4xl font-bold text-white-900">Celebrity Management</h2>
                <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 whitespace-nowrap">
                  "Where Star Power Meets Strategy"
                </Button>
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed">
                We strategically position talent across media platforms, endorsements, events and campaigns - aligning perfectly with a brand's vision and audiences.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-white-800">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Celebrity Endorsements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Brand Collaborations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Event Appearances</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Film & Ad Casting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Digital & Social Media Management</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-white-800">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>PR & Media Relations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Talent Scheduling & Logistics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Personal Branding & Image Consulting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Crisis & Reputation Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Global Representation</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-80 flex justify-center items-center mt-10">
              <div className="w-64 h-64 bg-gray-300/50 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <img
                src={aboutImage}
                alt="Cineglare team celebrating"
                className="w-full h-auto object-cover"
              />
                {/* <div className="text-6xl text-gray-400">👤</div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Branding */}
      <section className="py-20 px-6" style={{ background: 'var(--service-bg)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-4xl font-bold text-white-900">Product Branding</h2>
                <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 whitespace-nowrap">
                  We don't just name brands - we create legacies
                </Button>
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed">
                We specialize in building brands that inspire trust, sparks emotions and drive engagement through innovative product branding to give your product a distinctive voice and lasting impact.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-primary mb-3 text-lg">Brand Strategy and designing</h3>
                  <ul className="space-y-3 text-white-800">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Brand Naming & Tagline</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Brand Strategy & Competitive Positioning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Brand Story & Messaging Guideline</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Logo Design & Visual Identity System</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Packaging Design & Retail Presentation</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-3 text-lg">Brand Marketing</h3>
                  <ul className="space-y-3 text-white-800">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Digital Branding (Website/Social/E-Com)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Marketing Campaign Concept</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>AD Production – TV, Radio and Print</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Product Launch Promotion & Media Integration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Influencer & Celebrity Collaboration Planning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:w-80 flex justify-center items-center mt-10">
              <div className="w-64 h-64 bg-gray-300/50 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <img
                src={aboutImage}
                alt="Cineglare team celebrating"
                className="w-full h-auto object-cover"
              />
                {/* <div className="text-6xl text-gray-400">👤</div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
