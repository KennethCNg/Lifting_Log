@logs.each do |log|
    json.set! log.id do
      json.extract! log, :food, :carb, :fat, :protein, :author_id
    end
  end