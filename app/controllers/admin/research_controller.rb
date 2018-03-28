class Admin::ResearchController < ApplicationController
  def index
    @projects = Research.all
  end

  def create
    @project = Research.new(research_params)
    @project.save
  end

  def update
    @project = Research.find(params[:id])
    @project.update(research_params)
    redirect_to research_path
  end

  def show
    @project = Research.find(params[:id])
  end

  def edit
    @project = Research.find(params[:id])
  end

  def new
    @project = Research.new
  end

  private

  def research_params
    params.require(:research).permit(:title, :description, :image_url, :headline, :hidden)
  end
end

