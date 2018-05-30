class Admin::BiosController < ApplicationController
  def edit
    @bio = Bio.first
  end

  def update
    @bio = Bio.first
    @bio.update(bio_params)
    redirect_to root_path
  end

  private

  def bio_params
    params.require(:bio).permit(:paragraph, :email)
  end
end
