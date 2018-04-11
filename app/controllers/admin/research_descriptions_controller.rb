class Admin::ResearchDescriptionsController < ApplicationController
  def update
    @description = ResearchDescription.first
    @description.update(bio_params)
    redirect_to writing_path
  end

  private

  def bio_params
    params.require(:research_description).permit(:paragraph)
  end
end
