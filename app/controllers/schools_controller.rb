class SchoolsController < ApplicationController
  def index
    @schools = Schools.all
  end

  def show
  end
end
