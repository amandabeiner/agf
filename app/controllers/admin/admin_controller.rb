class Admin::AdminController < ApplicationController
  def index
    @resume = Resume.first
    @bio = Bio.first
  end
end

