class Admin:: ArticlesController <  ApplicationController
  def index
    @articles = Article.all
  end

  def new
    @article = Article.new
  end

  def edit 
    @article = Article.find(params[:id])
  end

  def update
    @article = Article.find(params[:id])

    if @article.update_attributes(article_params)
      redirect_to admin_articles_path
    else
      flash[:error] = "Error in edit: #{@article.errors.full_messages}"
      render :edit
    end
  end

  def create
    @article = Article.new(article_params)

    if @article.save
      redirect_to admin_articles_path
    else
      flash[:error] = "Error in create: #{@article.errors.full_messages}"
      render :new
    end
  end

  private

  def article_params
    params.require(:article).permit(:headline, :image_url, :url, :source, :hidden)
  end
end
