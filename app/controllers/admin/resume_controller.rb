class Admin::ResumeController < ApplicationController
  before_action :authorize!

  def edit
    @resume = Resume.first
  end

  def update
    @resume = Resume.first
    @resume.update(resume_params)
  end

  private

  def resume_params
    params.require(:resume).permit(:url)
  end
end
