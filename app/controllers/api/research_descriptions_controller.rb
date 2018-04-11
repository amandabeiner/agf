class Api::ResearchDescriptionsController < ApplicationController
  def index
    render json: ResearchDescription.first
  end
end

