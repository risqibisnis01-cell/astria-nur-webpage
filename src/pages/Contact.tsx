import { useEffect, useMemo, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { Button } from '../components/ui/Button';
import { SelectInput, TextArea, TextInput } from '../components/ui/Input';
import { SectionHeading } from '../components/ui/SectionHeading';
import { siteConfig } from '../data/site';
import { localBusinessSchema } from '../utils/seo';

type ContactFormValues = {
  name: string;
  company?: string;
  email: string;
  phone: string;
  subject: 'Property Inquiry' | 'Trade Inquiry' | 'General';
  message: string;
};

const schema: yup.ObjectSchema<ContactFormValues> = yup.object({
  name: yup.string().trim().required('Name is required.').max(80, 'Name must be 80 characters or fewer.'),
  company: yup.string().trim().max(100, 'Company must be 100 characters or fewer.').optional(),
  email: yup.string().trim().email('Enter a valid email address.').required('Email is required.'),
  phone: yup.string().trim().required('Phone is required.').max(30, 'Phone must be 30 characters or fewer.'),
  subject: yup
    .mixed<ContactFormValues['subject']>()
    .oneOf(['Property Inquiry', 'Trade Inquiry', 'General'])
    .required('Subject is required.'),
  message: yup.string().trim().required('Message is required.').min(20, 'Message must be at least 20 characters.').max(1000, 'Message must be 1000 characters or fewer.'),
});

function getQueryDefaults(): Pick<ContactFormValues, 'subject' | 'message'> {
  const params = new URLSearchParams(window.location.search);
  const subject = params.get('subject');
  const message = params.get('message');
  const allowedSubjects = ['Property Inquiry', 'Trade Inquiry', 'General'];

  return {
    subject: allowedSubjects.includes(subject ?? '') ? (subject as ContactFormValues['subject']) : 'General',
    message: message ?? '',
  };
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const queryDefaults = useMemo(() => getQueryDefaults(), []);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm<ContactFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      subject: queryDefaults.subject,
      message: queryDefaults.message,
    },
  });
  const messageLength = watch('message')?.length ?? 0;

  useEffect(() => {
    if (submitted) {
      const timer = window.setTimeout(() => setSubmitted(false), 6000);
      return () => window.clearTimeout(timer);
    }
  }, [submitted]);

  const onSubmit = async (values: ContactFormValues) => {
    await new Promise((resolve) => window.setTimeout(resolve, 450));
    setSubmitted(true);
    reset({ name: '', company: '', email: '', phone: '', subject: values.subject, message: '' });
  };

  return (
    <>
      <SEOHead
        title="Contact"
        description="Contact PT Astria Nuriman Saputra for property inquiries, trade inquiries, general questions, office information, and business hours."
        path="/contact"
        jsonLd={localBusinessSchema}
      />
      <section className="page-hero" aria-labelledby="contact-title">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 id="contact-title">Route your inquiry to the right Astria desk</h1>
          </div>
          <p>
            Send a property, trade, or general corporate inquiry. This Phase 1 form validates information and shows a
            demo success state without backend submission.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container contact-layout">
          <div>
            <SectionHeading
              eyebrow="Inquiry form"
              title="Tell us what you need"
              description="Fields marked as required must be completed before the demo submit can continue."
            />
            {submitted ? (
              <div className="success-message" role="status">
                Thank you. Your inquiry has been validated and captured in the demo flow.
              </div>
            ) : null}
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
              <TextInput label="Name" placeholder="Your full name" autoComplete="name" error={errors.name?.message} {...register('name')} />
              <TextInput label="Company (optional)" placeholder="Company name" autoComplete="organization" error={errors.company?.message} {...register('company')} />
              <TextInput label="Email" type="email" placeholder="name@example.com" autoComplete="email" error={errors.email?.message} {...register('email')} />
              <TextInput label="Phone" type="tel" placeholder="+62..." autoComplete="tel" error={errors.phone?.message} {...register('phone')} />
              <Controller
                name="subject"
                control={control}
                render={({ field }) => (
                  <SelectInput label="Subject" error={errors.subject?.message} {...field}>
                    <option value="Property Inquiry">Property Inquiry</option>
                    <option value="Trade Inquiry">Trade Inquiry</option>
                    <option value="General">General</option>
                  </SelectInput>
                )}
              />
              <TextArea
                label="Message"
                rows={6}
                maxLength={1000}
                placeholder="Share your requirements, location, timeline, or trade lane details."
                hint={`${messageLength}/1000 characters`}
                error={errors.message?.message}
                {...register('message')}
              />
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </Button>
            </form>
          </div>

          <aside className="contact-card" aria-label="Office information">
            <h2>Office Info</h2>
            <ul>
              <li>
                <MapPin size={20} aria-hidden="true" />
                <span>{siteConfig.address}</span>
              </li>
              <li>
                <Phone size={20} aria-hidden="true" />
                <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>{siteConfig.phone}</a>
              </li>
              <li>
                <Mail size={20} aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li>
                <Clock size={20} aria-hidden="true" />
                <span>{siteConfig.hours}</span>
              </li>
            </ul>
            <div className="map-placeholder" role="img" aria-label="Map placeholder for Jakarta Selatan office">
              <span>Google Maps placeholder</span>
              <small>Jakarta Selatan, Indonesia</small>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
