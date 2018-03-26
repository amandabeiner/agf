class Admin::AdminController < ApplicationController
  def index
    @resume = Resume.first
  end
end

