import Navigation from "../components/navigation";
import Hero from "../components/hero";
import Intro from "../components/intro";
import Templates from "../components/templates";
import MailingList from "../components/mailing-list";
import CallToAction from "../components/call-to-action";
import Footer from "../components/footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Intro />
        <Templates />
        <MailingList />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}