class SchoolsController < ApplicationController
  def index
    @schools = Schools.all
  end

  def show
    @school = School.find(params[:id])
  end

  def new
    @school = School.new
  end

  def create
    @school = School.new(school_params)
    if @school.save
      flash[:success] = "New school created!"
    else
      render 'new'
    end
  end
end
