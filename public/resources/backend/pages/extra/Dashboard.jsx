import React from 'react'

import '../../assets/js/custom-card/custom-card.js'
import '../../assets/js/dashboard-crm.js'
import '../../assets/js/script.js'

const Dashboard = () => {
  return (
    <div className="container-fluid" style={{marginTop : '100px'}}>
  <div className="card border-widgets">
    <div className="row m-0">
      <div className="col-xl-3 col-6 xs-width-100">
        <div className="crm-top-widget card-body">
          <div className="d-flex">
            <i className="icon-user font-primary align-self-center me-3" />
            <div>
              <span className="mt-0">All Visiter</span>
              <h4 className="counter">25647</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-6 xs-width-100">
        <div className="crm-top-widget card-body">
          <div className="d-flex">
            <i className="icon-email font-secondary align-self-center me-3" />
            <div>
              <span className="mt-0">Subscribe</span>
              <h4 className="counter">46887</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-6 xs-width-100">
        <div className="crm-top-widget card-body">
          <div className="d-flex">
            <i className="icon-package font-success align-self-center me-3" />
            <div>
              <span className="mt-0">Products</span>
              <h4 className="counter">78936</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-6 xs-width-100">
        <div className="crm-top-widget card-body">
          <div className="d-flex">
            <i className="icon-direction-alt font-info align-self-center me-3" />
            <div>
              <span className="mt-0">All Post</span>
              <h4 className="counter">4569</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-xl-6 xl-100">
      <div className="card">
        <div className="card-header">
          <h5>Total sales</h5>
          <div className="card-header-right">
            <ul className="list-unstyled card-option">
              <li><i className="icofont icofont-simple-left " /></li>
              <li><i className="view-html fa fa-code" /></li>
              <li><i className="icofont icofont-maximize full-card" /></li>
              <li><i className="icofont icofont-minus minimize-card" /></li>
              <li><i className="icofont icofont-refresh reload-card" /></li>
              <li><i className="icofont icofont-error close-card" /></li>
            </ul>
          </div>
        </div>
        <div className="card-body">
          <div className="ct-10 total-chart" />
          <div className="code-box-copy">
            <button className="code-box-copy__btn btn-clipboard" data-clipboard-target="#example-head" title="Copy"><i className="icofont icofont-copy-alt" /></button>
            <pre><code className="language-html" id="example-head">&lt;!-- Cod Box Copy begin --&gt;{"\n"}&lt;div class="ct-10 total-chart"&gt;&lt;/div&gt;{"\n"}&lt;!-- Cod Box Copy end --&gt;</code></pre>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-6 xl-100">
      <div className="card">
        <div className="card-header">
          <h5>Total Vender</h5>
          <div className="card-header-right">
            <ul className="list-unstyled card-option">
              <li><i className="icofont icofont-simple-left " /></li>
              <li><i className="view-html fa fa-code" /></li>
              <li><i className="icofont icofont-maximize full-card" /></li>
              <li><i className="icofont icofont-minus minimize-card" /></li>
              <li><i className="icofont icofont-refresh reload-card" /></li>
              <li><i className="icofont icofont-error close-card" /></li>
            </ul>
          </div>
        </div>
        <div className="card-body">
          <div className="ct-1 total-chart" />
          <div className="code-box-copy">
            <button className="code-box-copy__btn btn-clipboard" data-clipboard-target="#example-head1" title="Copy"><i className="icofont icofont-copy-alt" /></button>
            <pre><code className="language-html" id="example-head1">&lt;!-- Cod Box Copy begin --&gt;{"\n"}&lt;div class="ct-1 total-chart"&gt;&lt;/div&gt;{"\n"}&lt;!-- Cod Box Copy end --&gt;</code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-xl-8 col-lg-12">
      <div className="card">
        <div className="card-header">
          <h5>Combo Chart</h5>
          <div className="card-header-right">
            <ul className="list-unstyled card-option">
              <li><i className="icofont icofont-simple-left " /></li>
              <li><i className="view-html fa fa-code" /></li>
              <li><i className="icofont icofont-maximize full-card" /></li>
              <li><i className="icofont icofont-minus minimize-card" /></li>
              <li><i className="icofont icofont-refresh reload-card" /></li>
              <li><i className="icofont icofont-error close-card" /></li>
            </ul>
          </div>
        </div>
        <div className="card-body">
          <div className="ct-12 combo-chart" />
          <div className="code-box-copy">
            <button className="code-box-copy__btn btn-clipboard" data-clipboard-target="#example-head2" title="Copy"><i className="icofont icofont-copy-alt" /></button>
            <pre><code className="language-html" id="example-head2">&lt;!-- Cod Box Copy begin --&gt;{"\n"}&lt;div class="ct-12 combo-chart"&gt;&lt;/div&gt;{"\n"}&lt;!-- Cod Box Copy end --&gt;</code></pre>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-4 col-lg-12">
      <div className="card">
        <div className="whether-widget">
          <div className="whether-widget-top card-header">
            <div className="row">
              <div className="col-sm-6">
                <img src="../assets/images/dashboard/sun.png" alt />
                <span className="block_whether_bottom">Cool Day</span>
              </div>
              <div className="col-sm-6">
                <div className="details">
                  <span>India, Surat</span>
                  <h4><span className="counter">36</span><sup>o</sup>F</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="whether-widget-bottom card-body">
            <div className="row">
              <div className="col-6 p-0">
                <div className="d-flex pt-0">
                  <div className="me-3">
                    <svg version="1.1" id="cloudRainMoonFill" className="climacon climacon_cloudRainMoonFill" viewBox="15 15 70 70">
                      <g className="climacon_iconWrap climacon_iconWrap-cloudRainMoonFill">
                        <g className="climacon_wrapperComponent climacon_wrapperComponent-moon climacon_componentWrap-moon_cloud">
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunBody" d="M61.023,50.641c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C73.021,45.269,67.649,50.641,61.023,50.641z" />
                          <path className="climacon_component climacon_component-fill climacon_component-fill_moon" fill="#FFFFFF" d="M59.235,30.851c-3.556,0.813-6.211,3.989-6.211,7.792c0,4.417,3.581,7.999,7.999,7.999c3.802,0,6.979-2.655,7.791-6.211C63.961,39.527,60.139,35.705,59.235,30.851z" />
                        </g>
                        <g className="climacon_wrapperComponent climacon_wrapperComponent-rain">
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- left" d="M41.946,53.641c1.104,0,1.999,0.896,1.999,2v15.998c0,1.105-0.895,2-1.999,2s-2-0.895-2-2V55.641C39.946,54.537,40.842,53.641,41.946,53.641z" />
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- middle" d="M49.945,57.641c1.104,0,2,0.896,2,2v15.998c0,1.104-0.896,2-2,2s-2-0.896-2-2V59.641C47.945,58.535,48.841,57.641,49.945,57.641z" />
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- right" d="M57.943,53.641c1.104,0,2,0.896,2,2v15.998c0,1.105-0.896,2-2,2c-1.104,0-2-0.895-2-2V55.641C55.943,54.537,56.84,53.641,57.943,53.641z" />
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- left" d="M41.946,53.641c1.104,0,1.999,0.896,1.999,2v15.998c0,1.105-0.895,2-1.999,2s-2-0.895-2-2V55.641C39.946,54.537,40.842,53.641,41.946,53.641z" />
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- middle" d="M49.945,57.641c1.104,0,2,0.896,2,2v15.998c0,1.104-0.896,2-2,2s-2-0.896-2-2V59.641C47.945,58.535,48.841,57.641,49.945,57.641z" />
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- right" d="M57.943,53.641c1.104,0,2,0.896,2,2v15.998c0,1.105-0.896,2-2,2c-1.104,0-2-0.895-2-2V55.641C55.943,54.537,56.84,53.641,57.943,53.641z" />
                        </g>
                        <g className="climacon_componentWrap climacon_componentWrap_cloud">
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_cloud" d="M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z" />
                          <path className="climacon_component climacon_component-fill climacon_component-fill_cloud" fill="#FFFFFF" d="M59.943,61.639c4.418,0,8-3.582,8-7.998c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z" />
                        </g>
                      </g>
                    </svg>{/* cloudRainMoonFill */}
                  </div>
                  <div className="align-self-center">
                    <h5 className="mt-0"><span className="counter digits">25</span><sup>o</sup>C</h5>
                    <span>Newyork , USA</span>
                  </div>
                </div>
              </div>
              <div className="col-6 p-0">
                <div className="d-flex pt-0">
                  <div className="me-3">
                    <svg version="1.1" id="cloudDrizzleMoonFillAlt" className="climacon climacon_cloudDrizzleMoonFillAlt" viewBox="15 15 70 70">
                      <g className="climacon_iconWrap climacon_iconWrap-cloudDrizzleMoonFillAlt">
                        <g className="climacon_wrapperComponent climacon_wrapperComponent-moon climacon_componentWrap-moon_cloud">
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunBody" d="M61.023,50.641c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C73.021,45.269,67.649,50.641,61.023,50.641z" />
                          <path className="climacon_component climacon_component-fill climacon_component-fill_moon" fill="#FFFFFF" d="M59.235,30.851c-3.556,0.813-6.211,3.989-6.211,7.792c0,4.417,3.581,7.999,7.999,7.999c3.802,0,6.979-2.655,7.791-6.211C63.961,39.527,60.139,35.705,59.235,30.851z" />
                        </g>
                        <g className="climacon_wrapperComponent climacon_wrapperComponent-drizzle">
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-left" id="Drizzle-Left_1_" d="M56.969,57.672l-2.121,2.121c-1.172,1.172-1.172,3.072,0,4.242c1.17,1.172,3.07,1.172,4.24,0c1.172-1.17,1.172-3.07,0-4.242L56.969,57.672z" />
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-middle" d="M50.088,57.672l-2.119,2.121c-1.174,1.172-1.174,3.07,0,4.242c1.17,1.172,3.068,1.172,4.24,0s1.172-3.07,0-4.242L50.088,57.672z" />
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-right" d="M43.033,57.672l-2.121,2.121c-1.172,1.172-1.172,3.07,0,4.242s3.07,1.172,4.244,0c1.172-1.172,1.172-3.07,0-4.242L43.033,57.672z" />
                        </g>
                        <g className="climacon_componentWrap climacon_componentWrap_cloud">
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_cloud" d="M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z" />
                          <path className="climacon_component climacon_component-fill climacon_component-fill_cloud" fill="#FFFFFF" d="M59.943,61.639c4.418,0,8-3.582,8-7.998c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z" />
                        </g>
                      </g>
                    </svg>{/* cloudDrizzleMoonFillAlt */}
                  </div>
                  <div className="align-self-center">
                    <h5 className="mt-0"><span className="counter digits">95</span><sup>o</sup>F</h5>
                    <span>Peris , London</span>
                  </div>
                </div>
              </div>
              <div className="col-6 p-0">
                <div className="d-flex">
                  <div className="me-3">
                    <svg version="1.1" id="cloudHailAltMoonFill" className="climacon climacon_cloudHailAltMoonFill" viewBox="15 15 70 70">
                      <g className="climacon_iconWrap climacon_iconWrap-cloudHailAltMoon">
                        <g className="climacon_wrapperComponent climacon_wrapperComponent-moon climacon_componentWrap-moon_cloud">
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunBody" d="M61.023,50.641c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C73.021,45.269,67.649,50.641,61.023,50.641z" />
                          <path className="climacon_component climacon_component-fill climacon_component-fill_moon" fill="#FFFFFF" d="M59.235,30.851c-3.556,0.813-6.211,3.989-6.211,7.792c0,4.417,3.581,7.999,7.999,7.999c3.802,0,6.979-2.655,7.791-6.211C63.961,39.527,60.139,35.705,59.235,30.851z" />
                        </g>
                        <g className="climacon_wrapperComponent climacon_wrapperComponent-hailAlt">
                          <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-left">
                            <circle cx={42} cy="65.498" r={2} />
                          </g>
                          <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-middle">
                            <circle cx="49.999" cy="65.498" r={2} />
                          </g>
                          <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-right">
                            <circle cx="57.998" cy="65.498" r={2} />
                          </g>
                          <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-left">
                            <circle cx={42} cy="65.498" r={2} />
                          </g>
                          <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-middle">
                            <circle cx="49.999" cy="65.498" r={2} />
                          </g>
                          <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-right">
                            <circle cx="57.998" cy="65.498" r={2} />
                          </g>
                        </g>
                        <g className="climacon_componentWrap climacon_componentWrap_cloud">
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_cloud" d="M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z" />
                          <path className="climacon_component climacon_component-fill climacon_component-fill_cloud" fill="#FFFFFF" d="M59.943,61.639c4.418,0,8-3.582,8-7.998c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z" />
                        </g>
                      </g>
                    </svg>{/* cloudHailAltMoonFill */}
                  </div>
                  <div className="align-self-center">
                    <h5 className="mt-0"><span className="counter digits">50</span><sup>o</sup>C</h5>
                    <span>Surat , India</span>
                  </div>
                </div>
              </div>
              <div className="col-6 p-0">
                <div className="d-flex">
                  <div className="me-3">
                    <svg version="1.1" id="cloudSnowAltFill" className="climacon climacon_cloudSnowAltFill" viewBox="15 15 70 70">
                      <g className="climacon_iconWrap climacon_iconWrap-cloudSnowAltFill">
                        <g className="climacon_wrapperComponent climacon_wrapperComponent-snowAlt">
                          <g className="climacon_component climacon_component climacon_component-snowAlt">
                            <path className="climacon_component climacon_component-stroke climacon_component-stroke_snowAlt" d="M43.072,59.641c0.553-0.957,1.775-1.283,2.732-0.731L48,60.176v-2.535c0-1.104,0.896-2,2-2c1.104,0,2,0.896,2,2v2.535l2.195-1.268c0.957-0.551,2.18-0.225,2.73,0.732c0.553,0.957,0.225,2.18-0.73,2.731l-2.196,1.269l2.196,1.268c0.955,0.553,1.283,1.775,0.73,2.732c-0.552,0.954-1.773,1.282-2.73,0.729L52,67.104v2.535c0,1.105-0.896,2-2,2c-1.104,0-2-0.895-2-2v-2.535l-2.195,1.269c-0.957,0.553-2.18,0.226-2.732-0.729c-0.552-0.957-0.225-2.181,0.732-2.732L46,63.641l-2.195-1.268C42.848,61.82,42.521,60.598,43.072,59.641z" />
                            <circle className="climacon_component climacon_component-fill climacon_component-fill_snowAlt" fill="#FFFFFF" cx={50} cy="63.641" r={2} />
                          </g>
                        </g>
                        <g className="climacon_componentWrap climacon_componentWrap_cloud">
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_cloud" d="M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z" />
                          <path className="climacon_component climacon_component-fill climacon_component-fill_cloud" fill="#FFFFFF" d="M59.943,61.639c4.418,0,8-3.582,8-7.998c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z" />
                        </g>
                      </g>
                    </svg>{/* cloudSnowAltFill */}
                  </div>
                  <div className="align-self-center">
                    <h5 className="mt-0"><span className="counter digits">35</span><sup>o</sup>F</h5>
                    <span>Lahor , Pakistan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-xl-3 col-sm-6 xl-50">
      <div className="card bg-primary">
        <div className="card-body">
          <div className="row social-media-counter">
            <div className="col text-center">
              <i className="icofont icofont-social-facebook" />
            </div>
            <div className="col text-center">
              <h4 className="counter">256</h4>
              <p>Friend</p>
            </div>
            <div className="col text-center">
              <h4 className="counter">364</h4>
              <p>Post</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-sm-6 xl-50">
      <div className="card bg-secondary">
        <div className="card-body">
          <div className="row social-media-counter">
            <div className="col text-center">
              <i className="icofont icofont-social-twitter" />
            </div>
            <div className="col text-center">
              <h4 className="counter">698</h4>
              <p>Friend</p>
            </div>
            <div className="col text-center">
              <h4 className="counter">7018</h4>
              <p>Post</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-sm-6 xl-50">
      <div className="card bg-success">
        <div className="card-body">
          <div className="row social-media-counter">
            <div className="col text-center">
              <i className="icofont icofont-brand-linkedin" />
            </div>
            <div className="col text-center">
              <h4 className="counter">156</h4>
              <p>Friend</p>
            </div>
            <div className="col text-center">
              <h4 className="counter">985</h4>
              <p>Post</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-sm-6 xl-50">
      <div className="card bg-info">
        <div className="card-body">
          <div className="row social-media-counter">
            <div className="col text-center">
              <i className="icofont icofont-social-instagram" />
            </div>
            <div className="col text-center">
              <h4 className="counter">1489</h4>
              <p>Friend</p>
            </div>
            <div className="col text-center">
              <h4 className="counter">9875</h4>
              <p>Post</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6 col-sm-12">
      <div className>
        <div className="card height-equal">
          <div className="card-header">
            <h5 className="text-uppercase">Recent Activity</h5>
            <div className="card-header-right">
              <ul className="list-unstyled card-option">
                <li><i className="icofont icofont-simple-left " /></li>
                <li><i className="view-html fa fa-code" /></li>
                <li><i className="icofont icofont-maximize full-card" /></li>
                <li><i className="icofont icofont-minus minimize-card" /></li>
                <li><i className="icofont icofont-refresh reload-card" /></li>
                <li><i className="icofont icofont-error close-card" /></li>
              </ul>
            </div>
          </div>
          <div className="card-body">
            <ul className="crm-activity equal-height-xl">
              <li className="d-flex">
                <span className="me-3 font-primary">E</span>
                <div className="align-self-center">
                  <h6 className="mt-0">Established fact that a reader will be distracted</h6>
                  <ul className="dates">
                    <li className="digits">25 July 2017</li>
                    <li className="digits">20 hours ago</li>
                  </ul>
                </div>
              </li>
              <li className="d-flex">
                <span className="me-3 font-secondary">A</span>
                <div className="align-self-center">
                  <h6 className="mt-0">Any desktop publishing packages and web page editors.</h6>
                  <ul className="dates">
                    <li className="digits">25 July 2017</li>
                    <li className="digits">20 hours ago</li>
                  </ul>
                </div>
              </li>
              <li className="d-flex">
                <span className="me-3 font-success">T</span>
                <div className="align-self-center">
                  <h6 className="mt-0">There isn't anything embarrassing hidden.</h6>
                  <ul className="dates">
                    <li className="digits">25 July 2017</li>
                    <li className="digits">20 hours ago</li>
                  </ul>
                </div>
              </li>
              <li className="d-flex">
                <span className="me-3 font-info">C</span>
                <div className="align-self-center">
                  <h6 className="mt-0">Contrary to popular belief, Lorem Ipsum is not simply. </h6>
                  <ul className="dates">
                    <li className="digits">25 July 2017</li>
                    <li className="digits">20 hours ago</li>
                  </ul>
                </div>
              </li>
              <li className="d-flex">
                <span className="me-3 font-warning">H</span>
                <div className="align-self-center">
                  <h6 className="mt-0">H-Code - A premium portfolio template from ThemeZaa </h6>
                  <ul className="dates">
                    <li className="digits">25 July 2017</li>
                    <li className="digits">20 hours ago</li>
                  </ul>
                </div>
              </li>
            </ul>
            <div className="code-box-copy">
              <button className="code-box-copy__btn btn-clipboard" data-clipboard-target="#example-head3" title="Copy"><i className="icofont icofont-copy-alt" /></button>
              <pre><code className="language-html" id="example-head3">&lt;!-- Cod Box Copy begin --&gt;{"\n"}&lt;ul class="crm-activity equal-height-xl"&gt;{"\n"}&lt;li class="d-flex"&gt;{"\n"}&lt;span class="me-3 font-primary"&gt;E&lt;/span&gt;{"\n"}&lt;div class="align-self-center"&gt;{"\n"}{"    "}&lt;h6 class="mt-0"&gt;Established fact that a reader will be distracted&lt;/h6&gt;{"\n"}{"    "}&lt;ul class="dates"&gt;{"\n"}{"        "}&lt;li class="digits"&gt;25 July 2017&lt;/li&gt;{"\n"}{"        "}&lt;li class="digits"&gt;20 hours ago&lt;/li&gt;{"\n"}{"    "}&lt;/ul&gt;{"\n"}&lt;/div&gt;{"\n"}&lt;/li&gt;{"\n"}&lt;li class="d-flex"&gt;{"\n"}&lt;span class="me-3 font-secondary"&gt;A&lt;/span&gt;{"\n"}&lt;div class="align-self-center"&gt;{"\n"}{"    "}&lt;h6 class="mt-0"&gt;Any desktop publishiang packages and web page editors.&lt;/h6&gt;{"\n"}{"    "}&lt;ul class="dates"&gt;{"\n"}{"        "}&lt;li class="digits"&gt;25 July 2017&lt;/li&gt;{"\n"}{"        "}&lt;li class="digits"&gt;20 hours ago&lt;/li&gt;{"\n"}{"    "}&lt;/ul&gt;{"\n"}&lt;/div&gt;{"\n"}&lt;/li&gt;{"\n"}&lt;li class="d-flex"&gt;{"\n"}&lt;span class="me-3 font-success"&gt;T&lt;/span&gt;{"\n"}&lt;div class="align-self-center"&gt;{"\n"}{"    "}&lt;h6 class="mt-0"&gt;There isn't anything embarrassing hidden.&lt;/h6&gt;{"\n"}{"    "}&lt;ul class="dates"&gt;{"\n"}{"        "}&lt;li class="digits"&gt;25 July 2017&lt;/li&gt;{"\n"}{"        "}&lt;li class="digits"&gt;20 hours ago&lt;/li&gt;{"\n"}{"    "}&lt;/ul&gt;{"\n"}&lt;/div&gt;{"\n"}&lt;/li&gt;{"\n"}&lt;li class="d-flex"&gt;{"\n"}&lt;span class="me-3 font-info"&gt;C&lt;/span&gt;{"\n"}&lt;div class="align-self-center"&gt;{"\n"}{"    "}&lt;h6 class="mt-0"&gt;Contrary to popular belief, Lorem Ipsum is not simply. &lt;/h6&gt;{"\n"}{"    "}&lt;ul class="dates"&gt;{"\n"}{"        "}&lt;li class="digits"&gt;25 July 2017&lt;/li&gt;{"\n"}{"        "}&lt;li class="digits"&gt;20 hours ago&lt;/li&gt;{"\n"}{"    "}&lt;/ul&gt;{"\n"}&lt;/div&gt;{"\n"}&lt;/li&gt;{"\n"}&lt;li class="d-flex"&gt;{"\n"}&lt;span class="me-3 font-warning"&gt;H&lt;/span&gt;{"\n"}&lt;div class="align-self-center"&gt;{"\n"}{"    "}&lt;h6 class="mt-0"&gt;H-Code - A premium portfolio template from ThemeZaa &lt;/h6&gt;{"\n"}{"    "}&lt;ul class="dates"&gt;{"\n"}{"        "}&lt;li class="digits"&gt;25 July 2017&lt;/li&gt;{"\n"}{"        "}&lt;li class="digits"&gt;20 hours ago&lt;/li&gt;{"\n"}{"    "}&lt;/ul&gt;{"\n"}&lt;/div&gt;{"\n"}&lt;/li&gt;{"\n"}&lt;li class="d-flex"&gt;{"\n"}&lt;span class="me-3 font-danger"&gt;T&lt;/span&gt;{"\n"}&lt;div class="align-self-center"&gt;{"\n"}{"    "}&lt;h6 class="mt-0"&gt;There isn't anything embarrassing hidden.&lt;/h6&gt;{"\n"}{"    "}&lt;ul class="dates"&gt;{"\n"}{"        "}&lt;li class="digits"&gt;25 July 2017&lt;/li&gt;{"\n"}{"        "}&lt;li class="digits"&gt;20 hours ago&lt;/li&gt;{"\n"}{"    "}&lt;/ul&gt;{"\n"}&lt;/div&gt;{"\n"}&lt;/li&gt;{"\n"}&lt;/ul&gt;{"\n"}&lt;!-- Cod Box Copy end --&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-sm-12">
      <div className="card height-equal">
        <div className="card-header">
          <h5>Product Cart</h5>
          <div className="card-header-right">
            <ul className="list-unstyled card-option">
              <li><i className="icofont icofont-simple-left " /></li>
              <li><i className="view-html fa fa-code" /></li>
              <li><i className="icofont icofont-maximize full-card" /></li>
              <li><i className="icofont icofont-minus minimize-card" /></li>
              <li><i className="icofont icofont-refresh reload-card" /></li>
              <li><i className="icofont icofont-error close-card" /></li>
            </ul>
          </div>
        </div>
        <div className="card-body">
          <div className="user-status table-responsive product-chart">
            <table className="table table-bordernone">
              <thead>
                <tr>
                  <th scope="col">Details</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Status</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Simply dummy text of the</td>
                  <td className="digits">1</td>
                  <td className="font-secondary">Pending</td>
                  <td className="digits">$6523</td>
                </tr>
                <tr>
                  <td>Long established</td>
                  <td className="digits">5</td>
                  <td className="font-danger">Cancle</td>
                  <td className="digits">$6523</td>
                </tr>
                <tr>
                  <td>Sometimes by accident</td>
                  <td className="digits">10</td>
                  <td className="font-danger">Cancle</td>
                  <td className="digits">$6523</td>
                </tr>
                <tr>
                  <td>Classical Latin literature</td>
                  <td className="digits">9</td>
                  <td className="font-info">Return</td>
                  <td className="digits">$6523</td>
                </tr>
                <tr>
                  <td>keep the site on the Internet</td>
                  <td className="digits">8</td>
                  <td className="font-secondary">Pending</td>
                  <td className="digits">$6523</td>
                </tr>
                <tr>
                  <td>Molestiae consequatur</td>
                  <td className="digits">3</td>
                  <td className="font-danger">Cancle</td>
                  <td className="digits">$6523</td>
                </tr>
                <tr>
                  <td className="pb-1">Sometimes by accident</td>
                  <td className="digits">8</td>
                  <td className="font-info">Return</td>
                  <td className="digits">$6523</td>
                </tr>
                <tr>
                  <td>keep the site on the Internet</td>
                  <td className="digits">8</td>
                  <td className="font-secondary">Pending</td>
                  <td className="digits">$6523</td>
                </tr>
                <tr>
                  <td>Sometimes by accident</td>
                  <td className="digits">10</td>
                  <td className="font-danger">Cancle</td>
                  <td className="digits">$6523</td>
                </tr>
                <tr>
                  <td>Long established</td>
                  <td className="digits">1</td>
                  <td className="font-secondary">Pending</td>
                  <td className="digits">$6523</td>
                </tr>
                <tr>
                  <td>Simply dummy text of the</td>
                  <td className="digits">8</td>
                  <td className="font-secondary">Pending</td>
                  <td className="digits">$6523</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="code-box-copy">
            <button className="code-box-copy__btn btn-clipboard" data-clipboard-target="#example-head4" title="Copy"><i className="icofont icofont-copy-alt" /></button>
            <pre><code className="language-html" id="example-head4">&lt;!-- Cod Box Copy begin --&gt;{"\n"}&lt;div class="user-status table-responsive product-chart"&gt;{"\n"}&lt;table class="table table-bordernone"&gt;{"\n"}&lt;thead&gt;{"\n"}&lt;tr&gt;{"\n"}{"    "}&lt;th scope="col"&gt;Details&lt;/th&gt;{"\n"}{"    "}&lt;th scope="col"&gt;Quantity&lt;/th&gt;{"\n"}{"    "}&lt;th scope="col"&gt;Status&lt;/th&gt;{"\n"}{"    "}&lt;th scope="col"&gt;Price&lt;/th&gt;{"\n"}&lt;/tr&gt;{"\n"}&lt;/thead&gt;{"\n"}&lt;tbody&gt;{"\n"}&lt;tr&gt;{"\n"}{"    "}&lt;td&gt;Simply dummy text of the&lt;/td&gt;{"\n"}{"    "}&lt;td class="digits"&gt;5&lt;/td&gt;{"\n"}{"    "}&lt;td class="font-secondary"&gt;Pending&lt;/td&gt;{"\n"}{"    "}&lt;td class="digits"&gt;$6523&lt;/td&gt;{"\n"}&lt;/tr&gt;{"\n"}&lt;tr&gt;{"\n"}{"    "}&lt;td&gt;Long established&lt;/td&gt;{"\n"}{"    "}&lt;td class="digits"&gt;5&lt;/td&gt;{"\n"}{"    "}&lt;td class="font-danger"&gt;cancle&lt;/td&gt;{"\n"}{"    "}&lt;td class="digits"&gt;$6523&lt;/td&gt;{"\n"}&lt;/tr&gt;{"\n"}&lt;tr&gt;{"\n"}{"    "}&lt;td&gt;sometimes by accident&lt;/td&gt;{"\n"}{"    "}&lt;td class="digits"&gt;10&lt;/td&gt;{"\n"}{"    "}&lt;td class="font-danger"&gt;cancle&lt;/td&gt;{"\n"}{"    "}&lt;td class="digits"&gt;$6523&lt;/td&gt;{"\n"}&lt;/tr&gt;{"\n"}&lt;tr&gt;{"\n"}{"    "}&lt;td&gt;Classical Latin literature&lt;/td&gt;{"\n"}{"    "}&lt;td class="digits"&gt;9&lt;/td&gt;{"\n"}{"    "}&lt;td class="font-info"&gt;Return&lt;/td&gt;{"\n"}{"    "}&lt;td class="digits"&gt;$6523&lt;/td&gt;{"\n"}&lt;/tr&gt;{"\n"}&lt;tr&gt;{"\n"}{"    "}&lt;td&gt;keep the site on the Internet&lt;/td&gt;{"\n"}{"    "}&lt;td class="digits"&gt;8&lt;/td&gt;{"\n"}{"    "}&lt;td class="font-secondary"&gt;Pending&lt;/td&gt;{"\n"}{"    "}&lt;td class="digits"&gt;$6523&lt;/td&gt;{"\n"}&lt;/tr&gt;{"\n"}&lt;tr&gt;{"\n"}{"    "}&lt;td&gt;Molestiae consequatur&lt;/td&gt;{"\n"}{"    "}&lt;td class="digits"&gt;3&lt;/td&gt;{"\n"}{"    "}&lt;td class="font-danger"&gt;cancle&lt;/td&gt;{"\n"}{"    "}&lt;td class="digits"&gt;$6523&lt;/td&gt;{"\n"}&lt;/tr&gt;{"\n"}&lt;tr&gt;{"\n"}{"    "}&lt;td class="pb-1"&gt;Sometimes by accident&lt;/td&gt;{"\n"}{"    "}&lt;td class="digits"&gt;8&lt;/td&gt;{"\n"}{"    "}&lt;td class="font-info"&gt;Return&lt;/td&gt;{"\n"}{"    "}&lt;td class="digits"&gt;$6523&lt;/td&gt;{"\n"}&lt;/tr&gt;{"\n"}&lt;tr&gt;{"\n"}{"    "}&lt;td&gt;keep the site on the Internet&lt;/td&gt;{"\n"}{"    "}&lt;td class="digits"&gt;8&lt;/td&gt;{"\n"}{"    "}&lt;td class="font-secondary"&gt;pending&lt;/td&gt;{"\n"}{"    "}&lt;td class="digits"&gt;$6523&lt;/td&gt;{"\n"}&lt;/tr&gt;{"\n"}&lt;tr&gt;{"\n"}{"    "}&lt;td&gt;sometimes by accident&lt;/td&gt;{"\n"}{"    "}&lt;td class="digits"&gt;10&lt;/td&gt;{"\n"}{"    "}&lt;td class="font-danger"&gt;cancle&lt;/td&gt;{"\n"}{"    "}&lt;td class="digits"&gt;$6523&lt;/td&gt;{"\n"}&lt;/tr&gt;{"\n"}&lt;tr&gt;{"\n"}{"    "}&lt;td&gt;Long established&lt;/td&gt;{"\n"}{"    "}&lt;td class="digits"&gt;1&lt;/td&gt;{"\n"}{"    "}&lt;td class="font-secondary"&gt;pending&lt;/td&gt;{"\n"}{"    "}&lt;td class="digits"&gt;$6523&lt;/td&gt;{"\n"}&lt;/tr&gt;{"\n"}&lt;tr&gt;{"\n"}{"    "}&lt;td&gt;Simply dummy text of the&lt;/td&gt;{"\n"}{"    "}&lt;td class="digits"&gt;8&lt;/td&gt;{"\n"}{"    "}&lt;td class="font-secondary"&gt;Pending&lt;/td&gt;{"\n"}{"    "}&lt;td class="digits"&gt;$6523&lt;/td&gt;{"\n"}&lt;/tr&gt;{"\n"}&lt;/tbody&gt;{"\n"}&lt;/table&gt;{"\n"}&lt;/div&gt;{"\n"}&lt;!-- Cod Box Copy end --&gt;</code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  )
}

export default Dashboard