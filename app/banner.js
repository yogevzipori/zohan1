import { XMarkIcon } from '@heroicons/react/20/solid'

export default function banner() {
  return (

      <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-2 lg:px-8">
        <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-indigo-800 py-6.5 px-6 sm:rounded-xl sm:py-3 sm:pr-3.5 sm:pl-4">
          <p className="text-sm leading-6 text-white">
            <a href="tel:7026253387">
              <strong className="font-semibold">Don't wait!</strong>
              <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                <circle cx={1} cy={1} r={1} />
              </svg>
              Contact Zohan Handyman Services today to schedule a FREE consultation <span aria-hidden="true">&rarr;</span>
            </a>
          </p>
          {/* <button type="button" className="-m-1.5 flex-none p-1.5">
            <span className="sr-only">Dismiss</span>
            <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
          </button> */}
        </div>
      </div>
 
  )
}
