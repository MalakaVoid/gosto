import React from 'react'
import Heading from '../../common/Heading'
import { customer } from '../../assets/data/data'
import { ImQuotesRight } from 'react-icons/im'

export default function Testimonial() {
  return (
    <>
        <section className="customer">
          <Heading title='Choose the Plans' desc='Meet our newbies! The latest templates uploaded to the marketplace.' /> 

          <div className="content">
            {customer.map((item)=>(
              <div className="card">
                <button>
                  <ImQuotesRight />
                </button>
                <p>"{item.desc}"</p>
                <h3>{item.name}</h3>
                <span>{item.post}</span>
                
              </div>
            ))}
          </div>
        </section>
    </>
  )
}

