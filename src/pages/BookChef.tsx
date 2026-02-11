import Hero from '../components/Hero';
import BookingCalendar from '../components/BookingCalendar';
import ConsultationForm from '../components/ConsultationForm';
import ServiceTiers from '../components/ServiceTiers';

const BookChef = () => {
  return (
    <>
      <Hero />
      <main className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <BookingCalendar />
          <ConsultationForm />
        </div>
      </main>
      <ServiceTiers />
    </>
  );
};

export default BookChef;
