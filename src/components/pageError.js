import React from 'react'
import { NotFoundWrapper } from './style/error'

const ErrorPage = () => {
  return (
    <NotFoundWrapper>
      <section class="page_404">
        <div class="container">
          <div class="row">
            <div class="error_box">
              <div class="four_zero_four_bg">
                <h1 class="text-center ">404</h1>
              </div>

              <div class="contant_box_404">
                <h3 class="h2">Look like you're lost</h3>

                <p>the page you are looking for not avaible!</p>

                <a href="/" class="link_404">
                  Go to Home
                </a>
              </div>
            </div>
            <span>
              <a
                href="https://codepen.io/abol/pen/arPeZz?editors=0100"
                target="_blank"
                rel="noopener noreferrer"
              >
                Design by Abolfzal Arab from codepen
              </a>
            </span>
          </div>
        </div>
      </section>
    </NotFoundWrapper>
  )
}

export default ErrorPage
