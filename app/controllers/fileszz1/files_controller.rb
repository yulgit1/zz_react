require 'json'
class Fileszz1::FilesController < Fileszz1::BaseController
  #use this method to run operations and return json
  def index
  end

  def loadfiles
    files = Array.new
    #files.push({:path => "sdaf", :name=>"zcxv"})
    #files.push({:path => "asdf", :name=>"xcvb"})
    #files.push({:path => "wret", :name=>"sdfg"})
    Dir.chdir(ENV["thumbs"])
    Dir.glob('**/*.jpg').each { |t|
      files.push({:path => File.realpath(t), :name => File.basename(t)})
    }
    json = { :files => files}.to_json
    #respond_with json: json
    render :json => json
  end
end
