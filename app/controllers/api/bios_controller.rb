class Api::BiosController < ApplicationController
  def index
    render json: Bio.first
  end
end
