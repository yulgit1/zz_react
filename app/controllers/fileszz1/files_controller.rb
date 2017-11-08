require 'json'
class Fileszz1::FilesController < Fileszz1::BaseController
  #use this method to run operations and return json
  def index
  end

  def loadfiles
    files = Array.new
    ##files.push(["realpath1","basename1"]);
    files.push({:path => "sdaf", :name=>"zcxv"})
    files.push({:path => "asdf", :name=>"xcvb"})
    files.push({:path => "wret", :name=>"sdfg"})
    ##files.push(["realpath2","basename2"]);
    ##files.push(["realpath3","basename3"]);
    json = { :files => files}.to_json
    #respond_with json: json
    render :json => json
  end
end
