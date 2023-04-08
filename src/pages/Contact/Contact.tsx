import React from 'react'
import contactImg from '../../assets/contact.avif';
export default function Contact() {
    const handleSubmit:(e: React.FormEvent<HTMLFormElement>) => void=(e)=>{
        e.preventDefault()
    }
  return (
    <div className='pt-16'>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80">
      {/* <!-- image - start --> */}
      <div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
        <img src={contactImg} loading="lazy" alt="Photo by Andras Vas" className="h-full w-full object-cover object-center" />
      </div>
      {/* <!-- image - end --> */}

      {/* <!-- content - start --> */}
      <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
        <h2 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">Help center</h2>

        <p className="mb-8 w-full text-gray-600">Our Help Center offers a comprehensive library of resources to support you in all aspects of using our book library. Whether you are having trouble finding a specific title, need assistance with downloading an eBook, or have questions about our membership options, our Help Center is here to assist you. Our resources include step-by-step guides, frequently asked questions, and video tutorials to help you navigate our website and access the content you need. In addition, we have a dedicated support team available to answer any questions or concerns you may have. We are committed to providing our members with the best possible experience and are always looking for ways to improve our service.</p>

        <div className="mt-auto">
          <a href="#" className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">Contact support</a>
        </div>
      </div>
      {/* <!-- content - end --> */}
    </div>
  </div>
</div>
{/* contact form */}
<div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    {/* <!-- text - start --> */}
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Get in touch</h2>

      <p className="mx-auto max-w-screen-lg text-center text-gray-500 md:text-lg">Our contact form is an easy and convenient way for you to get in touch with us. Whether you have a question about our products or services, need assistance with your account, or want to provide feedback, our contact form is available 24/7 for your convenience. </p>
    </div>
    {/* <!-- text - end --> */}

    {/* <!-- form - start --> */}
    <form onSubmit={(e)=>handleSubmit(e)} className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor="first-name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">First name*</label>
        <input name="first-name" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div>
        <label htmlFor="last-name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Last name*</label>
        <input name="last-name" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="occupation" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Occupation</label>
        <input name="occupation" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email*</label>
        <input name="email" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="subject" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Subject*</label>
        <input name="subject" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Message*</label>
        <textarea name="message" className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"></textarea>
      </div>

      <div className="flex items-center justify-between sm:col-span-2">
        <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Send</button>

        <span className="text-sm text-gray-500">*Required</span>
      </div>

      <p className="text-xs text-gray-400">We are secure platform we will protect your privacy.<a href="#" className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>.</p>
    </form>
    {/* <!-- form - end --> */}
  </div>
</div>
{/* contact form */}
    </div>
  )
}
