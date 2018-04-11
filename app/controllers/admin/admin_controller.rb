class Admin::AdminController < ApplicationController
  def index
    @current_user = current_user
    @resume = Resume.first
  end

  def create
    user = User.find_by(email: params[:email])

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
    else
      flash[:error] = "Try again, those credentials were invalid"
    end
    
    redirect_to '/admin'
  end

  def destroy
    session[:user_id] = nil
    redirect_to '/admin'
  end
end

