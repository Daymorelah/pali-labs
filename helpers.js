class helpers {
  static validateUserInput(req, res, next) {
    if (!req.body.menuIDs) return res.status(400).json({
      message: 'A menuIDs field is required',
    });
    const menuIDs = JSON.parse(req.body.menuIDs);
    if (menuIDs.constructor !== Array) return res.status(400).json({
      message: 'The list of menu IDs must be in an array'
    });
    req.body.menuIDs = menuIDs;
    next();
  }
}

export default helpers;
