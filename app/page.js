import Image from "next/image";
import ZohanPic1 from "../public/zohanpic1.jpg";
import ZohanPic2 from "../public/zohanpic2.jpg";
import ZohanPic3 from "../public/zohanpic3.jpg";
import CallNow from "./callnow";
import Banner from "./banner";

export default function mainPage() {
  return (
    <div className="relative overflow-hidden bg-white py-16">
      <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
        <div
          className="relative mx-auto h-full max-w-prose text-lg"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-lg">
          <Banner />
          <h1>
            <span className="block text-center text-lg font-semibold text-indigo-600">
              Professional Drywall Repair Services
            </span>
            <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Welcome to Zohan Handyman Services - Servicing Las Vegas and
              Henderson.
            </span>
          </h1>
          <p className="mt-8 text-lg leading-8 text-slate-700 text-center">
            <p>
              Are you tired of dealing with unreliable handymen who overcharge
              for subpar work? At Zohan Handyman Services, our team of
              professional handyman is here to help. No more unexpected costs.
              We provide a clear quote upfront, so you know exactly what you'll
              be paying for before we start the job. Say goodbye to home repair
              worries. Contact us today to schedule your next project with
              confidence.<br/>
            </p>
            <p>
              One of the biggest headaches when it comes to home repairs is the
              fear of hidden costs. You don't want to end up with a bill that's
              higher than what you expected. That's why we keep it real and
              straightforward. We give you a clear quote upfront and make sure
              you know exactly what you're paying for before we start the job.
            </p>
            
          </p>
        </div>

        <figure>
          <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
            <Image
              className="w-full rounded-lg"
              src={ZohanPic1}
              alt="work demo"
              width={1110}
              height={773}
            />
          </div>
          <CallNow />
        </figure>

        <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
          <p>
            Our experienced team of professionals specialize in{" "}
            <strong>
              patching holes, fixing cracks, repairing water damage, and much
              more.
            </strong>{" "}
          </p>
          <ul role="list">
            <li>Servicing the Las Vegas and Henderson area</li>
            <li>Uses high-quality materials and tools</li>
            <li>Competitive pricing</li>
            <li>Experienced team of experts</li>
          </ul>

          <p>
          If you're looking for a handyman who's got your back, look no
            further than Zohan Handyman Services. Contact us today to schedule
            your next home repair and say goodbye to all your handyman
            headaches.
          </p>
          <h2>
            We use only the highest quality materials and tools to ensure that
            your repairs are long-lasting and durable.
          </h2>
          <p>
            Our drywall repair services are available in Las Vegas and
            Henderson, and we are committed to providing exceptional service and
            craftsmanship on every project. We also offer competitive pricing
            and free estimates to help you make an informed decision.
          </p>
          <blockquote>
            <p>
              Zohan Handyman Services has a team of experts who are dedicated to
              providing high-quality, professional drywall repair services. With
              years of experience and expertise, they have the knowledge and
              skills to handle any type of drywall damage, big or small.
            </p>
          </blockquote>
          <p>
            We offer a wide range of services to meet all your construction,
            remodeling, and handyman needs, including kitchen and bathroom
            remodels, furniture assembly and installation, appliance
            installation and repair, TV mounting, light fixture installation,
            flooring improvements, tile replacement, door installation and
            repair, picture hanging, home security installation, and more.
          </p>
          <figure>
            <CallNow />

            <Image
              className="w-full rounded-lg"
              src={ZohanPic2}
              alt="work demo2"
              width={1110}
              height={773}
            />
            <figcaption>We offer a wide range of services. </figcaption>
          </figure>
          <h2>Servicing Las Vegas and Henderson area</h2>
          <p>
            We also offer competitive pricing and upfront quotes, so you can
            rest assured that you're getting a fair price for high-quality work.
            We never compromise on quality and always strive for 100% customer
            satisfaction.
            <CallNow />
          </p>
          <p>
            At Zohan Handyman Services we're committed to providing exceptional
            customer service and satisfaction. We understand that home repairs
            can be stressful, which is why we make the process as easy and
            stress-free as possible. Our team will work with you every step of
            the way to ensure your drywall repair is completed to your
            satisfaction.
          </p>
          <figure>
            <Image
              className="w-full rounded-lg"
              src={ZohanPic3}
              alt="work demo2"
              width={1110}
              height={773}
            />
            <figcaption>
              At Zohan Handyman Services, we offer a wide range of Handyman
              Services to meet all your home repair needs. Whether you're
              looking to find a handyman for small repairs like fixing a leaky
              faucet or installing a new ceiling fan, or you need a drywall
              handyman for more complex drywall services like repair and
              installation, our team of handyman professionals has got you
              covered. With our expertise in handyman drywall repair and years
              of experience in handyman repair, you can trust us to handle any
              job with precision and care. And, if you're in Las Vegas, you're
              in luck! Our team of handyman professionals is based in Las Vegas,
              so you can count on us for fast and reliable service. <br/> Contact us
              today to schedule your next handyman repair and experience the
              peace of mind that comes with hiring the best. Don't let drywall
              damage or any other issue distract you from the beauty of your
              home. Contact Zohan Handyman Services today to schedule a
              consultation and learn more about how we can help with all your
              drywall repair needs or any other repairs needed. We are servicing
              the Las Vegas and Henderson area. Call us today!
            </figcaption>
            <CallNow />
          </figure>
        </div>
      </div>
    </div>
  );
}
