class Api::ResearchController < ApplicationController
  def index
    headline = Research.find_by(headline: true, hidden: false)
    projects = Research.where(hidden: false, headline: false)
    render json: { headline:  headline, projects: projects }
  end
end
