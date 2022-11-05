import React from 'react'

const Titlebar = () => {
  return (
    <div className="row">
                    <div className="col-12 col-xl-9 col-lg-8 col-md-8 col-sm-12">
                    <div className="grid-top">
                        <div className="row">
                        <div className="col-12 col-xl-9 col-lg-8 col-md-6 col-sm-12">
                            <h1 className="heading1">Dairy &amp; Bakery</h1>
                            <p>Showing result 1-22 of 22 result</p>
                        </div>
                        <div className="col-12 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="search_form">
                            <input type="search" name="search" className="form-control" placeholder="Search Product" />
                            <span className="input-icon"><i className="fa fa-search" aria-hidden="true" /></span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 category-sidebar">
                    <div className="filter-group">
                        <div className="filter-content list_inline">
                        <span className="custom-dropdown">
                            <select className="form-control">
                            <option value={0}>Short by latest</option>
                            <option value={1}>10</option>
                            <option value={2}>25</option>
                            <option value={3}>50</option>
                            <option value={4}>All</option>
                            </select>
                        </span>
                        <div className="btn-group">
                            <button type="button" className="btn grid" id="grid-view" data-toggle="tooltip" title="Grid"> 
                            <i className="fa fa-th" aria-hidden="true" />
                            </button>
                            <button type="button" className="btn list" id="list-view" data-toggle="tooltip" title="List"> 
                            <i className="fa fa-list-ul" aria-hidden="true" />
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
  )
}

export default Titlebar