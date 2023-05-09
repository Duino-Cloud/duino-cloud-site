<template>
    <div>
      <title>Galactiq | 4-19-23</title>
      <section class="content-row content-row-gray" style="padding-top: 26px">
        <div class="container">
          <header class="content-header" style="margin-bottom: 0px">
            <h2>
              <img
                src="https://cdn.galactiq.net/images/logos/galactiq/galactiq-banner-no-subtitle-transparent.png"
                height="96px"
              />
            </h2>
          </header>
  
          <article
            class="blog-article blog-article-center"
            style="margin-top: 10px"
          >
            <header class="blog-article-header">
              <h2>
                <a href="">NAT IP address's for IPv6 only VPS</a>
              </h2>
              <ul>
                <li><i class="fas fa-calendar icon-left"></i>19th of April 2023</li>
              </ul>
            </header>
  
            <div class="blog-article-content">
            
              <h3>
                <strong>What is a NAT IP?</strong>
              </h3>
              <p>
                NAT, which stands for Network Address Translation, is a technique used in computer networking to allow devices on a private network to communicate with devices on the Internet.
              </p>
              <p>
                In a private network, each device is assigned a unique IP address that is not routable on the public Internet. NAT enables a router to act as an intermediary between the private network and the Internet by translating the private IP addresses of devices on the network into a single public IP address that can be used on the Internet.
              </p>
              <h3>
                <strong>Why does my server get a NAT IP?</strong>
              </h3>
              <p>
                We assign a NAT IP to every IPv6-Only server to ensure the system is also able to access parts of the internet that do not fully support IPv6 yet.
                This means you don't have buy an IPv4 address to access these services.
              </p>
              <p>
                By using a NAT IP, you can take advantage of the benefits of IPv6 while still maintaining access to the vast array of services that rely on IPv4.
                Additionally, you do not need to worry about the expense of obtaining an IPv4 address.
              </p>
              <h3>
                <strong>Can I port forward using this IP?</strong>
              </h3>
              <p>
                No,  port forwarding is not permitted on this NAT IP. This IP address is intended solely for accessing other services and is not intended to be used to access your server.
                If you wish to enable port forwarding on a public IPv4 address, you will need to purchase an IPv4 address during the ordering process or submit a support ticket to add an IPv4 address to an existing server.
              </p>
            </div>
          </article>
        </div>
        <div class="column-row align-center-bottom">
            <div class="column-33">
              <div class="product-box">
                <div class="product-header">
                  <img src="https://cdn.galactiq.net/images/team/jeroen.png" alt="" height="64px">
                  <h4 style="margin-top: 20px">
                    Jeroen
                  </h4>
                  <p>COO<br /></p>
                </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  </template>
  