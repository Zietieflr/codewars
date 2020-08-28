def maskify(cc)
  cc.length <= 4 ? cc : cc[-4..-1].rjust(cc.length, '#')
end
