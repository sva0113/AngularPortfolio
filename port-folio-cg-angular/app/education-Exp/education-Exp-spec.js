describe('EducationExpCtrl', function() {

    beforeEach(module('y'));

    var scope,ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('EducationExpCtrl', {$scope: scope});
    }));

    it('should ...', inject(function() {

        expect(1).toEqual(1);
        
    }));

});
