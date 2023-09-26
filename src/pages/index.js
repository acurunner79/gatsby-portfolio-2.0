import * as React from "react"
import Layout from "../components/Layout"
import '../styles/home.css'

// const head = 'Home Page'

const IndexPage = () => {
  return (
    <Layout>
      <main className="home">
        {/* <h1>{head}</h1> */}
        <div className="intro-wrapper">
          <div className="intro-text">
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus vulputate nunc, id tempus odio convallis vitae.</h2>
            <h3>Morbi fringilla est et odio elementum, eu lacinia purus elementum. Praesent viverra maximus massa, et fringilla purus faucibus pharetra.</h3>
            <div className="intro-roles">
              <p>I'm a something here</p>
              <p>& I'm something here as well</p>
            </div>
            <div className="intro-links">
              <ul>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage

