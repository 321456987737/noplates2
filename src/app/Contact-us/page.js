import React from 'react'
import Herosection from '../../components/contact/herosection'
import ContactForm from "../../components/contact/form"
import OpeningHours from "../../components/contact/openinghours"
import Faqs from "../../components/contact/faqs"
const Page = () => {
  return (
    <div>
      <Herosection/>
      <ContactForm/>
      <OpeningHours/>
      <Faqs/>
    </div>
  )
}

export default Page
