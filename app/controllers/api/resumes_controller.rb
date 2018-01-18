class Api::ResumesController < ApplicationController
  def show
    resume = Resume.first
    render json: resume
  end

  def update
    resume = Resume.first
    resume.update(resume_params)
    render json: resume
  end

  private

  def resume_params
    params.require(:resume).permit(:url)
  end
end

