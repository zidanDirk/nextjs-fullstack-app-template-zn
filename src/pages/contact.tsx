import PageTransition from '../components/layouts/pageTransition/PageTransition';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from './page';

const Contact: NextPageWithLayout = () => {
  return (
    <section>
      <h2>Layout Example (Contact)</h2>
      <div> Contact superZidan by wechat </div>
      <div> wechat id: superZidan41 </div>
    </section>
  );
};

export default Contact;

Contact.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      <PageTransition>
        {page}
      </PageTransition>
    </PrimaryLayout>
  );
};