class ResearchesController < ApplicationController
  def index
    @project = Research.all
  end

  def create
    @project = Research.new(research_params)
    @project.save
  end

  def update
    @project = Project.find(params[:id])
    @project.update(research_params)
  end

  private

  def research_params
    params.require(:research).permit(:title, :description, :image_url, :headline, :hidden)
  end
end

