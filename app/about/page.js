import CallNow from "../callnow";

export default function About() {
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl py-16 px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-lg font-semibold text-indigo-600">
              Zohan Handyman Services: Your One-Stop Solution for All Home
              Repairs in Las Vegas and Henderson{" "}
            </h2>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
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
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <div className="aspect-w-5 aspect-h-6 lg:aspect-none rounded-lg object-cover object-center shadow-lg"></div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-lg text-slate-900">
                Your home is your sanctuary, and the last thing you want is to
                be plagued with unsightly damages or malfunctions. That's where
                Zohan Handyman Services comes in – your go-to solution for all
                your home repair needs in Las Vegas and Henderson. Our team of
                skilled professionals is equipped to handle everything from
                minor repairs to more complex installations, making sure your
                home remains in top shape. 
              </p>
            </div>
            <div className="prose prose-indigo mx-auto mt-5 text-slate-600 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p>
                At Zohan Handyman Services, we pride ourselves on offering a
                comprehensive suite of services to cater to a wide array of home
                repair needs. Our specialties include, but are not limited to:
                Small repairs: Our handymen can tackle minor issues like fixing
                a leaky faucet or installing a new ceiling fan, ensuring your
                home remains functional and comfortable. Drywall services: Our
                team is adept at handling drywall repairs and installations,
                ensuring that any damage is skillfully mended, and new
                installations are seamlessly integrated. Custom requests: We
                understand that every home is unique, and we're happy to
                accommodate specific repair or installation requests. Just let
                us know what you need, and we'll make it happen.
                <br />
                Expertise and Experience: With years of experience in the field,
                our handyman professionals have honed their skills to deliver
                top-notch workmanship. Our expertise in drywall repair and other
                handyman services guarantees that you'll receive high-quality
                results, no matter the task at hand. By choosing Zohan Handyman
                Services, you can trust that your home is in capable and
                reliable hands.
              </p>

              <p>
                Fast and Dependable Service: We understand that time is of the
                essence when it comes to home repairs. That's why our team is
                based in Las Vegas, allowing us to provide prompt and efficient
                service to residents in the area. Whether you're in Las Vegas or
                Henderson, you can count on Zohan Handyman Services for timely
                solutions to your home repair needs. Peace of Mind: When you
                hire Zohan Handyman Services, you can rest easy knowing that
                your home is being cared for by the best. Our team's dedication
                to quality workmanship and attention to detail ensures that your
                home repairs are executed flawlessly. Say goodbye to the stress
                and frustration that come with attempting DIY repairs or dealing
                with subpar contractors. With Zohan Handyman Services, your
                satisfaction is our priority. Don't let pesky home repair
                problems like drywall damage or leaky faucets spoil the comfort
                and beauty of your personal haven. Zohan Handyman Services is
                committed to delivering exceptional service, ensuring your home
                stays in tip-top shape. Proudly serving Las Vegas and Henderson,
                our expert team is prepared to handle any repair or installation
                challenge with meticulous attention to detail. Reach out to us
                today for a consultation and uncover how we can cater to all
                your home repair needs. Choose Zohan Handyman Services and
                embrace the tranquility that comes with entrusting your home to
                the best in the business.
                <CallNow/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
