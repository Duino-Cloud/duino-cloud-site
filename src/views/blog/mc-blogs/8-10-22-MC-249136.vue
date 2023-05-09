<template>
    <div>
      <title>Galactiq | MC-249136</title>
      <section class="content-row content-row-gray" style="padding-top: 26px">
        <div class="container">
          <header class="content-header" style="margin-bottom: 0px">
            <h2>
              <img
                src="https://cdn.galactiq.net/images/banners/galactiq-banner-no-subtitle.png"
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
                <a href="https://bugs.mojang.com/browse/MC-249136">Freeze/server-side lag spike sometimes occurs when attempting to locate a buried treasure or opening/breaking a chest containing a map</a>
              </h2>
              <ul>
                <li><i class="fas fa-calendar icon-left"></i>8th of October 2022</li>
              </ul>
            </header>
  
            <div class="blog-article-content">
              <p>
                A bug has been brought to our attention that may cause server instability or an unplayable enviroment.
              </p>
              <p>
                Below will show everything we know about this issue and what we recommend as a fix/solution.
              </p>
              <h3>
                <strong>What is the bug?</strong>
              </h3>
              <p>
                When playing on a 1.19 based server, you may attempt to open a chest in a shipwreck containing a buried treasure map. It seems in some cases
                this causes a lag spike or an outright crash. If you see red text in your console check for an error similar to this: *net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction.apply(LootItemConditionalFunction.java:30)*
              </p>
              <h3>
                <strong>What can I do?</strong>
              </h3>
              <p>
                Currently there isn't much to do until Mojang (or your server software developer) patches the issue. For right now we recommend steering clear of shipwrecks in order to avoid server crashes
              </p>
              <h3>
                <strong>Where can I find more infomation?</strong>
              </h3>
              <p>
                You can check mojangs progress/updates on this issue <a href="https://bugs.mojang.com/browse/MC-249136">here</a>
              </p>
              <h3>
                <strong>Status</strong>
              </h3>
              <p>
                Open | Unresolved
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  </template>
  