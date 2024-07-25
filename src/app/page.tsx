import Hero from '@/components/Hero/Hero';
import About from '@/components/AboutUs/About';
import Cause from '@/components/Cause/Cause';
import Donation from '@/components/Donation/Donation';
import Event from '@/components/EventPage/Event';
import Testimonials from '@/components/Testimonials/Testimonials';
import CTA from '@/components/CTA/CTA';
import Newsletter from '@/components/Newsletter/Newsletter';
import Footer from '@/components/Footer/Footer';
export default function Home() {
    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Hero />
            <About />
            <Cause />
            <Donation />
            <Event />
            <Testimonials />
            <CTA />
            <Newsletter />
            <Footer />
        </div>
    );
}
