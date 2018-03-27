class Api::ArticlesController < ApplicationController
  def index
    articles = Article.where(hidden: false)
    render json: articles
  end
end
